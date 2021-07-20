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
    * 实例
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

* 指令
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
        * v-on
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