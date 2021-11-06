import Vue from 'vue'
import VueRouter from 'vue-router'
import ChartHome from '../views/ChartHome'
import Import from '../components/CsvImport.vue'
import ItemCompare from '../components/ItemCompareLineDisplay.vue'
import ProductCompare from '../components/ProductCompareLineDisplay.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Import',
    component: Import
  },
  {
    path: '/Chart',
    name: 'Chart',
    component: ChartHome
  },
  {
    path: '/ItemCompare',
    name: 'ItemCompare',
    component: ItemCompare
  },
  {
    path: '/ProductCompare',
    name: 'ProductCompare',
    component: ProductCompare
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
