<template>
    
    <div class="comment">
        <h4>发表评论</h4>
        <hr>
        <textarea name="" id="" cols="30" rows="3" v-model="content"></textarea>
        <mt-button size="large" type="primary" @click="addCom">发表评论</mt-button>
        <ul class="mui-table-view">
            <li v-for="(item,index) in comments" :key="index" class="mui-table-view-cell mui-media">
                <a href="javascript:;" class="">
                    <div class="mui-pull-right">
                    <p>{{item.user_name}}</p>
                    <img class="mui-media-object" :src='"@/assets/images/menu"+Math.round(Math.random()*5+1)+".png"'>                        
                    </div>
                    <div class="mui-media-body">
                        <p>第{{index+1}}楼 {{item.add_time}}</p>
                        <p class="mui-ellipsis">{{item.content}}</p>
                    </div>
                </a>
            </li>	
        </ul>
        <mt-button size="large" type="danger" plain @click="moreCom" v-if="isShow">更多评论</mt-button>
    </div>

</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';


export default {
  data() {
    return {
      comments: [],
      pageindex:1,
      isShow:true,
      content:''
    };
  },
  props:['artid'],
  created(){
     this.getCom();
  },
  methods:{
    getCom(){
        axios({
            url:'http://www.escook.cn:3000/api/getcomments/'+this.artid+'?pageindex='+this.pageindex
        }).then(res=>{
            if(res.data.status==0){
                if(res.data.message.length>0){
                    this.comments.push(...res.data.message);
                }else{
                    this.isShow = false;
                    Toast("没有更多数据了");
                }
            }
        })
    },
    moreCom(){
        this.pageindex++;
        this.getCom();
    },
    addCom(){
        if(this.content.trim()){
            axios({
            url:'http://www.escook.cn:3000/api/postcomment/'+this.artid,
            method:'post',
            data:"content="+this.content
        }).then(res=>{
            this.comments.unshift({
                user_name:'匿名用户',
                add_time:new Date(),
                content:this.content
            });
            this.content = "";
        })
        }else{
            Toast("评论内容不能为空");
        }
    }

  }
};
</script>

<style>
.comment textarea {
    margin: 5px 0;
}
.mui-table-view img {
    margin-left: 8px;
}
</style>

