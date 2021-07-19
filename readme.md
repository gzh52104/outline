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
    * 存储器属性getter&setter：监听对象数据的获取与修改操作
        > Object.defineProperty(target,prop,descriptor)
        * target: 目标对象
        * prop: 设置的属性
        * descriptory: 属性特性
            * configurable  可配置性
            * enumerable    可枚举型
            * get
            * set


* 响应式属性
    > Vue在实例化时，会遍历model数据层下所有的属性，把它们改成**getter&setter**，当值被修改时，相应的视图会被刷新