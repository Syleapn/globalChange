<template>
	<view>
		
		<view class="" @click="toIndex">
			index
		</view>
	</view>
</template>

<script>
	import app from '../../App.vue';
	
	export default{
		
		onLoad() {
			// 挂载 Vue.prototype，globalData不同之处
			
			// 两者不同：
			// 一 在APP.vue中更改了全局变量值,在页面中进行调用时~
			// 通过Vue.prototype挂载的变量，更改并没有生效，通过方法调用更改值也一样无效
			// 通过globalData声明的变量，更改生效
			
			// 相同点：两者在页面中进行更改时，在页面中调用都会生效。
			
			
			let that = this;
			// 不同点验证
			console.log("拿到App.vue中更改后的值vala",app.globalData.vala); //20
			console.log("拿到App.vue更改后的值$vala",that.$vala); //1
			console.log("拿到App.vue更改后的值that.methodA(30);",that.$valb) //1
			
			
			// 相同点验证
			// 在页面change.vue中更改值
			app.globalData.vala = 100;
			console.log(app.globalData.vala); //100
			that.$vala = 200;
			console.log(that.$vala) //200
			that.methodA(300);
			console.log(that.$valb)  //300
		},
		
		
		methods:{
			toIndex(){
				uni.navigateTo({
					url:'/pages/index/index'
				})
			}
		}
		
	}
</script>
    
<style>
</style>
