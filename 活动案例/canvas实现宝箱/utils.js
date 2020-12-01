/**
 * 下一帧
*/
export function NextFrames(taskHeap) {
    // 下一帧时间
    this.nextFrameTime = Date.now();
    // 获取帧
    this.getFrame = function() {
        if (Date.now() >= this.nextFrameTime) {
            let task = taskHeap.shift();
            // 下一次任务执行时间
            task && (this.nextFrameTime += task.nextFT);
            // 消费下一组合帧
            return task;
        }
        return 'pending';  
    }
}

/**
 * 图形操作类
 * canvasObj 画布
 * context2d 操作对象
*/
export function Graphics(canvasObj, context2d) {
    this.canvasObj = canvasObj;
    this.context2d = context2d;
    /**
     * 旋转函数
     * angle 角度 
     * time 时长
    */
    this.rotate = function(angle, time) {  
        // this.context2d.save(); 
        // this.context2d.translate(canvasWidth, canvasWidth);
        // // 弧度
        // let radian = angle * Math.PI / 180;
        // this.context2d.rotate(radian);
        // this.context2d.translate(-canvasWidth, -canvasWidth);
        // // 
        // this.context2d.drawImage(self.cacheCanvasList[element.name],  160, 200, ddd.width,  ddd.height);
        // this.context2d.restore();
    }
}




export const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame;