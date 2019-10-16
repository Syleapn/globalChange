<script>
	export default {
		globalData: {
			vala: 1
		},
		onLaunch: function() {

			// 更改值
			let that = this;

			// 通过globalData更改
			that.$options.globalData.vala = 20;
			console.log("globalData.vala", that.$options.globalData.vala) //20

			// 通过Vue.prototype挂载更改值
			that.$vala = 30;
			console.log("$vala", that.$vala) //30
			that.methodA(40);
			console.log("$valb", that.$valb) //40
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
