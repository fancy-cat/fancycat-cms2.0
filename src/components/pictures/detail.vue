<template>
  <div>
    <div  v-for="(item,index) in imgList" :key="index" class="mui-card">
				<div class="mui-card-header mui-card-media" :style='"height:40vw;background-image:url("+item.img_url+")"'></div>
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <p>{{item.title}}</p>
              <p style="color: #333;">{{item.zhaiyao}}</p>
            </div>
          </div>
          <div class="mui-card-footer">
            <a class="mui-card-link"></a>
            <router-link :to="'/pics/detail/preview/'+item.id" class="mui-card-link">查看详情</router-link>
          </div>
			</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      imgList:[]
    }
  },
  created(){
    axios({
      url:'http://www.escook.cn:3000/api/getimages/'+this.$route.params.id
    }).then(res=>{
      if(res.data.status == 0){
        this.imgList = res.data.message;
      }
    })
  },
}
</script>

<style>

</style>
