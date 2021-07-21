// ESmodule把一个文件当作一个模块
// 每个模块具有独立的作用域
// 只有导出的变量才能在别的模块中使用
// 导出：export
// export后只能跟function、class、var、let、const、default、{}

// 给当前对象添加username属性
export let username = 'laoxie'

// 给当前对象添加getName方法
export function getName() {
    return username;
}

const className = 'h5-2104'

// 给当前模块对象添加default属性
export default className

var a = 10
var b = 20;
const c = function () { }
// 批量给模块对象添加属性
export {
    a,
    b,
    c,
}