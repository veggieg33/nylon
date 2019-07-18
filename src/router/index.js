import Vue from 'vue';
import Router from 'vue-router'
//import App from '@/App.vue'
import Home from '@/components/Home.vue'
import collection from '@/components/Collection/collection.vue'
import fashion from '@/components/Fashion/fashion.vue'
import news from '@/components/News/news.vue'
import newsItem from '@/components/News/newsItem.vue'
import shop from '@/components/Shop/shop.vue'
import shopItem from '@/components/Shop/shopItem.vue'
import cart from '@/components/Shop/cart.vue'
import shopDetail from '@/components/Header/shopDetail.vue'
import login from '@/components/login/login.vue'



Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    //Home
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
     {
      path:"/",
      name:"fashion",
      component:fashion
    },
      {
      path:"/collection",
      name:"collection",
      component:collection
    },
     {
      path:"/fashion",
      name:"fashion",
      component:fashion
    },
    {
      path:"/news",
      name:"news",
      component:news
    },
    {
      path:"/newsItem",
      name:"newsItem",
      component:newsItem
    },
    {
      path:"/shop",
      name:"shop",
      component:shop
    },
    {
      path:"/shopItem",
      name:"shopItem",
      component:shopItem
    },
    {
      path:"/cart",
      name:"cart",
      component:cart
    },
    {
      path:"/login",
      name:"login",
      component:login
    },
   
  ]
    }
    
  ]
})
