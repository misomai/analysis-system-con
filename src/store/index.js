import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rows: [
    ],
    adRows: [
      { id: 0, status: "実施済", continuation: "○", Prefectures: "沖縄県", municipalities: "南城市", population: "4.13万", populationDate: "2012-12-31" },
      { id: 0, status: "実施済", continuation: "○", Prefectures: "鹿児島県", municipalities: "指宿市", population: "4.393万", populationDate: "2012-12-31" },
    ],
    selectYear: '2021',
    selectProduct: '',
    selectProductName: '',
    selectItem: '',
    totalSaleCount: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
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
    getRows: state => {
      return state.rows;
    },
    getAdRows: state => {
      return state.adRows;
    },
    getSalesCount: state => {
      var saleCount = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ];
      state.rows.forEach(element => {
        var orderDate = new Date(Date.parse(element.orderDate));
        if (orderDate.getFullYear() == state.selectYear) {
          switch (orderDate.getMonth()) {
            case 0:
              switch (element.store) {
                case 'LP':
                  saleCount[0]++;
                  break;
                case 'Amazon':
                  saleCount[1]++;
                  break;
                default:
                  saleCount[2]++
                  break;
              }
              break;
            case 1:
              switch (element.store) {
                case 'LP':
                  saleCount[3]++;
                  break;
                case 'Amazon':
                  saleCount[4]++;
                  break;
                default:
                  saleCount[5]++
                  break;
              }
              break;
            case 2:
              switch (element.store) {
                case 'LP':
                  saleCount[6]++;
                  break;
                case 'Amazon':
                  saleCount[7]++;
                  break;
                default:
                  saleCount[8]++
                  break;
              }
              break;
            case 3:
              switch (element.store) {
                case 'LP':
                  saleCount[9]++;
                  break;
                case 'Amazon':
                  saleCount[10]++;
                  break;
                default:
                  saleCount[11]++
                  break;
              }
              break;
            case 4:
              switch (element.store) {
                case 'LP':
                  saleCount[12]++;
                  break;
                case 'Amazon':
                  saleCount[13]++;
                  break;
                default:
                  saleCount[14]++
                  break;
              }
              break;
            case 5:
              switch (element.store) {
                case 'LP':
                  saleCount[15]++;
                  break;
                case 'Amazon':
                  saleCount[16]++;
                  break;
                default:
                  saleCount[17]++
                  break;
              }
              break;
            case 6:
              switch (element.store) {
                case 'LP':
                  saleCount[18]++;
                  break;
                case 'Amazon':
                  saleCount[19]++;
                  break;
                default:
                  saleCount[20]++
                  break;
              }
              break;
            case 7:
              switch (element.store) {
                case 'LP':
                  saleCount[21]++;
                  break;
                case 'Amazon':
                  saleCount[22]++;
                  break;
                default:
                  saleCount[23]++
                  break;
              }
              break;
            case 8:
              switch (element.store) {
                case 'LP':
                  saleCount[24]++;
                  break;
                case 'Amazon':
                  saleCount[25]++;
                  break;
                default:
                  saleCount[26]++
                  break;
              }
              break;
            case 9:
              switch (element.store) {
                case 'LP':
                  saleCount[27]++;
                  break;
                case 'Amazon':
                  saleCount[28]++;
                  break;
                default:
                  saleCount[29]++
                  break;
              }
              break;
            case 10:
              switch (element.store) {
                case 'LP':
                  saleCount[30]++;
                  break;
                case 'Amazon':
                  saleCount[31]++;
                  break;
                default:
                  saleCount[32]++
                  break;
              }
              break;
            case 11:
              switch (element.store) {
                case 'LP':
                  saleCount[33]++;
                  break;
                case 'Amazon':
                  saleCount[34]++;
                  break;
                default:
                  saleCount[35]++
                  break;
              }
              break;

          }
        }
      });
      return saleCount;
    },
    getGraphData: state => {
      var graphData = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ];

      state.rows.forEach(element => {
        if (element.productId == state.selectProduct) {
          var orderDate = new Date(Date.parse(element.date));
          if (orderDate.getFullYear() == state.selectYear) {
            switch (state.selectItem) {
              case "売上":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphData[0] = element.earnings;
                    break;
                  case 1:
                    graphData[1] = element.earnings;
                    break;
                  case 2:
                    graphData[2] = element.earnings;
                    break;
                  case 3:
                    graphData[3] = element.earnings;
                    break;
                  case 4:
                    graphData[4] = element.earnings;
                    break;
                  case 5:
                    graphData[5] = element.earnings;
                    break;
                  case 6:
                    graphData[6] = element.earnings;
                    break;
                  case 7:
                    graphData[7] = element.earnings;
                    break;
                  case 8:
                    graphData[8] = element.earnings;
                    break;
                  case 9:
                    graphData[9] = element.earnings;
                    break;
                  case 10:
                    graphData[10] = element.earnings;
                    break;
                  case 11:
                    graphData[11] = element.earnings;
                    break;
                }
                break;
              case "売上件数":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphData[0] = element.earningsTotal;
                    break;
                  case 1:
                    graphData[1] = element.earningsTotal;
                    break;
                  case 2:
                    graphData[2] = element.earningsTotal;
                    break;
                  case 3:
                    graphData[3] = element.earningsTotal;
                    break;
                  case 4:
                    graphData[4] = element.earningsTotal;
                    break;
                  case 5:
                    graphData[5] = element.earningsTotal;
                    break;
                  case 6:
                    graphData[6] = element.earningsTotal;
                    break;
                  case 7:
                    graphData[7] = element.earningsTotal;
                    break;
                  case 8:
                    graphData[8] = element.earningsTotal;
                    break;
                  case 9:
                    graphData[9] = element.earningsTotal;
                    break;
                  case 10:
                    graphData[10] = element.earningsTotal;
                    break;
                  case 11:
                    graphData[11] = element.earningsTotal;
                    break;
                }
                break;
              case "アクセス人数":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphData[0] = element.visitor;
                    break;
                  case 1:
                    graphData[1] = element.visitor;
                    break;
                  case 2:
                    graphData[2] = element.visitor;
                    break;
                  case 3:
                    graphData[3] = element.visitor;
                    break;
                  case 4:
                    graphData[4] = element.visitor;
                    break;
                  case 5:
                    graphData[5] = element.visitor;
                    break;
                  case 6:
                    graphData[6] = element.visitor;
                    break;
                  case 7:
                    graphData[7] = element.visitor;
                    break;
                  case 8:
                    graphData[8] = element.visitor;
                    break;
                  case 9:
                    graphData[9] = element.visitor;
                    break;
                  case 10:
                    graphData[10] = element.visitor;
                    break;
                  case 11:
                    graphData[11] = element.visitor;
                    break;
                }
                break;
              case "ユニークユーザー数":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphData[0] = element.uniqueUser;
                    break;
                  case 1:
                    graphData[1] = element.uniqueUser;
                    break;
                  case 2:
                    graphData[2] = element.uniqueUser;
                    break;
                  case 3:
                    graphData[3] = element.uniqueUser;
                    break;
                  case 4:
                    graphData[4] = element.uniqueUser;
                    break;
                  case 5:
                    graphData[5] = element.uniqueUser;
                    break;
                  case 6:
                    graphData[6] = element.uniqueUser;
                    break;
                  case 7:
                    graphData[7] = element.uniqueUser;
                    break;
                  case 8:
                    graphData[8] = element.uniqueUser;
                    break;
                  case 9:
                    graphData[9] = element.uniqueUser;
                    break;
                  case 10:
                    graphData[10] = element.uniqueUser;
                    break;
                  case 11:
                    graphData[11] = element.uniqueUser;
                    break;
                }
                break;
              case "転換率":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphData[0] = element.conversionRate;
                    break;
                  case 1:
                    graphData[1] = element.conversionRate;
                    break;
                  case 2:
                    graphData[2] = element.conversionRate;
                    break;
                  case 3:
                    graphData[3] = element.conversionRate;
                    break;
                  case 4:
                    graphData[4] = element.conversionRate;
                    break;
                  case 5:
                    graphData[5] = element.conversionRate;
                    break;
                  case 6:
                    graphData[6] = element.conversionRate;
                    break;
                  case 7:
                    graphData[7] = element.conversionRate;
                    break;
                  case 8:
                    graphData[8] = element.conversionRate;
                    break;
                  case 9:
                    graphData[9] = element.conversionRate;
                    break;
                  case 10:
                    graphData[10] = element.conversionRate;
                    break;
                  case 11:
                    graphData[11] = element.conversionRate;
                    break;
                }
                break;
              case "客単価":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphData[0] = element.unitPrice;
                    break;
                  case 1:
                    graphData[1] = element.unitPrice;
                    break;
                  case 2:
                    graphData[2] = element.unitPrice;
                    break;
                  case 3:
                    graphData[3] = element.unitPrice;
                    break;
                  case 4:
                    graphData[4] = element.unitPrice;
                    break;
                  case 5:
                    graphData[5] = element.unitPrice;
                    break;
                  case 6:
                    graphData[6] = element.unitPrice;
                    break;
                  case 7:
                    graphData[7] = element.unitPrice;
                    break;
                  case 8:
                    graphData[8] = element.unitPrice;
                    break;
                  case 9:
                    graphData[9] = element.unitPrice;
                    break;
                  case 10:
                    graphData[10] = element.unitPrice;
                    break;
                  case 11:
                    graphData[11] = element.unitPrice;
                    break;
                }
                break;
              case "レビュー評価":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphData[0] = element.reviewPoint;
                    break;
                  case 1:
                    graphData[1] = element.reviewPoint;
                    break;
                  case 2:
                    graphData[2] = element.reviewPoint;
                    break;
                  case 3:
                    graphData[3] = element.reviewPoint;
                    break;
                  case 4:
                    graphData[4] = element.reviewPoint;
                    break;
                  case 5:
                    graphData[5] = element.reviewPoint;
                    break;
                  case 6:
                    graphData[6] = element.reviewPoint;
                    break;
                  case 7:
                    graphData[7] = element.reviewPoint;
                    break;
                  case 8:
                    graphData[8] = element.reviewPoint;
                    break;
                  case 9:
                    graphData[9] = element.reviewPoint;
                    break;
                  case 10:
                    graphData[10] = element.reviewPoint;
                    break;
                  case 11:
                    graphData[11] = element.reviewPoint;
                    break;
                }
                break;
              case "レビュー数":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphData[0] = element.reviewTotal;
                    break;
                  case 1:
                    graphData[1] = element.reviewTotal;
                    break;
                  case 2:
                    graphData[2] = element.reviewTotal;
                    break;
                  case 3:
                    graphData[3] = element.reviewTotal;
                    break;
                  case 4:
                    graphData[4] = element.reviewTotal;
                    break;
                  case 5:
                    graphData[5] = element.reviewTotal;
                    break;
                  case 6:
                    graphData[6] = element.reviewTotal;
                    break;
                  case 7:
                    graphData[7] = element.reviewTotal;
                    break;
                  case 8:
                    graphData[8] = element.reviewTotal;
                    break;
                  case 9:
                    graphData[9] = element.reviewTotal;
                    break;
                  case 10:
                    graphData[10] = element.reviewTotal;
                    break;
                  case 11:
                    graphData[11] = element.reviewTotal;
                    break;
                }
                break;
              case "離脱率":
                switch (orderDate.getMonth()) {
                  case 0:
                    graphData[0] = element.abandonmentRate;
                    break;
                  case 1:
                    graphData[1] = element.abandonmentRate;
                    break;
                  case 2:
                    graphData[2] = element.abandonmentRate;
                    break;
                  case 3:
                    graphData[3] = element.abandonmentRate;
                    break;
                  case 4:
                    graphData[4] = element.abandonmentRate;
                    break;
                  case 5:
                    graphData[5] = element.abandonmentRate;
                    break;
                  case 6:
                    graphData[6] = element.abandonmentRate;
                    break;
                  case 7:
                    graphData[7] = element.abandonmentRate;
                    break;
                  case 8:
                    graphData[8] = element.abandonmentRate;
                    break;
                  case 9:
                    graphData[9] = element.abandonmentRate;
                    break;
                  case 10:
                    graphData[10] = element.abandonmentRate;
                    break;
                  case 11:
                    graphData[11] = element.abandonmentRate;
                    break;
                }
                break;
            }
            //selectData.push(element.visitor);
          }
        }
      });

      return graphData;
    },
    getYearSalesCount: state => {
      var yearSaleCount = [
        0, 0, 0, 0
      ];
      state.rows.forEach(element => {
        var orderDate = new Date(Date.parse(element.orderDate));
        if (orderDate.getFullYear() == state.selectYear) {
          switch (element.store) {
            case 'LP':
              yearSaleCount[0]++;
              break;
            case 'Amazon':
              yearSaleCount[1]++;
              break;
            case '銀行振込':
              yearSaleCount[2]++;
              break;
            case "次世代":
              yearSaleCount[3]++;
              break;
          }
        }
      });
      return yearSaleCount;
    },
  }
})
