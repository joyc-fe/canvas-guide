import {requestAnimationFrame, NextFrames, Graphics} from './utils';
let taskHeap = [];
// 每帧时间间隔
let frameT = 1000/30;
/**
 * nextFAT:  下一帧时间
*/

let fffjson = {
    nextFT: frameT,
    elements:[
        {name:'bbox', 
            actions:[{type:'route', value: 1}]
        
    }]
}


taskHeap.push({nextFT: 1000, elements:[{name:'bbox', action: 'route', value: 0},{name:'cap', action: 'route', value: 0}]});
taskHeap.push({nextFT: frameT, elements:[{name:'bbox', action: 'route', value: 1},{name:'cap', action: 'route', value: 3}]});
taskHeap.push({nextFT: frameT, elements:[{name:'bbox', action: 'route', value: 3},{name:'cap', action: 'route', value: 5}]});
taskHeap.push({nextFT: frameT, elements:[{name:'bbox', action: 'route', value: 5},{name:'cap', action: 'route', value: 7}]});
taskHeap.push({nextFT: frameT, elements:[{name:'bbox', action: 'route', value: 7},{name:'cap', action: 'route', value: 7}]});
taskHeap.push({nextFT: 400, elements:[{name:'bbox', action: 'route', value: 7},{name:'cap', action: 'route', value: 9}]});
taskHeap.push({nextFT: 200, elements:[{name:'bbox', action: 'route', value: 0},{name:'cap', action: 'route', value: 0}]});
taskHeap.push({nextFT: 200, elements:[{name:'bbox', action: 'jump', value: -40},{name:'cap', action: 'jump', value: -50}]});
taskHeap.push({nextFT: 200, elements:[{name:'bbox', action: 'jump', value: -20},{name:'cap', action: 'jump', value: -20}]});
taskHeap.push({nextFT: 200, elements:[{name:'bbox', action: 'jump', value: -40},{name:'cap', action: 'jump', value: -40}]});
taskHeap.push({nextFT: 200, elements:[{name:'bbox', action: 'route', value: 0},{name:'cap', action: 'route', value: 0}]});


// 宝箱动画时间轴
let bboxFrames = new NextFrames(taskHeap);

/**
 * config: width,height
*/
export default function Bbox(config) {
    
    // 配置
    this.config = config;
    // 当前组帧
    this.frameGroup = null;
    this.count = 0;
    this.allCached = false;
    this.cacheCanvas= null;
    this.canvasHeight= 0;
    this.canvasWidth= 0;
    this.upvalue = 0;
    this.canvasbox1= null;
    this.cacheCanvasList = {};

    this.graphics = null;
    // 初始化画板
    this.huaban = function () {
        let canvasDiv = document.getElementById("canvasboxxxx");
        let canvasWidth = this.config.width * 2;
        let canvasHeight =this.config.height * 2;
        canvasDiv.width = canvasWidth;
        canvasDiv.height = canvasHeight;
        let canvasbox = canvasDiv.getContext("2d");
        this.graphics = new Graphics(canvasDiv, canvasbox);
    }
   

    // 加入缓存
    this.addCache = function (canvasInfo) {
        let self = this;
        let _cacheCanvas = document.createElement("CANVAS");
        _cacheCanvas.width = canvasInfo.width * 2;
        _cacheCanvas.height = canvasInfo.height * 2;
        let _canvas2d = _cacheCanvas.getContext("2d");
        var img = new Image();
        img.src = canvasInfo.img;
        img.onload = () => {
            if(canvasInfo.width > 0) {
                _canvas2d.drawImage(img, 0, 0, canvasInfo.width*2,  canvasInfo.height*2);
                self.cacheCanvasList[canvasInfo.name] = _cacheCanvas;
            } 
        }
    }
    // 绘制
    this.drawRender = function() {
    // 如果有帧    
    if (this.frameGroup) {
        this.canvasbox1 = document.getElementById("canvasboxxxx");
        let canvasWidth = this.config.width * 2;
        let canvasHeight =this.config.height * 2;
        this.canvasbox1.width = canvasWidth;
        this.canvasbox1.height = canvasHeight;
        let canvasbox = this.canvasbox1.getContext("2d");
        canvasbox.clearRect(0, 0, canvasWidth,  canvasHeight);
              let self = this;
        this.frameGroup.elements.forEach(element => {
                  //  console.log(element);
                  let  ddd =  self.cacheCanvasList[element.name];
                  if(!ddd.width) {return}
                   switch(element.action) {
                       // 旋转
                       case 'route':
                            // canvasbox.translate(canvasWidth/2, canvasWidth/2);
                            // canvasbox.rotate(element.value * Math.PI / 180);
                            // canvasbox.translate(-canvasWidth/2, -canvasWidth/2);
                            canvasbox.save(); 
                            canvasbox.translate(canvasWidth, canvasWidth);
                            canvasbox.rotate(element.value * Math.PI / 180);
                            canvasbox.translate(-canvasWidth, -canvasWidth);
                           
                            // this.upvalue = element.value;
                            this.graphics.rotate(1,9,300);
                        

 
                canvasbox.drawImage(self.cacheCanvasList[element.name],  160, 200, ddd.width,  ddd.height);
                canvasbox.restore();
                           break;
                        case 'jump':
                            this.upvalue = element.value;
                canvasbox.drawImage(self.cacheCanvasList[element.name],  160, 200+element.value, ddd.width,  ddd.height);

                            break;  
                        case 'open':
                            this.upvalue = element.value;
                            var img = new Image();
                                img.src='http://172.30.12.147:8080/img/src/views/home/components/mainvenue/images/baoxiang-open.png';
                                this.upvalue = 0;
                                img.onload = ()=> {   
                                    canvasbox.drawImage(img,  0, element.value, canvasWidth,  canvasHeight);
                                }
                                
                        break;   
                       default:
                           break;    
                   } 
                });
    }

        
    }
    // 更新 
    this.update = function() {
        // 旋转
        let ggg = bboxFrames.getFrame();
        if(ggg!=='pending' && ggg) {
            this.frameGroup = ggg;
        }
       
    }


    this.then = Date.now();
    // 动画 Animation Loop
    this.animate = function() {
       
        // 临时中断
        this.count = this.count + 1;
        if(this.count>400){
            return;
        }
        
        
        var now = Date.now();
        var delta = now - this.then;
       
         // 限制帧率30
         if(delta > 1000/30) {
            if(this.cacheCanvasList.bbox) {
                // 更新
                this.update(delta / 1000);
                // 渲染
                this.drawRender();
            }
            
            this.then = now;
        }
        requestAnimationFrame(this.animate.bind(this));
    }
}