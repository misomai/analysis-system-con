<template>
  <div>
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
              :rows="this.$store.getters.getAdRows"
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
          label: "広告配信状況",
          field: "status",
          filterOptions: {
            enabled: true, // enable filter for this column
          },
        },
        {
          label: "配信継続可否",
          field: "continuation",
        },
        {
          label: "都道府県",
          field: "Prefectures",
        },
        {
          label: "市区町村",
          field: "municipalities",
        },
        {
          label: "人口情報",
          field: "population",
        },
        {
          label: "確認日時",
          field: "populationDate",
          type: "date",
          dateInputFormat: "yyyy/MM/dd HH:mm",
          dateOutputFormat: "yyyy-MM-dd HH:mm:ss ",
          filterOptions: {
            enabled: true, // enable filter for this column
          },
        },
      ],
    };
  },
  methods: {
    loadCsvFile(e) {
      let vm = this;
      vm.workers = [];
      vm.message = "";
      let file = e.target.files[0];
      if (!file.type.match("text/csv")) {
        vm.message = "CSVファイルを選択してください";
        return;
      }

      let reader = new FileReader();
      reader.readAsText(file);

      reader.onload = () => {
        let lines = reader.result.split("\n").slice(1);
        const rows = lines.map(function (line) {
          const linesArr = line.split(",");
          return {
            store: linesArr[0],
            order: linesArr[1],
            name: linesArr[2],
            orderDate: linesArr[3],
            phoneNumber: linesArr[4],
            postalCode: linesArr[5],
            addressPrefectures: linesArr[6],
            addressMunicipalities: linesArr[7],
            address: linesArr[8],
            email: linesArr[9],
            sendName: linesArr[10],
            sendPhoneNumber: linesArr[11],
            sendPostalCode: linesArr[12],
            sendAddressPrefectures: linesArr[13],
            sendAddressMunicipalities: linesArr[14],
            sendAddress: linesArr[15],
            price: linesArr[16],
            other: linesArr[17],
          };
        });
        this.$store.commit("setRows", rows);
      };
    },
  },
};
</script>