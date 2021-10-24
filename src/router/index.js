import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Input from '../views/Input.vue'
import ChartHome from '../views/ChartHome'
import JapanMap from '../views/JapanMap.vue'
import AdView from '../views/AdView.vue'
import CsvImport from '../components/CsvImport'
//import CsvImport from '../components//CsvImport.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/Map',
    name: 'JapanMap',
    component: JapanMap
  },
  {
    path: '/Chart',
    name: 'Chart',
    component: ChartHome
  },
  {
    path: '/Input',
    name: 'Input',
    component: Input
  },
  {
    path: '/Import',
    name: 'Import',
    component: CsvImport
  },
  {
    path: '/Ad',
    name: 'Ad',
    component: AdView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
