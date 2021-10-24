<template>
  <div>
    <v-combobox
      v-model="select"
      :items="items"
      label="年度"
      solo
      dense
    ></v-combobox>
    <PieChart
      :chart-data="chartdata"
      :options="options"
       style="position: relative; height:40vh"
    />
    <!-- タブ画面を切り替えるとchartjsのグラフ描画がうまく行かない
    （キャンバスサイズ変更を、CANVAS要素から直接の検出することができない）
    styleを書くことで対応（https://misc.0o0o.org/chartjs-doc-ja/general/responsive.html） -->
  </div>
</template>

<script>
import PieChart from "@/components/PieChart.vue";
import { mapGetters } from "vuex";

export default {
  name: "PieDisplay",
  components: {
    PieChart,
  },
  data() {
    return {
      select: ["2021"],
      items: ["2022", "2021", "2020"],
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  watch: {
    select: function (val, oldVal) {
      console.log(val + oldVal);
      this.$store.state.selectYear = val;
    },
  },
  computed: {
    ...mapGetters({ yearSalesCount: "getYearSalesCount" }),
    chartdata() {
      return {
        labels: [
          "LP",
          "Amazon",
          "銀行振込",
          "次世代",
        ],
        datasets: [
          {
            label: "販売件数",
            backgroundColor: [
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(203, 0, 50, 0.8)",
            ],
            data: this.yearSalesCount,
          },
        ],
      };
    },
  },
};
</script>

<style>
</style>
