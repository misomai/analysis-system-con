<template>
  <div>
    <v-combobox
      v-model="selectProduct"
      :items="this.$store.state.products"
      label="年度"
      solo
      dense
    ></v-combobox>
    <v-combobox
      v-model="selectItem"
      :items="items"
      label="年度"
      solo
      dense
    ></v-combobox>
    <v-combobox
      v-model="selectYear"
      :items="years"
      label="年度"
      solo
      dense
    ></v-combobox>
    <LineChart
      :chart-data="chartdata"
      :options="options"
      style="position: relative; height:40vh"
    />
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
      years: [ "2023","2022", "2021"],
      selectProduct: ["a"],
      products: [ "a","aa", "aaa"],
      selectItem: ["z"],
      items: [ "z","z", "z"],
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
