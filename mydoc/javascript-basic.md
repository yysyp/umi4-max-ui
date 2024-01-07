1、as 和!用于属性的读取，都可以缩小类型检查范围，都做判空用途时是等价的。只是!具体用于告知编译器此值不可能为空值（null 和 undefined），而 as 不限于此。

2、?可用于属性的定义和读取，读取时告诉编译器此值可能为空值（null 和 undefined），需要做判断。

!可以将变量转为 boolean 值，所有的 truthy 和 falsy 都可以被转化，比如 null、undefined、数字 0 和空字符串取反都为 true，
其余都为 false。


protable v5: https://blog.csdn.net/iuaogh/article/details/109741048

https://juejin.cn/post/7116794692791959589


手动实现antd pro中的ProTable： https://juejin.cn/post/7116794692791959589


