import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/components/Home';
import List from '@/components/List';
import New from '@/components/New';



Vue.use(Router)
Vue.use(VueResource)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { 
      path: '/list', 
      name: 'List',
      component: List 
    },
    { 
      path: '/new', 
      name: 'New',
      component: New 
    }
  ]
})
