<template lang="pug">
.bboxxxx#bboxxxx
    template
        canvas#canvasboxxxx.canvasboxxxx
    .btn(@touchstart="upup")  旋转
</template>
<script>

import Bbox from './bbox';


 
export default {

    data() {
        return {
              box: null,
              b2: null
        };
    },
    created() {
let self = this;
    // 打开这段注释，还原到原生写法上    
        setTimeout(()=>{
        let bboxDiv = document.getElementById('bboxxxx');
        let canvasWidth = bboxDiv.offsetWidth;
        let canvasHeight = bboxDiv.offsetHeight;

       // 画布宽度 750；高度500  
       let bbox = new Bbox({width: canvasWidth, height: canvasHeight});
       // 缩放
       // 素材为400 * 400
       let widthScale = 40/75;
       let heightScale = 50/75;
       bbox.addCache({width:canvasWidth * widthScale, height:canvasHeight * heightScale,img:'https://bj.bcebos.com/v1/dxmmis/bbox/cap.png',name:'cap'});
       bbox.addCache({width:canvasWidth * widthScale, height:canvasHeight * heightScale,img:'https://bj.bcebos.com/v1/dxmmis/bbox/box.png',name:'bbox'});
       bbox.huaban();
       bbox.animate();
       }, 1000);
     
    
    },
    computed: {},
    activated() {},
    mounted() {},
    methods: {
       upup() {
         //this.b2.firstStep(); 
         this.b2.drawRoundedRect();
       }

    }
};
</script>

<style lang="less" scoped>
.bboxxxx {
      width: 750px;
        height: 500px;
        border:1px solid #000;
        margin: auto;
        position: relative;
}
 .canvasboxxxx {       
            transform: scale(0.5);
            left: -50%;
            top: -50%;
            position: absolute;
  }
</style>
