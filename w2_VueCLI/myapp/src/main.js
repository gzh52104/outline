// ESModule
// webpack构建工具
import Vue from 'vue' // import Vue from '../node_modules/vue/dist/vue.runtime.esm.js'

// Vue单文件组件
import App from './App.vue'

// // 导入a模块对象中所有属性，并赋值给aModule变量
// import * as aModule from './module/a.js'
// console.log('aModule', aModule)

// // 导入a模块对象中的default属性
// import className from './module/a.js'
// console.log('className=', className)

// // 导入a模块对象中的username属性
// import { username, a as apple } from './module/a.js'
// console.log('username=', username)
// console.log('apple=', apple)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
