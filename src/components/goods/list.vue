<template>
  <div>
    <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
      <li v-for="(item,index) in goodsList" :key="index" class="mui-table-view-cell good">
        <router-link :to="'/goods/detail/'+item.id">
          <div class="mui-col-xs-8 mui-pull-right goodDes">
            <h4 class="mui-ellipsis">{{item.title}}</h4>
            <h5>{{item.add_time}}</h5>
            <p class="mui-h6" >{{item.zhaiyao}}</p>
            <p class="des-bottom"><span class="salePrice">&yen;{{item.sell_price}}</span> <del>&yen;{{item.market_price}}</del></p>
        </div>
          <div class="mui-col-xs-3">
            <!-- <span class="mui-h5">12:25</span> -->
            <img :src="item.img_url" alt="">
        </div>
        </router-link>
      </li>  
    </ul>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data(){
    return {
      goodsList:[],
      pageindex:1
    }
  },
  created(){
    axios({
      url:'http://www.escook.cn:3000/api/getgoods?pageindex='+this.pageindex
    }).then(res=>{
      if(res.data.status==0){
        this.goodsList = res.data.message;
        console.log(this.goodsList)
      }
    })
  }
}
</script>

<style>
 .good {
   height: 150px;
 }
 .good a {
   height: 100%;
   position:relative;
 }
 .mui-table-view-cell > a:not(.mui-btn){
   padding: 0;
 }
 .good img {
  width: 100%!important;
  padding-top: 25px;
}
.salePrice {
  font-size: 20px;
  color: red;
}
.goodDes {
  height: 100%;
}
.des-bottom {
  position: absolute;
  bottom: 10px;
}
</style>
