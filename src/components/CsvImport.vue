<template>
  <div>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="8" justify="center">
        <input type="file" @change="loadCsvFile" />
        <p>{{ message }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <table border="1">
          <tr v-for="(worker, index) in workers" :key="index">
            <td v-for="(column, index) in worker" :key="index">{{ column }}</td>
          </tr>
        </table>
        <div>
          <div>
            <vue-good-table
              :columns="columns"
              :rows="this.$store.getters.getRows"
              :pagination-options="{ enabled: true, perPage: 30 }"
              styleClass="vgt-table condensed"
            />
            <!-- condensedってなに？ -->
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
/* DeepSelectorでなんとかする */
::v-deep table.vgt-table {
  font-size: 6px;
  border-collapse: collapse;
  background-color: #fff;
  width: 100%;
  max-width: 100%;
  table-layout: auto;
  border: 1px solid #dcdfe6;
}
.vgt-wrap {
  width: 80%;
  margin: 0 auto;
}
.vgt-wrap__footer {
  font-size: 10px;
  padding-top: 8px;
}

.vgt-wrap__footer.footer__row-count__label {
  font-size: 10;
}

.vgt-wrap__footer .footer__row-count__select {
  width: auto;
  font-size: 10pt;
  margin-left: 8px;
  padding: 3px;
  -webkit-appearance: listbox;
  -moz-appearance: listbox;
}
</style>

<script>
import VueGoodTablePlugin from "vue-good-table";
import Vue from "vue";

// import the styles
import "vue-good-table/dist/vue-good-table.css";

Vue.use(VueGoodTablePlugin);

export default {
  name: "CsvImport",
  components: {
    //"vue-good-table":VueGoodTablePlugin.vuetable,
  },
  data() {
    return {
      message: "",
      workers: [],
      columns: [
        {
          label: "年月",
          field: "date",
          type: "date",
          dateInputFormat: "yyyy/MM/dd",
          dateOutputFormat: "yyyy-MM-dd ",
          filterOptions: {
            enabled: true, // enable filter for this column
          },
        },
        {
          label: "商品ID",
          field: "id",
        },
        {
          label: "商品名",
          field: "name",
        },
        {
          label: "商品管理番号",
          field: "productId",
        },
        {
          label: "商品管理名",
          field: "productName",
        },
        {
          label: "売上",
          field: "earnings",
        },
        {
          label: "売上件数",
          field: "earningsTotal",
        },
        {
          label: "アクセス人数",
          field: "visitor",
        },
        {
          label: "ユニークユーザー数",
          field: "uniqueUser",
        },
        {
          label: "転換率",
          field: "conversionRate",
        },
        {
          label: "客単価",
          field: "unitPrice",
        },
        {
          label: "レビュー評価",
          field: "reviewPoint",
        },
        {
          label: "レビュー数",
          field: "reviewTotal",
        },
        {
          label: "離脱率",
          field: "abandonmentRate",
        },
      ],
      rows: [
        //{ id:0, name:"John", age: 20, createdAt: '2011-10-31',score: 0.03343 },
        // { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        // { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        // { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        // { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        // { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    };
  },
  methods: {
    loadCsvFile(e) {
      let vm = this;
      vm.workers = [];
      vm.message = "";
      let file = e.target.files[0];
      // if (!file.type.match("text/csv")) {
      //   vm.message = "CSVファイルを選択してください";
      //   return;
      // }

      let reader = new FileReader();
      reader.readAsText(file);

      reader.onload = () => {
        let lines = reader.result.split("\n").slice(1);
        const rows = lines.map(function (line) {
          const linesArr = line.split(",");
          return {
            date: linesArr[0],
            id: linesArr[1],
            name: linesArr[2],
            productId: linesArr[3],
            productName: linesArr[4],
            earnings: linesArr[5],
            earningsTotal: linesArr[6],
            visitor: linesArr[7],
            uniqueUser: linesArr[8],
            conversionRate: linesArr[9],
            unitPrice: linesArr[10],
            reviewPoint: linesArr[11],
            reviewTotal: linesArr[12],
            abandonmentRate: linesArr[13],
          };
        });
        this.$store.commit("setRows", rows);
      };
    },
  },
};
</script>