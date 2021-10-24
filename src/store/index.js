import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rows: [
    ],
    adRows: [
      { id:0, status:"実施済", continuation: "○", Prefectures: "沖縄県", municipalities: "南城市" ,population: "4.13万",populationDate:"2012-12-31"},
      { id:0, status:"実施済", continuation: "○", Prefectures: "鹿児島県", municipalities: "指宿市" ,population: "4.393万",populationDate:"2012-12-31"},
    ],
    selectYear: '2021',
    totalSaleCount: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ],
    products:[
    ],
  },
  mutations: {
    setRows: function (state, payload) {
      state.rows = payload;
      var tmpProducts = state.rows.map(item => item.productId);
      state.products = tmpProducts.filter(function(x,i,self){
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
    getTotalSalesCount: state => {
      var totalSaleCount = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ];
      state.rows.forEach(element => {
        var orderDate = new Date(Date.parse(element.orderDate));
        if (orderDate.getFullYear() == state.selectYear) {
          switch (orderDate.getMonth()) {
            case 0:
              totalSaleCount[0]++;
              totalSaleCount[1]++;
              totalSaleCount[2]++
              break;
            case 1:
              totalSaleCount[3]++;
              totalSaleCount[4]++;
              totalSaleCount[5]++
              break;
            case 2:
              totalSaleCount[6]++;
              totalSaleCount[7]++;
              totalSaleCount[8]++
              break;
            case 3:
              totalSaleCount[9]++;
              totalSaleCount[10]++;
              totalSaleCount[11]++
              break;
            case 4:
              totalSaleCount[12]++;
              totalSaleCount[13]++;
              totalSaleCount[14]++
              break;
            case 5:
              totalSaleCount[15]++;
              totalSaleCount[16]++;
              totalSaleCount[17]++
              break;
            case 6:
              totalSaleCount[18]++;
              totalSaleCount[19]++;
              totalSaleCount[20]++
              break;
            case 7:
              totalSaleCount[21]++;
              totalSaleCount[22]++;
              totalSaleCount[23]++
              break;
            case 8:
              totalSaleCount[24]++;
              totalSaleCount[25]++;
              totalSaleCount[26]++
              break;
            case 9:
              totalSaleCount[27]++;
              totalSaleCount[28]++;
              totalSaleCount[29]++
              break;
            case 10:
              totalSaleCount[30]++;
              totalSaleCount[31]++;
              totalSaleCount[32]++
              break;
            case 11:
              totalSaleCount[33]++;
              totalSaleCount[34]++;
              totalSaleCount[35]++
              break;
          }
        }
      });
      return totalSaleCount;
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
