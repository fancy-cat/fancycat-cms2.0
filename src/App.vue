<template>
  <div id="app">
    <!-- 固定的头部 -->
    <mt-header title="fancycat-cms">
      <!-- 路径不是主页时隐藏back键，绑定点击事件跳到上一页 -->
      <!-- mint-ui -->
      <mt-button icon="back" slot="left" v-if="$route.path!='/home'" @click="$router.go(-1)">back</mt-button>
    </mt-header>

    <!-- 路由显示地址 -->
    <router-view/>

    <!-- 固定的尾部 -->
    <!-- mui -->
    <nav class="mui-bar mui-bar-tab">
			<router-link to="/home" class="mui-tab-item " href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">主页</span>
			</router-link>
			<router-link to="/member" class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/cart" class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/search" class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>


  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>

</style>
