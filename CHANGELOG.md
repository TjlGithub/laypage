## v1.3 - 2015.10.15：
1. 修复当pages（总页数）为0时，仍然输出了【下一页】的bug
1. 修复当不满足出现分页条件时，抛出了Cannot read property 'children' of null的bug
1. 将首页和尾页默认用汉字标识，而非数字。

## v1.2 - 2015.04.03：
1. 完善jump回调，新增第二个参数，用于在使用location跳转时，控制页面初始加载无限刷新的问题。
1. 完善hash机制，页面初始加载时，当前页为1时，不改变location.hash。另外可对参数hash赋上特定值，以便初始化时获取当前页复制给curr。
1. 样式微调


## v1.1 - 2014.12.19：
1. 完善cont、pages、groups，传入的数值支持string和number
1. 内置样式微调。