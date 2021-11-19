<template>
  <div>
    <v-row>
      <v-col cols="9">
        <v-combobox
          v-model="selectProduct"
          :items="products"
          label="商品ID"
          solo
          dense
        ></v-combobox>
      </v-col>
      <v-col cols="1">
        <v-btn small fab dark color="indigo">
          <v-icon class="justify-end" dark @click="addProductGraph">
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn small fab dark color="red">
          <v-icon class="justify-end" dark @click="removeProductGraph">
            mdi-minus
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-text-field
      label="商品名"
      disabled
      v-model="selectProductName"
    ></v-text-field>
    <LineChart
      ref="LineChartChild"
      :chart-data="chartdata"
      :options="options"
      style="position: relative; height: 40vh"
    />

    <v-row>
      <v-col cols="4">
        <v-combobox
          background-color="#2ECC71"
          v-model="selectItem"
          :items="items"
          label="項目"
          solo
          dense
        ></v-combobox>
      </v-col>
      <v-col cols="4">
        <v-combobox
          background-color="#90CAF9"
          v-model="selectYear"
          :items="years"
          label="年度"
          solo
          dense
        ></v-combobox>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LineChart from "@/components/LineChart.vue";

export default {
  name: "LineDisplay",
  components: {
    LineChart,
  },
  data() {
    return {
      selectYear: this.$store.getters.getSelectYear,
      years: ["2022", "2021", "2020"],
      selectProduct: this.$store.getters.getSelectProduct,
      products: this.$store.getters.getProducts,
      selectItem: this.$store.getters.getSelectItem,
      selectProductName: "",
      items: [
        "売上",
        "売上件数",
        "アクセス人数",
        "ユニークユーザー数",
        "転換率",
        "客単価",
        "レビュー評価",
        "レビュー数",
        "離脱率",
      ],
      lineColor: [
        "rgba(220, 20, 60, 0.8)",
        "rgba(60, 179, 113, 0.8)",
        "rgba(65, 105, 225, 0.8)",
        "rgba(240, 230, 140, 0.8)",
        "rgba(255, 182, 193, 0.8)",
        "rgba(0, 206, 209, 0.8)",
        "rgba(255, 140, 0, 0.8)",
        "rgba(123, 104, 238, 0.8)",
      ],
      lineColorIndex: 0,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
      loaded: false,
      datasets: [],
    };
  },
  watch: {
    selectProduct: function (val, oldVal) {
      console.log(val + oldVal);
      // this.$store.state.selectProduct = val;
      this.selectProductName = this.findProductName(val);
    },
    selectYear: function (val, oldVal) {
      console.log(val + oldVal);
      this.$store.state.selectYear = val;
      var changedData = [];

      this.datasets.forEach((element) => {
        this.selectProduct = element.label;
        changedData.push({
          label: this.selectProduct,
          data: this.getGraphData(),
          pointBackgroundColor: "white", // 点の塗りつぶしの色
          pointBorderColor: "#249EBF", // 点の境界線の色
          borderColor: element.borderColor,
          fill: false,
          type: "line",
          lineTension: 0.1,
        });
      });
      this.datasets = changedData;
      this.$refs.LineChartChild.reRenderChart();
    },
    selectItem: function (val, oldVal) {
      console.log(val + oldVal);
      this.$store.state.selectItem = val;
      var changedData = [];

      this.datasets.forEach((element) => {
        this.selectProduct = element.label;
        changedData.push({
          label: this.selectProduct,
          data: this.getGraphData(),
          pointBackgroundColor: "white", // 点の塗りつぶしの色
          pointBorderColor: "#249EBF", // 点の境界線の色
          borderColor: element.borderColor,
          fill: false,
          type: "line",
          lineTension: 0.1,
        });
      });
      this.datasets = changedData;
      this.$refs.LineChartChild.reRenderChart();
      // Todo 項目が替わるとグラフリセット
    },
  },
  computed: {
    chartdata() {
      return {
        labels: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        datasets: this.datasets,
      };
    },
  },
  methods: {
    addProductGraph: function () {
      // Todo 同じデータは追加できないように
      this.chartdata.datasets.push({
        label: this.selectProduct,
        data: this.getGraphData(),
        pointBackgroundColor: "white", // 点の塗りつぶしの色
        pointBorderColor: "#249EBF", // 点の境界線の色
        borderColor: this.graphColorSetting(),
        fill: false,
        type: "line",
        lineTension: 0.1,
      });
      //this.$set(this.chartdata, "datasets", this.chartdata.datasets);
      //this.loaded = true;
      this.$refs.LineChartChild.reRenderChart();
    },
    removeProductGraph: function () {
      //Todo : LineColorIndexの調整の必要あり
      if (this.chartdata.datasets.length > 0) {
        this.chartdata.datasets.pop();
        this.$refs.LineChartChild.reRenderChart();
      }
    },
    graphColorSetting() {
      var lineColor = this.lineColor[this.lineColorIndex];
      if (this.lineColorIndex >= this.lineColor.length - 1) {
        this.lineColorIndex = 0;
      } else {
        this.lineColorIndex++;
      }
      return lineColor;
    },
    getGraphData: function () {
      var graphDataDic = {};
      graphDataDic["2020"] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      graphDataDic["2021"] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      graphDataDic["2022"] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      var importedData = this.$store.getters.getRows;
      importedData.forEach((element) => {
        if (element.productId == this.selectProduct) {
          var orderDate = new Date(Date.parse(element.date));
          var orderDateYear = orderDate.getFullYear().toString();
          if (orderDateYear === this.selectYear) {
            switch (this.selectItem) {
              case "売上":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphDataDic[orderDateYear][0] = element.earnings;
                    break;
                  case 1:
                    graphDataDic[orderDateYear][1] = element.earnings;
                    break;
                  case 2:
                    graphDataDic[orderDateYear][2] = element.earnings;
                    break;
                  case 3:
                    graphDataDic[orderDateYear][3] = element.earnings;
                    break;
                  case 4:
                    graphDataDic[orderDateYear][4] = element.earnings;
                    break;
                  case 5:
                    graphDataDic[orderDateYear][5] = element.earnings;
                    break;
                  case 6:
                    graphDataDic[orderDateYear][6] = element.earnings;
                    break;
                  case 7:
                    graphDataDic[orderDateYear][7] = element.earnings;
                    break;
                  case 8:
                    graphDataDic[orderDateYear][8] = element.earnings;
                    break;
                  case 9:
                    graphDataDic[orderDateYear][9] = element.earnings;
                    break;
                  case 10:
                    graphDataDic[orderDateYear][10] = element.earnings;
                    break;
                  case 11:
                    graphDataDic[orderDateYear][11] = element.earnings;
                    break;
                }
                break;
              case "売上件数":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphDataDic[orderDateYear][0] = element.earningsTotal;
                    break;
                  case 1:
                    graphDataDic[orderDateYear][1] = element.earningsTotal;
                    break;
                  case 2:
                    graphDataDic[orderDateYear][2] = element.earningsTotal;
                    break;
                  case 3:
                    graphDataDic[orderDateYear][3] = element.earningsTotal;
                    break;
                  case 4:
                    graphDataDic[orderDateYear][4] = element.earningsTotal;
                    break;
                  case 5:
                    graphDataDic[orderDateYear][5] = element.earningsTotal;
                    break;
                  case 6:
                    graphDataDic[orderDateYear][6] = element.earningsTotal;
                    break;
                  case 7:
                    graphDataDic[orderDateYear][7] = element.earningsTotal;
                    break;
                  case 8:
                    graphDataDic[orderDateYear][8] = element.earningsTotal;
                    break;
                  case 9:
                    graphDataDic[orderDateYear][9] = element.earningsTotal;
                    break;
                  case 10:
                    graphDataDic[orderDateYear][10] = element.earningsTotal;
                    break;
                  case 11:
                    graphDataDic[orderDateYear][11] = element.earningsTotal;
                    break;
                }
                break;
              case "アクセス人数":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphDataDic[orderDateYear][0] = element.visitor;
                    break;
                  case 1:
                    graphDataDic[orderDateYear][1] = element.visitor;
                    break;
                  case 2:
                    graphDataDic[orderDateYear][2] = element.visitor;
                    break;
                  case 3:
                    graphDataDic[orderDateYear][3] = element.visitor;
                    break;
                  case 4:
                    graphDataDic[orderDateYear][4] = element.visitor;
                    break;
                  case 5:
                    graphDataDic[orderDateYear][5] = element.visitor;
                    break;
                  case 6:
                    graphDataDic[orderDateYear][6] = element.visitor;
                    break;
                  case 7:
                    graphDataDic[orderDateYear][7] = element.visitor;
                    break;
                  case 8:
                    graphDataDic[orderDateYear][8] = element.visitor;
                    break;
                  case 9:
                    graphDataDic[orderDateYear][9] = element.visitor;
                    break;
                  case 10:
                    graphDataDic[orderDateYear][10] = element.visitor;
                    break;
                  case 11:
                    graphDataDic[orderDateYear][11] = element.visitor;
                    break;
                }
                break;
              case "ユニークユーザー数":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphDataDic[orderDateYear][0] = element.uniqueUser;
                    break;
                  case 1:
                    graphDataDic[orderDateYear][1] = element.uniqueUser;
                    break;
                  case 2:
                    graphDataDic[orderDateYear][2] = element.uniqueUser;
                    break;
                  case 3:
                    graphDataDic[orderDateYear][3] = element.uniqueUser;
                    break;
                  case 4:
                    graphDataDic[orderDateYear][4] = element.uniqueUser;
                    break;
                  case 5:
                    graphDataDic[orderDateYear][5] = element.uniqueUser;
                    break;
                  case 6:
                    graphDataDic[orderDateYear][6] = element.uniqueUser;
                    break;
                  case 7:
                    graphDataDic[orderDateYear][7] = element.uniqueUser;
                    break;
                  case 8:
                    graphDataDic[orderDateYear][8] = element.uniqueUser;
                    break;
                  case 9:
                    graphDataDic[orderDateYear][9] = element.uniqueUser;
                    break;
                  case 10:
                    graphDataDic[orderDateYear][10] = element.uniqueUser;
                    break;
                  case 11:
                    graphDataDic[orderDateYear][11] = element.uniqueUser;
                    break;
                }
                break;
              case "転換率":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphDataDic[orderDateYear][0] = element.conversionRate;
                    break;
                  case 1:
                    graphDataDic[orderDateYear][1] = element.conversionRate;
                    break;
                  case 2:
                    graphDataDic[orderDateYear][2] = element.conversionRate;
                    break;
                  case 3:
                    graphDataDic[orderDateYear][3] = element.conversionRate;
                    break;
                  case 4:
                    graphDataDic[orderDateYear][4] = element.conversionRate;
                    break;
                  case 5:
                    graphDataDic[orderDateYear][5] = element.conversionRate;
                    break;
                  case 6:
                    graphDataDic[orderDateYear][6] = element.conversionRate;
                    break;
                  case 7:
                    graphDataDic[orderDateYear][7] = element.conversionRate;
                    break;
                  case 8:
                    graphDataDic[orderDateYear][8] = element.conversionRate;
                    break;
                  case 9:
                    graphDataDic[orderDateYear][9] = element.conversionRate;
                    break;
                  case 10:
                    graphDataDic[orderDateYear][10] = element.conversionRate;
                    break;
                  case 11:
                    graphDataDic[orderDateYear][11] = element.conversionRate;
                    break;
                }
                break;
              case "客単価":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphDataDic[orderDateYear][0] = element.unitPrice;
                    break;
                  case 1:
                    graphDataDic[orderDateYear][1] = element.unitPrice;
                    break;
                  case 2:
                    graphDataDic[orderDateYear][2] = element.unitPrice;
                    break;
                  case 3:
                    graphDataDic[orderDateYear][3] = element.unitPrice;
                    break;
                  case 4:
                    graphDataDic[orderDateYear][4] = element.unitPrice;
                    break;
                  case 5:
                    graphDataDic[orderDateYear][5] = element.unitPrice;
                    break;
                  case 6:
                    graphDataDic[orderDateYear][6] = element.unitPrice;
                    break;
                  case 7:
                    graphDataDic[orderDateYear][7] = element.unitPrice;
                    break;
                  case 8:
                    graphDataDic[orderDateYear][8] = element.unitPrice;
                    break;
                  case 9:
                    graphDataDic[orderDateYear][9] = element.unitPrice;
                    break;
                  case 10:
                    graphDataDic[orderDateYear][10] = element.unitPrice;
                    break;
                  case 11:
                    graphDataDic[orderDateYear][11] = element.unitPrice;
                    break;
                }
                break;
              case "レビュー評価":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphDataDic[orderDateYear][0] = element.reviewPoint;
                    break;
                  case 1:
                    graphDataDic[orderDateYear][1] = element.reviewPoint;
                    break;
                  case 2:
                    graphDataDic[orderDateYear][2] = element.reviewPoint;
                    break;
                  case 3:
                    graphDataDic[orderDateYear][3] = element.reviewPoint;
                    break;
                  case 4:
                    graphDataDic[orderDateYear][4] = element.reviewPoint;
                    break;
                  case 5:
                    graphDataDic[orderDateYear][5] = element.reviewPoint;
                    break;
                  case 6:
                    graphDataDic[orderDateYear][6] = element.reviewPoint;
                    break;
                  case 7:
                    graphDataDic[orderDateYear][7] = element.reviewPoint;
                    break;
                  case 8:
                    graphDataDic[orderDateYear][8] = element.reviewPoint;
                    break;
                  case 9:
                    graphDataDic[orderDateYear][9] = element.reviewPoint;
                    break;
                  case 10:
                    graphDataDic[orderDateYear][10] = element.reviewPoint;
                    break;
                  case 11:
                    graphDataDic[orderDateYear][11] = element.reviewPoint;
                    break;
                }
                break;
              case "レビュー数":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphDataDic[orderDateYear][0] = element.reviewTotal;
                    break;
                  case 1:
                    graphDataDic[orderDateYear][1] = element.reviewTotal;
                    break;
                  case 2:
                    graphDataDic[orderDateYear][2] = element.reviewTotal;
                    break;
                  case 3:
                    graphDataDic[orderDateYear][3] = element.reviewTotal;
                    break;
                  case 4:
                    graphDataDic[orderDateYear][4] = element.reviewTotal;
                    break;
                  case 5:
                    graphDataDic[orderDateYear][5] = element.reviewTotal;
                    break;
                  case 6:
                    graphDataDic[orderDateYear][6] = element.reviewTotal;
                    break;
                  case 7:
                    graphDataDic[orderDateYear][7] = element.reviewTotal;
                    break;
                  case 8:
                    graphDataDic[orderDateYear][8] = element.reviewTotal;
                    break;
                  case 9:
                    graphDataDic[orderDateYear][9] = element.reviewTotal;
                    break;
                  case 10:
                    graphDataDic[orderDateYear][10] = element.reviewTotal;
                    break;
                  case 11:
                    graphDataDic[orderDateYear][11] = element.reviewTotal;
                    break;
                }
                break;
              case "離脱率":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphDataDic[orderDateYear][0] = element.abandonmentRate;
                    break;
                  case 1:
                    graphDataDic[orderDateYear][1] = element.abandonmentRate;
                    break;
                  case 2:
                    graphDataDic[orderDateYear][2] = element.abandonmentRate;
                    break;
                  case 3:
                    graphDataDic[orderDateYear][3] = element.abandonmentRate;
                    break;
                  case 4:
                    graphDataDic[orderDateYear][4] = element.abandonmentRate;
                    break;
                  case 5:
                    graphDataDic[orderDateYear][5] = element.abandonmentRate;
                    break;
                  case 6:
                    graphDataDic[orderDateYear][6] = element.abandonmentRate;
                    break;
                  case 7:
                    graphDataDic[orderDateYear][7] = element.abandonmentRate;
                    break;
                  case 8:
                    graphDataDic[orderDateYear][8] = element.abandonmentRate;
                    break;
                  case 9:
                    graphDataDic[orderDateYear][9] = element.abandonmentRate;
                    break;
                  case 10:
                    graphDataDic[orderDateYear][10] = element.abandonmentRate;
                    break;
                  case 11:
                    graphDataDic[orderDateYear][11] = element.abandonmentRate;
                    break;
                }
                break;
            }
            //selectData.push(element.visitor);
          }
        }
      });
      var hage = graphDataDic[this.selectYear];
      console.log(hage);
      return graphDataDic[this.selectYear];
    },
    findProductName: function (productId) {
      var importedData = this.$store.getters.getRows;
      return importedData.find((element) => element.productId == productId)
        .name;
    },
  },
  mounted() {
    this.loaded = true;
    this.datasets.push({
      label: this.selectProduct,
      data: this.getGraphData(),
      pointBackgroundColor: "white", // 点の塗りつぶしの色
      pointBorderColor: "#249EBF", // 点の境界線の色
      borderColor: this.graphColorSetting(),
      fill: false,
      type: "line",
      lineTension: 0.1,
    });
    this.selectProductName = this.findProductName(this.selectProduct);
  },
};
</script>

<style>
</style>
