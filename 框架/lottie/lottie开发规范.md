# lottie开发规范

规范也是闭坑指南，让导出内容正确的渲染

https://www.zcool.com.cn/article/ZOTk2MDgw.html

![image](https://user-images.githubusercontent.com/19755534/130927969-4f099721-7f65-4bc3-a26e-81daad79b78f.png)


## 属性支持一览表
http://airbnb.io/lottie/#/supported-features

## 图片特效是否支持

1. sketch导出svg格式后转成.ai文件
第一种方法比较复杂，但不会踩雷。其实就是把切图转成ai格式导进去ae再创建形状。可是这样处理后导入AE，形状可以保留更多编辑。具体步骤如下：

1. sketch里面把切图导出svg格式
2. svg转成.ai格式导进去AE
3. 使用AE的「从矢量图层创建形状」重新绘制


2. 使用「AEUX」插件
这个对于比较简单的图形还是支持导出的。但是遇到相对应复杂的图形，例如使用了布尔运算绘制的图形，就会有一些效果缺失等奇奇怪怪的问题，所以各位还是看看哪个对你们方便了。下面会奉上插件链接下载和教程网址。
https://oursketch.com/plugin/aeux

