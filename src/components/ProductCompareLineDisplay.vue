<template>
  <div>
    <v-combobox
      v-model="selectProduct"
      :items="this.$store.state.products"
      label="商品"
      solo
      dense
    ></v-combobox>
    <v-text-field label="商品名あ" disabled v-model="this.$store.state.selectProductName"></v-text-field>
    <v-combobox
      v-model="selectItem"
      :items="items"
      label="項目"
      solo
      dense
    ></v-combobox>
    <LineChart
      :chart-data="chartdata"
      :options="options"
      style="position: relative; height: 40vh"
    />
    <v-combobox
      v-model="selectYear"
      :items="years"
      label="年度"
      solo
      dense
    ></v-combobox>
  </div>
</template>

<script>
import LineChart from "@/components/LineChart.vue";
import { mapGetters } from "vuex";

export default {
  name: "LineDisplay",
  components: {
    LineChart,
  },
  data() {
    return {
      selectYear: ["2021"],
      years: ["2023", "2022", "2021"],
      selectProduct: [""],
      products: [""],
      selectItem: ["売上"],
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
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  watch: {
    selectProduct: function (val, oldVal) {
      console.log(val + oldVal);
      this.$store.state.selectProduct = val;
      var hoge = this.$store.state.rows.find(element => element.productId == val);
      
      this.$store.state.selectProductName = hoge.name;
    },
    selectYear: function (val, oldVal) {
      console.log(val + oldVal);
      this.$store.state.selectYear = val;
    },
    selectItem: function (val, oldVal) {
      console.log(val + oldVal);
      this.$store.state.selectItem = val;
    },
  },
  computed: {
    ...mapGetters({ salesCount: "getSalesCount" }),
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
        datasets: [
          {
            label: this.selectItem,
            data: this.$store.getters.getGraphData,
            pointBackgroundColor: "white", // 点の塗りつぶしの色
            pointBorderColor: "#249EBF", // 点の境界線の色
            borderColor: "rgba(255, 150, 150, 0.8)",
            fill: false,
            type: "line",
            lineTension: 0.1,
          },
        ],
      };
    },
  },
};
</script>

<style>
</style>
