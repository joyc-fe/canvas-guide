# pixi 系统学习资料
|资料|说明|
|:----|:----|
|[官网文档](http://pixijs.download/release/docs/index.html) 很完整，和MDN一样，适合查询| ![](./images/Foxmail20201201105557.png) |
|[pixi examples](https://pixijs.io/examples/)|![](./images/Foxmail20201201105812.png)|
|[pixi官网推荐的动画插件-精灵效果](https://pixijs.io/examples/#/plugin-spine/dragon.js)||
|[pixi中文教程](https://www.bookstack.cn/read/LearningPixi/collision)||
|[pixi系列教程-粒子效果](https://juejin.cn/post/6844903765108260872)|![](./images/16872fcedf4c373c.gif)|
|[H5场景小动画实现之PixiJs实战](https://zhuanlan.zhihu.com/p/31293136)||
|扩展插件[pixi-action](http://git.hust.cc/pixi-action/) 这些函数都比较简单，没有抛物线； 算是demo级别的。项目中用需要加强基础函数能力||

 
# pixi 实例
|:----|:----|
|[pixi精灵示例](https://juejin.cn/post/6844903760561438728)| ![](./images/16849ce0e011e9ef.gif) |
|[pixi解决模糊问题](http://pixijs.download/release/docs/PIXI.AbstractRenderer.html#resize) https://www.cnblogs.com/haqiao/p/12515775.html||
|[pixi粒子库-dust](https://blog.csdn.net/fe_dev/article/details/86559206) |Pixi 没有内置的制作粒子效果的功能，但你可以使用一个名为 Dust 的轻量级的库来制作它们。 [效果展示](https://www.kkkk1000.com/images/learnPixiJS-ParticleEffects/ParticleContainer.html)  [发射效果](https://www.kkkk1000.com/images/learnPixiJS-ParticleEffects/emitter.html)|
|[pixi补间动画](http://demo.htmleaf.com/1501/201501271734/index13.html)|tween.js强大的可生成平滑动画效果的js库|
|pixi消除锯齿| [antialias参数](http://pixijs.download/release/docs/PIXI.AbstractRenderer.html#backgroundColor)  这种方法没生效 https://zhuanlan.zhihu.com/p/56029920|
|pixi事件不生效，解决 `元素名.interactive=true` |https://blog.csdn.net/sttk111/article/details/105678751/  提前看一遍文档是能解决这个问题的|
|pixi 触摸canvas画布 不能滑动页面问题| 这个问题折腾了很久,很多资料不完整，最后查看页面属性 touch-action, 然后在源代码库中找到解决方法 https://github.com/pixijs/pixi.js/issues/4824  |