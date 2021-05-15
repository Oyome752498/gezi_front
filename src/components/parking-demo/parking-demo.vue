<template>
  <div class="drag">
            <div v-for="item in items" :key="item.id"  v-on:click="clickIcon(item,$event)" v-bind:style="{top:item.top,
            left:item.left,
            width:item.width,
            height:item.height,
          position: item.position,
            cursor:item.cursor,
            zIndex:item.zIndex,
          


            }" v-drag >
            <i class="iconfont icon-xingxing"></i>
            </div>
            
    
       <!-- <div class="innerdrag">
       <img id="imgs"  :src="url"/>
        <div v-for="item in innerItems" :key="item.id"  v-on:click="clickInnerIcon(item)" v-bind:style="{top:item.top,
            left:item.left,
            width:item.width,
            height:item.height,
          position: item.position,
            cursor:item.cursor,
            zIndex:item.zIndex,
          


            }" v-Innerdrag >
            <i class="iconfont icon-xingxing"></i>
            </div> -->
            </div>
      <!-- </div> -->
       
    
        
      <!-- <img :src="url" v-bind:style="{width:'90%'}" id="imgs"/>     -->
      
           

       

            
  <!-- border:item.border,
            backgroundColor:item.backgroundColor -->
 
</template>

<script>
  export default {

    data() {
      return {
           
      appRootElment:{},
      showDialog:false,
       imgUrl:"",
       innerTitle:"",
             items:[
     
           {
              "id":4,
              "name":"中庄微网格",
              "top": "76%",
              "left": "62%",
               "width": "35px",
              "height": "30px",
              "border": "1px solid #666",
              "backgroundColor": "#ccc",
              "position": "absolute",
              "cursor": "move",
              "zIndex": "3000",
              "img":require('../../assets/zhongzhuang1.png')

          },

          
      ],
     
       
      }
 
    },
       //注册局部组件指令
        directives: {
            drag: function(el) {
                let dragBox = el; //获取当前元素
                dragBox.onmousedown = e => {
                    let oldX = 0
                    let oldY = 0
                    //记录原有的位置 超出界外时 复位
                    if(dragBox.offsetLeft+dragBox.clientWidth <= e.srcElement.parentNode.parentNode.clientWidth){
                         oldX = dragBox.offsetLeft;
                    }else{
                        oldX = e.srcElement.parentNode.parentNode.clientWidth-dragBox.clientWidth;
                    }
                      if(dragBox.offsetTop+dragBox.clientHeight <= e.srcElement.parentNode.parentNode.clientHeight){
                         oldY =dragBox.offsetTop;
                    }else{
                        oldY = e.srcElement.parentNode.parentNode.clientHeight-dragBox.clientHeight;
                    }
                   
                    //算出鼠标相对元素的位置

                    let disX = e.clientX - dragBox.offsetLeft;
                    let disY = e.clientY - dragBox.offsetTop;
                    document.onmousemove = e => {
                        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                        let left = e.clientX - disX;
                        let top = e.clientY - disY;
                        //移动当前元素
                        if(left+e.srcElement.clientWidth <=e.srcElement.parentNode.clientWidth &&
                        top+e.srcElement.clientHeight <=e.srcElement.parentNode.clientHeight 
                        ){
                            dragBox.style.left = left + "px";
                            dragBox.style.top = top + "px";
                        }
                        
                    };
                    document.onmouseup = e => {
                        if(e.srcElement.parentNode.offsetLeft <= 0 
                        || e.srcElement.parentNode.offsetTop <= 0
                        ||e.srcElement.parentNode.offsetLeft+e.srcElement.parentNode.clientWidth>e.srcElement.parentNode.parentNode.clientWidth
                        ||e.srcElement.parentNode.offsetTop+e.srcElement.parentNode.clientHeight>e.srcElement.parentNode.parentNode.clientHeight){
                            dragBox.style.left =oldX+"px";
                            dragBox.style.top =oldY+"px";
                        }
                      console.log(`横向坐标${e.srcElement.parentNode.offsetLeft}px,纵向坐标${e.srcElement.parentNode.offsetTop}px`)
                      console.log(`横向坐标偏移百分比${Math.ceil(e.srcElement.parentNode.offsetLeft/e.srcElement.parentNode.parentNode.clientWidth*100)}%,纵向坐标偏移百分比${Math.ceil(e.srcElement.parentNode.offsetTop/e.srcElement.parentNode.parentNode.clientHeight*100)}%`)

                          //鼠标弹起来的时候不再移动
                          document.onmousemove = null;
                         //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）  
                        document.onmouseup = null;
                    };
                };
            },
              Innerdrag: function(el) {
                let dragBox = el; //获取当前元素
                dragBox.onmousedown = e => {
                    let oldX = 0
                    let oldY = 0
                    //记录原有的位置 超出界外时 复位
                    if(dragBox.offsetLeft+dragBox.clientWidth <= e.srcElement.parentNode.parentNode.firstChild.clientWidth){
                         oldX = dragBox.offsetLeft;
                    }else{
                        oldX = e.srcElement.parentNode.parentNode.firstChild.clientWidth-dragBox.clientWidth;
                    }
                      if(dragBox.offsetTop+dragBox.clientHeight <= e.srcElement.parentNode.parentNode.firstChild.clientHeight){
                         oldY =dragBox.offsetTop;
                    }else{
                        oldY = e.srcElement.parentNode.parentNode.firstChild.clientHeight-dragBox.clientHeight;
                    }
                   
                    //算出鼠标相对元素的位置

                    let disX = e.clientX - dragBox.offsetLeft;
                    let disY = e.clientY - dragBox.offsetTop;
                    document.onmousemove = e => {
                        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                        let left = e.clientX - disX;
                        let top = e.clientY - disY;
                        // //移动当前元素
                        // if(left+e.srcElement.clientWidth <=e.srcElement.parentNode.parentNode.firstChild.clientWidth &&
                        // top+e.srcElement.clientHeight <=e.srcElement.parentNode.parentNode.firstChild.clientHeight 
                        // ){
                        //     dragBox.style.left = left + "px";
                        //     dragBox.style.top = top + "px";
                        // }
                        
                    };
                    document.onmouseup = e => {
                        // if(e.srcElement.parentNode.offsetLeft <= 0 
                        // || e.srcElement.parentNode.offsetTop <= 0
                        // ||e.srcElement.parentNode.offsetLeft+e.srcElement.parentNode.clientWidth>e.srcElement.parentNode.parentNode.clientWidth
                        // ||e.srcElement.parentNode.offsetTop+e.srcElement.parentNode.clientHeight>e.srcElement.parentNode.parentNode.clientHeight){
                        //     dragBox.style.left =oldX+"px";
                        //     dragBox.style.top =oldY+"px";
                        // }
                      console.log(`横向坐标${e.srcElement.parentNode.offsetLeft}px,纵向坐标${e.srcElement.parentNode.offsetTop}px`)
                      console.log(`横向坐标偏移百分比${Math.ceil(e.srcElement.parentNode.offsetLeft/e.srcElement.parentNode.parentNode.firstChild.clientWidth*100)}%,纵向坐标偏移百分比${Math.ceil(e.srcElement.parentNode.offsetTop/e.srcElement.parentNode.parentNode.firstChild.clientHeight*100)}%`)

                          //鼠标弹起来的时候不再移动
                          document.onmousemove = null;
                         //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）  
                        document.onmouseup = null;
                    };
                };
            },
           
        },
    methods:{
    //   goto(){
    //     this.$router.push("/ProcessingCenter")
    //   },
 
    },
     mounted() {
      
    //   LoginHidden();
    },
     created() {
  },
  methods: {
    clickIcon: function (item,event) {
    //    item.img =  require('@/assets/'+this.a)
        let routeData = this.$router.resolve({
        name: 'MessageCenter',
        query: {img: item.img,id:item.id}

    })
    window.open(routeData.href, '_blank')
        this.dialogVisible = true;
        this.title = item.name;
        this.url = item.img
        document.getElementById("imgs")
        // this.innerVisible = true;
        // alert(item.id);
     
    },
  
  }
  }
</script>
<style >
   .dialogclass {
        height: 80%;
        overflow-y: scroll;
    }
</style>
<style scoped>

.drag {
        width: 1000px;
        height: 1000px;
        background-image: url(../../assets/wangge2.png);
        background-size:100% 100%;
        position: relative;
    }

    .innerdrag{
        background-size:100% 100%;
        position: relative;
    }
 
    
    
</style>