import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//商品组件
import GoodsList from '@/components/goods/list'
import Goodsdetail from '@/components/goods/detail'

//新闻组件
import NewsList from '@/components/news/list'
import NewsDetail from '@/components/news/detail'

//图片分享组件
import PicsList from '@/components/pictures/list'
import PicDetail from '@/components/pictures/detail'

//底部导航组件
import Home from '@/components/tabbar/home'
import Member from '@/components/tabbar/member'
import Cart from '@/components/tabbar/cart'
import Search from '@/components/tabbar/search'

//配置路由
export default new Router({
  routes: [

    //重定向跳转到主页
    {
      path:'/',
      redirect:'/home'
    },
    //底部导航路由
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/member',
      component:Member,
    },
    {
      path:'/cart',
      component:Cart,
    },
    {
      path:'/search',
      component:Search,
    },
    //商品路由
    {
      path:'/goods',
      component:GoodsList,
    },
    {
      path:'/goods/detail/:id',
      component:Goodsdetail,
    },
    //新闻路由
    {
      path:'/news',
      component:NewsList,
    },
    {
      path:'/news/detail/:id',
      component:NewsDetail,
    },
    //图片路由
    {
      path:'/pic',
      component:PicsList,
    },
    {
      path:'/pic/detail',
      component:PicDetail,
    },
  ]
})
