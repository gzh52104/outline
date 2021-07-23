import Vue from 'vue'
import VueRouter from 'vue-router';
// 引入路由组件
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg.vue'
import Discover from '../views/Discover.vue'
import Cart from '../views/Cart.vue'
import Mine from '../views/Mine.vue'
import Search from '../views/Search.vue'

// 3. 安装VueRouter插件
Vue.use(VueRouter)



// 4. 实例化路由，并配置路由表
const router = new VueRouter({
    // 配置参数
    routes: [
        { path: '/home', component: Home },
        { path: '/discover', component: Discover, name: 'find' },
        { path: '/cart', component: Cart },
        { path: '/mine', component: Mine },
        { path: '/login', component: Login },
        { path: '/reg', component: Reg },
        { path: '/search', component: Search, name: 'search' },
    ]
})

export default router;