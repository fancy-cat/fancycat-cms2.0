<template>
  <h4>暂时还找到ui</h4>
</template>

<script>

import axios from 'axios';
import '../../assets/mui/css/mui.css';


export default {
  data(){
      return {
          previewList:[]
      }
  },
  created(){
      axios({
        url:'http://www.escook.cn:3000/api/getthumimages/'+ this.$route.params.id
      }).then(res=>{
          if(res.data.status==0){
              this.previewList = res.data.message;
          }
      })
  }
}
</script>

<style scoped>
    ul img {
        width: 50%;
        float: left;
    }
    image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
    }

</style>

