<template>
  <div>
      <ul class="mui-table-view">
				<li v-for="(item,index) in categories" :key="index" class="mui-table-view-cell">
					<router-link :to="'/pics/detail/'+item.id" class="mui-navigate-right">
						{{item.title}}
					</router-link>
				</li>
			</ul>
  </div>
</template>

<script>

import axios from 'axios';
import '../../assets/mui/css/mui.css';

export default {
  data(){
    return {
      categories:[]
    }
  },
  created(){
    axios({
      url:'http://www.escook.cn:3000/api/getimgcategory'
    }).then(res=>{
      if(res.data.status==0){
        this.categories = res.data.message;
      }
    })
  }
}
</script>

<style>

</style>
