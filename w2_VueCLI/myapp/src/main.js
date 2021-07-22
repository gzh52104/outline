// ESModule
// webpack构建工具
import Vue from 'vue' // import Vue from '../node_modules/vue/dist/vue.runtime.esm.js'

// Vue单文件组件
import App from './App.vue'
console.log('App=', App)
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
  // render: h => h(App),
  render: function (createElement) {
    return createElement(App)
    // <h1 class style="color:#f00" v-on:click="" />
    return createElement('h1', {
      // 组件props
      props: {
        a: 1, b: 2
      },
      // 普通html属性
      attrs: { id: 'title', a: 10 },
      'class': {
        title: true,
      },
      style: {
        color: '#f00'
      },
      // 事件
      on: {
        click() {
          console.log(123)
        }
      }
    }, [
      'hello',
      createElement('span', null, 'vNode')
    ])
  }
}).$mount('#app')
