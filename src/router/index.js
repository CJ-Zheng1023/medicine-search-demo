import Vue from 'vue'
import Router from 'vue-router'
import Search from 'components/Search'
import View from 'components/View'
import Detail from 'components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/view',
      name: 'View',
      component: View
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
