<template>
	<div class="login">
		<van-cell-group>
		  <van-field
		    v-model="username"
		    required
		    clearable
		    label="用户名"
		    right-icon="question-o"
		    placeholder="请输入用户名"
		    @click-right-icon="$toast('question')"
		  />
		
		  <van-field
		    v-model="password"
		    type="password"
		    label="密码"
		    placeholder="请输入密码"
		    required
		  />
		</van-cell-group>
		
		<van-button type="info" @click="login">信息按钮</van-button>
	</div>
</template>

<script>
	
	import qs from 'qs';
	import Cookies from 'js-cookie';
	
	export default {
		data(){
			return {
				username:'',
				password:''
			}
		},
		methods: {
			login(){
				
				var url = 'http://api.baxiaobu.com/index.php/home/v1/login';
				
				var params = {
					username: this.username,
					pwd: this.password
				}
				
				params = qs.stringify(params);
				
				this.$axios.post(url, params).then((res)=>{
					console.log(res)
					
					Cookies.set('token', res.data.data.user_id)
					
					this.$router.push('/')
				})
			}
		}
	}
</script>

<style lang="less">
	.login {
		padding-top: 100px;
		
		button {
			width: 100%;
		}
	}
</style>