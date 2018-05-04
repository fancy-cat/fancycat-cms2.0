<template>
  <div class="alldetail">
    <h4 v-text="newsDatail.title"></h4>
    <p>
      <span>{{newsDatail.add_time}}</span>
      <span class="mui-pull-right">点击{{newsDatail.click}}次</span>
    </p>
    <hr>
    <div v-html="newsDatail.content"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      newsDatail:{}
    }
  },
  created(){
    axios({
      url:'http://www.escook.cn:3000/api/getnew/'+this.$route.params.id
    }).then(res=>{
      if(res.data.status==0){
        this.newsDatail = res.data.message[0];
        console.log(this.newsDatail)
      }
    })
  }
}
</script>

<style>

</style>
