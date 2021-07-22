## day2-1

### 知识点
* 前端三大框架
    * Angular       Google
    * React         Facebook
    * Vue           尤雨溪

* 开源

* Vue的使用
    > 实例化: new Vue()

* 架构分层
    * MVC
        * M: Model      数据层          ajax请求回来的数据
        * V: View       视图层          html
        * C: Controller 控制层          如何把数据渲染页面
    * MVP
        * M: Model
        * V: View
        * P: Presenter
    * MVVM
        * M: Model
        * V: View
        * VM: ViewModel

* 监听数据修改
    * 值属性
        > 有值的属性
        * 属性特性
            * configurable  可配置性（修改enumerable与writatable的总开关）
            * enumberable  可枚举型（是否可遍历）
            * writable     可写性（是否可修改）
            * value         属性值
    * 存储器属性getter&setter：监听对象数据的获取与修改操作
        > Object.defineProperty(target,prop,descriptor)
        * target: 目标对象
        * prop: 设置的属性
        * descriptory: 属性特性
            * configurable  可配置性
            * enumerable    可枚举型
            * get           监听读取操作
            * set           监听修改操作

    > PS: 传统方法添加的属性，属性特性默认为true，Object.defineProperty()添加的属性，属性特性默认为false
* 响应式属性
    > Vue在实例化时，会遍历model数据层下所有的属性，把它们改成**getter&setter**，当值被修改时，相应的视图会被刷新

* 在MVVM模式中，用户只需要关注数据变化，节点操作与页面刷新交给vm控制层处理
    > 我们需要改变思维模式：从节点操作思维转变成数据操作思维

* 指令Directive
    > html标签属性
    * v-text
    * v-html    慎用（在保证html内容安全的情况加使用，如XSS攻击）
    * v-for
        > 能遍历数组、对象、字符串、数字等
        * v-for="item in data"
        * v-for="item of data"
    * v-bind
        > 格式：v-bind:属性="属性值"
    * v-show    是否显示
    * v-on      事件绑定
        > 格式：v-on:事件类型="事件处理函数"
    * v-model   双向数据绑定
        > v-model替代方案(原理)：v-bind:value + v-on:input

* Vue绑定数据的方式
    * 单向数据绑定
        * {{}}
        * v-text
        * v-html
        * v-bind    把数据绑定到html属性
    * 双向数据绑定
        * 原理：
            * model -> view : getter&setter
            * view -> model: 事件

### 练习
* 课堂案例
* todolist

## day2-2

### 复习
* 历史
    1. jquery
    2. angular      ng-model
    3. react        虚拟DOM
    4. vue          综合angular与react的优点
* 架构分层
    * MVC
    * MVP
    * MVVM
* Vue的使用
    > 面向对象编程的框架
    ```js
        const vm = new Vue({
            el:'#app',
            data:{}
        })
    ```
    * **实例**
        * 属性
            * 内置属性：$
            * 私有属性：_
            * 自定义属性
        * 方法
* 响应式属性
    > getter&setter
* 属性特性
    * 值属性
        * configurable
        * enumerable
        * writable
        * value
    * 存储器属性
        > 可监听属性的读取与修改
        * configurable
        * enumerable
        * get
        * set

* **指令**
    * v-text
    * v-html
    * v-bind
    * v-on
    * v-for
    * v-model
    * v-show
    * v-if/v-else-if/v-else

* 数据绑定
    * 单向绑定
        * {{}}
        * v-text
        * v-html
        * v-bind
    * 双向绑定
        * v-model
            > 替代方案：v-bind:value + v-on:input
    * 事件绑定
        * v-on，简写@
    * 列表循环
        * v-for
    * 条件渲染
        * v-show
        * v-if
        ```js
            <div v-if="show">1</div>
            <div v-else-if="diplay"></div>
            <span v-else>2</span>
        ```

### 知识点
* 如何设置响应式属性
    * 初始化时设置data

* v-show与v-if的区别
    * 频繁的显示隐藏建议使用v-show，会有更好的性能优势
    * 初始化隐藏后不再需要显示的内容建议使用v-if

* todolist待办事项

* ref
    1. 给元素添加ref属性：`<input ref="input" />`
    2. 获取节点：this.$refs.input

* 事件：v-on:事件类型.修饰符="事件处理函数"
    * enter
    * ctrl

* **配置参数**
    * el
    * data
    * methods
    * template
    * components
    * computed  计算属性
        > 依赖的数据发生变化，computed中的代码才会重新计算（重新执行），否则获取缓存的数据（上一次计算的数据）
    * props
* **实例**
    > vm = new Vue(options)
    * 实例属性
        > vm.xx
    * 实例方法
        > vm.xx()
* **类**
    > Vue
    * 类属性（静态属性）
        > Vue.xx
    * 类方法（静态方法）
        > Vue.xx()
* **原型**
    * 原型属性
        > vm.xx
    * 原型方法
        > vm.xx()

* 组件Component
    * 优点
        * 更好的分工
        * 便于维护
        * 复用
    * 定义
        > 相当于创建一个html标签，一个组件就是一个Vue的实例，不能使用内置html标签作为组件名
        * 全局组件：Vue.component()
        * 局部组件：components
    * 组件通讯
        * 父->子：props
            1. 父组件操作：给子组件添加属性，并传递数据
            2. 子组件操作：子组件通过props接收

## day2-3

### 复习
* 组件component
    * 分类
        * 全局组件：Vue.component(name,options)
        * 局部组件: components
    * 使用
        ```js
            <name></name>
            <name></name>
        ```
### 知识点
* 组件通讯
    * 父->子: props
        > 组件实例化时会遍历props中所有的数据并写入组件实例
    * 子->父：
        * 自定义事件
            1. 父组件操作： 给子组件自定义事件并把父组件的函数作为事件处理函数
            2. 子组件操作：在子组件通过`$emit()`触发自定义事件，并传递数据
        * 把父组件方法传到子组件中执行，并回传数据
    * 兄弟A和B组件通讯（不推荐）
        * A->父
        * 父->B
    * 深层级组件通讯
        * props逐层传递（不推荐）
            * 繁琐
            * 不靠谱
        * Bus事件总线
            1. 创建一个Vue实例Bus，用户绑定自定义事件
                ```js
                    const Bus = new Vue()
                ```
            2. 父组件操作：绑定事件，并把父组件方法作为事件处理函数
                ```js
                   Bus.$on('complete',this.completeItem) 
                ```
            3. 子组件操作：触发自定义事件，并传递数据
                ```js
                    Bus.$emit('complete',id)
                ```
* 组件数据设计原则：
    * 状态提升：把数据放到它们共同的父级
    * 谁的数据谁修改：把修改方法定义在数据所在的组件
* 数据流
    * 单向数据流：
    * 双向数据流

* **实例**
    * 实例属性
        * $refs
        * 组件层级
            * $parent   父组件
            * $children 子组件
            * $root     根实例

    * 实例方法
        * 关于事件
            * $emit(type,arg)   触发事件
            * $on(type,handle)  绑定事件
                > v-on 在视图中绑定事件
            * $off(type)        移除事件
        * $mount()  手动挂载

* VueCli命令行工具
    * 使用步骤
        1. 安装
            ```js
                npm i -g vue-cli
            ```
        2. 创建项目
            ```js
                vue create myapp
            ```
        3. 启动项目
            * npm script    npm脚本
                > npm run serve

* 模块化
    > 一个模块的作用域是独立的，如要获取模块中的变量，必须导出
    * commonJS      NodeJS
        * 导入：require()
        * 导出：module.exports
    * ESModule      ES6推出模块化规范
        * 导入：import
            > import xx from url
        * 导出: export
            * export {}     批量给模块对象添加属性
            * export default {}     给模块对象添加default属性，并赋值一个对象
    * AMD           require.js
    * CMD           sea.js

* Vue单文件组件
    * template  视图
    * script    组件配置
    * style     组件样式

## day2-4

### 复习
* vue-cli
    > webpack构建工具
* 模块化
    > 模块的作用域是独立的
    * 分类
        * ESModule
        * CommonJS
        * AMD       require.js
        * CMD       sea.js
    * 使用
        * 导入
            > 获取模块对象中的属性
            * ESModule: import
        * 导出
            > 给模块对象添加属性
            * ESModule: export 
* 组件化
    * 单文件组件：.vue
        > 把html、js、css放到一个文件当中

* props父子通讯
    1. 父组件操作：添加属性
    2. 子组件操作：接收属性
        > 1. 接收不存在的属性，得到undefined
        > 2. 添加属性但不接受，属性会自动成组件根元素的html属性
* props类型校验
    * props:['idx']
    * props:{
        idx:Number,
        idx:[Number,String],
        idx:{
            type:[Number,String],
            required:true,
            default:1
        },
        num:{
            type:Number,
            validator(val){
                return val>=18&&val<=30
            }
        }
    }
* 生命周期
    > 一个组件从创建到被销毁的过程
    * 创建阶段
        * beforeCreate
        * created
    * 挂载阶段
        * beforeMount
        * mounted
    * 更新阶段
        * beforeUpdate
        * updated
    * 销毁阶段
        * beforeDestroy
        * destroyed

    * 搞懂以下问题
        1. 搞懂生命周期执行过程
        2. 搞懂每个钩子函数适合做什么操作

* 钩子函数执行顺序
    > 父子组件钩子函数的执行顺序

* 渲染配置
    * el
    * template
    * render        渲染函数

* createElement()创建虚拟节点
    > 虚拟节点：一个结构类似于真实节点的对象

* diff算法对比过程

```js
    {
        get count(){

        },
        // this.count++;
        // this.count = 10;
        set count(newVal){
            //监听到count的修改

            // 修改虚拟节点

            // 对比虚拟节点前后状态，找出差异项
            // 如有差异项，才进行更新，没有差异项，则忽略以下操作

            // 渲染真实节点
            div.innerHTML = newVal;
        }
    }

    // 修改数据 -> 渲染真实节点
    // 修改数据 -> 修改虚拟节点 -> （对比虚拟节点，找出差异项） -> 渲染真实节点
    对比虚拟节点：利用**diff算法**进行虚拟节点前后状态对比（对比两个对象），找出差异项，并渲染到页面
```