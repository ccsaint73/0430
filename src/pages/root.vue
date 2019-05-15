<template>
	
	<div class="root">
		
		<transition 
			:duration="500"
			enter-active-class="animated slideInRight"
			leave-active-class="animated sildeOutLeft bfix"
			>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
		
		<van-tabbar v-model="active">
		  <van-tabbar-item icon="home-o" to="/home">标签</van-tabbar-item>
		  <van-tabbar-item icon="search" to="/friend">标签</van-tabbar-item>
		  <van-tabbar-item icon="friends-o" to="/profile">标签</van-tabbar-item>
		</van-tabbar>
		
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      active: 0
	    }
	  }
	}
</script>

<style>
	.root{
		position: relative;
		padding-bottom: 50px;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.fade-enter-active, .fade-leave-active {
	  /*transition: opacity .5s;*/
	 	transition: all 1s ease;
	}
	.fade-enter, /* .fade-leave-active below version 2.1.8 */ {
	  	transform: translateX(100%);
	}
	
	.fade-leave-to  {
		transform: translateX(-100%);
		position: absolute;
	}
	
	.bfix{
		position: absolute;
	}
	
</style>