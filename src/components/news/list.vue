<template>
  <div>
    <!-- mui -->
    <ul class="mui-table-view mui-table-view-chevron">
				<li v-for="(item,index) in newsList" :key="index" class="mui-table-view-cell mui-media">
					<router-link :to="'/news/detail/'+ item.id" class="mui-navigate-right">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body mui-ellipsis" >
							{{item.title}}
							<p class="mui-ellipsis">{{item.zhaiyao}}</p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>

<script>

import axios from 'axios';
import '../../assets/mui/css/mui.css'

export default {
  data(){
    return {
      newsList:[]
    }
  },
  created(){
    axios({
      url:'http://www.escook.cn:3000/api/getnewslist'
    }).then(res=>{
      if(res.data.status == 0){
        this.newsList = res.data.message;
      }
    })
  }
}
</script>

<style>

</style>
