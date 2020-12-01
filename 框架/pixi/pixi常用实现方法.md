## 指尖案例网址 

http://h5.flyfinger.com

## TweenMax
richText3.alpha=0;
TweenMax.to(richText3,1,{alpha:1,ease:Sine.easeOut,delay:2})//透明度动画
 
bunny3.scale.set(0);
TweenMax.to(bunny3.scale,1,{x:1,y:1,ease:Elastic.easeOut,delay:1})//弹性放大动画
 
TweenMax.to(bunny2,1,{x:GAME.stageWidth/2,ease:Elastic.easeOut,delay:1})//弹性移动位置动画
                                               Linear.easeNone
TweenMax.to(graphics2,0.5,{y:450,repeat:-1,yoyo:true,ease:Linear.easeNone,delay:3.7});//循环
bunny.alpha=0;
bunny.y=-200;
TweenMax.to(bunny,1,{alpha:1,y:0,ease:Strong.easeOut})//透明度+移动位置动画
 
## 延迟执行1秒执行
TweenMax.delayedCall(1,function(){
     console.log(666);
})
## 自动缓慢旋转
setInterval(function(){
			console.log(1);
            bunny.rotation+=0.01
        },16.5);
 
bunny.on("pointertap",_this.maxadd)点击
单独停止  用开关的方式分别控制动画旋转或停止
 
    if(is){
       lun1.rotation+=0.05
       lun2.rotation+=0.05
    }
    if(ie){
       zixingchelun1.rotation+=0.4
       zixingchelun2.rotation+=0.4
    }
整体停止 就把_isSceneIn=false
 
 
## 滑动触发
//graphics3.on('pointerdown',function(e){
        //
        //        this.startData=e.data.global.x;
        //
        //})
        //graphics3.on('pointermove',function(e){
        //
        //        this.moveData=e.data.global.x;
        //
        //})
        //graphics3.on('pointerup',function(e) {
        //    if (this.moveData > this.startData && Math.abs(this.moveData - this.startData) > 30) {
        //
        //    }
        //
        //
        //
        //})
