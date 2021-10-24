<template>
  <div>
    <v-combobox
      v-model="select"
      :items="items"
      label="年度"
      solo
      dense
    ></v-combobox>
    <BarChart
      :chart-data="chartdata"
      :options="options"
      style="position: relative; height:40vh"
    />
  </div>
</template>

<script>
import BarChart from "@/components/BarChart.vue";
import { mapGetters } from "vuex";

export default {
  name: "BarDisplay",
  components: {
    BarChart,
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
    ...mapGetters({ salesCount: "getSalesCount" }),
    chartdata() {
      return {
        labels: [
          "1月 LP",
          "Amazon",
          "その他",
          "2月 LP",
          "Amazon",
          "その他",
          "3月 LP",
          "Amazon",
          "その他",
          "4月 LP",
          "Amazon",
          "その他",
          "5月 LP",
          "Amazon",
          "その他",
          "6月 LP",
          "Amazon",
          "その他",
          "7月 LP",
          "Amazon",
          "その他",
          "8月 LP",
          "Amazon",
          "その他",
          "9月 LP",
          "Amazon",
          "その他",
          "10月 LP",
          "Amazon",
          "その他",
          "11月 LP",
          "Amazon",
          "その他",
          "12月 LP",
          "Amazon",
          "その他",
        ],
        datasets: [
          {
            label: "販売件数",
            backgroundColor: [
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
            ],
            data: this.salesCount,
          },
          {
            label: "月別販売件数",
            data: this.$store.getters.getTotalSalesCount,
            pointBackgroundColor: "rgba(0, 0, 0, 0.0)",
            pointBorderColor: "rgba(0, 0, 0, 0.0)",
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
