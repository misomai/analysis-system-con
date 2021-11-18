import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rows: [
    ],
    selectYear: '2021',
    selectProduct: '',
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
  }
})
