import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$vala = 1
Vue.prototype.$valb = 1
Vue.prototype.methodA = function(val){
	this.$valb = val
}

const app = new Vue({
    ...App
})
app.$mount()
