import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rows: [
    ],
    selectYear: '2021',
    selectProduct: '',
    selectProductName: '',
    selectItem: '',
    products: [
    ],
  },
  mutations: {
    setRows: function (state, payload) {
      state.rows = payload;
      var tmpProducts = state.rows.map(item => item.productId);
      state.products = tmpProducts.filter(function (x, i, self) {
        return self.indexOf(x) === i && i !== self.lastIndexOf(x);
      }).sort();
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getProducts: state => {
      return state.products
    },
    getRows: state => {
      return state.rows;
    },
    getSelectYear: state => {
      return state.selectYear
    },
    getSelectProduct: state => {
      return state.selectProduct
    },
    getSelectItem: state => {
      return state.selectItem
    },
    getGraphData: state => {
      var graphDataDic = {};
      graphDataDic['2020'] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      graphDataDic['2021'] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      graphDataDic['2022'] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      state.rows.forEach(element => {
        if (element.productId == state.selectProduct) {
          var orderDate = new Date(Date.parse(element.date));
          var orderDateYear = orderDate.getFullYear().toString();
          if (orderDateYear === state.selectYear) {
            switch (state.selectItem) {
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
      return graphDataDic[state.selectYear];
    },
  }
})
