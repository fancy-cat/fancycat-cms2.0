<template>
  <div class="goodDetail">
    <h4>{{goodDetail.title}}</h4>
    <div v-html="goodDetail.content"></div>
    <comment :artid="$route.params.id"></comment>
  </div>
</template>

<script>

import axios from 'axios';
import comment from '../common/comment';
export default {
  data(){
    return {
      goodDetail:{}
    }
  },
  created(){
    axios({
      url:' http://www.escook.cn:3000/api/goods/getdesc/'+this.$route.params.id
    }).then(res=>{
      this.goodDetail = res.data.message[0];
      console.log(this.goodDetail)
    })
  },
  components:{
    comment
  }
}
</script>

<style>
.goodDetail img{
  width:100%;
}
</style>
