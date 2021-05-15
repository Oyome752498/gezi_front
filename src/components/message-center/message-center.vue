<template>
<div class="drag" v-bind:style="{backgroundImage: 'url('+ img +')'}">
  <div v-for="item in innerItems" :key="item.id"  v-on:click="clickInnerIcon(item)" v-bind:style="{top:item.top,
            left:item.left,
            width:item.width,
            height:item.height,
          position: item.position,
            cursor:item.cursor,
            zIndex:item.zIndex,
          


            }" v-drag >
            <i class="iconfont icon-xingxing"></i>
            </div>
              <el-dialog custom-class="dialogclass"
            width="60%"
            title="内层 Dialog"
            :visible.sync="innerVisible"
             >


<el-form  :model="formInline" class="demo-form-inline">
  <el-form-item label="网格长（一肩挑）">
    <el-input v-model="formInline.user" placeholder="网格长（一肩挑）"></el-input>
  </el-form-item>
  <el-form-item label="联系方式">
     <el-input v-model="formInline.user" placeholder="联系方式"></el-input>
  </el-form-item>
  <el-form-item label="户数（户）">
     <el-input v-model="formInline.huoseholds" placeholder="户数（户）"></el-input>
  </el-form-item>
   <el-form-item label="总人口数（人）">
     <el-input v-model="formInline.totalPopulation" placeholder="总人口数（人）"></el-input>
  </el-form-item>
  <el-form-item label="地质灾害点（处）">
     <el-input v-model="formInline.geologicalHazards" placeholder="地质灾害点（处）"></el-input>
  </el-form-item>
  <el-form-item label="常住人口（人）">
     <el-input v-model="formInline.population" placeholder="常住人口（人）"></el-input>
  </el-form-item>
  <el-form-item label="在外人口（人）">
     <el-input v-model="formInline.outsiders" placeholder="在外人口（人）"></el-input>
  </el-form-item>
   <el-form-item label="党员（人）">
     <el-input v-model="formInline.party" placeholder="党员（人）"></el-input>
  </el-form-item>
    <el-form-item label="困难户党员（人）">
     <el-input v-model="formInline.poorHouseholds" placeholder="困难户党员（人）"></el-input>
  </el-form-item>
    <el-form-item label="低保户（户）">
     <el-input v-model="formInline.lowIncomeHouseholds" placeholder="低保户（户）"></el-input>
  </el-form-item>
   <el-form-item label="低边户（户）">
     <el-input v-model="formInline.lowEdgeHousehold" placeholder="低边户（户）"></el-input>
  </el-form-item>
   <el-form-item label="退伍军人（人）">
     <el-input v-model="formInline.exSoldier" placeholder="退伍军人（人）"></el-input>
  </el-form-item>
   <el-form-item label="残疾人（人）">
     <el-input v-model="formInline.theDisabled" placeholder="残疾人（人）"></el-input>
  </el-form-item>
   <el-form-item label="新居民（人）">
     <el-input v-model="formInline.newResidents" placeholder="新居民（人）"></el-input>
  </el-form-item>
   <el-form-item label="村民代表（人）">
     <el-input v-model="formInline.villagerRepresentative" placeholder="村民代表（人）"></el-input>
  </el-form-item>
    <el-form-item label="重点人员（人）">
     <el-input v-model="formInline.keyPersonnel" placeholder="重点人员（人）"></el-input>
  </el-form-item>
   <el-form-item label="吸毒管控对象（人）">
     <el-input v-model="formInline.drugControlObjects" placeholder="吸毒管控对象（人）"></el-input>
  </el-form-item>
  <el-form-item label="社区矫正对象（人）">
     <el-input v-model="formInline.communityCorrection" placeholder="社区矫正对象（人）"></el-input>
  </el-form-item>
   <el-form-item label="易肇事肇祸精神病人（人）">
     <el-input v-model="formInline.accident" placeholder="易肇事肇祸精神病人（人）"></el-input>
  </el-form-item>
  <el-form-item label="重点场所（处）">
     <el-input v-model="formInline.keyPlaces" placeholder="重点场所（处）"></el-input>
  </el-form-item>
    <el-form-item label="出租房（处）">
     <el-input v-model="formInline.rentalHousing" placeholder="出租房（处）"></el-input>
  </el-form-item>
    <el-form-item label="合用场所（处）">
     <el-input v-model="formInline.sharedSpace" placeholder="合用场所（处）"></el-input>
  </el-form-item>
   <el-form-item label="宗教场所（处）">
     <el-input v-model="formInline.worship" placeholder="宗教场所（处）"></el-input>
  </el-form-item>
   <el-form-item label="2021年共化解矛盾纠纷（起）">
     <el-input v-model="formInline.disputes" placeholder="2021年共化解矛盾纠纷（起）"></el-input>
  </el-form-item>
   <el-form-item label="待化解矛盾纠纷（起）">
     <el-input v-model="formInline.disputes" placeholder="待化解矛盾纠纷（起）"></el-input>
  </el-form-item>
  <el-form-item label="备注">
     <el-input type="textarea" v-model="formInline.memo" placeholder="备注"></el-input>
  </el-form-item>
</el-form>



        <div slot="title" class="header-title">
            <span > {{ innerTitle }}</span>
           
        </div>
       </el-dialog>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return{
      context:'',
      /*
      网格表单
       */
        formInline: {
          user: '',//网格长（一肩挑）
          mobile: '',//联系方式
          huoseholds:'',//户数（户）
          totalPopulation:'',//总人口数（人）
          geologicalHazards:'',//地质灾害点（处）
          population:'',//常住人口（人）
          outsiders:'',// 在外人口（人）
          party:'',//党员（人）
          poorHouseholds:'',//困难户党员（人）
          lowIncomeHouseholds:'',//低保户（户）
          lowEdgeHousehold:'',//低边户（户） 
          exSoldier :'',//退伍军人（人）
          theDisabled:'',//残疾人（人）
          newResidents:'',//新居民（人）
          villagerRepresentative:'', //村民代表（人）
          keyPersonnel:'',//重点人员（人） 
          drugControlObjects:'',//吸毒管控对象（人）
          communityCorrection :'',//社区矫正对象（人）
          accident:'',//易肇事肇祸精神病人（人）
          keyPlaces:'',//重点场所（处）
          rentalHousing:'',//出租房（处）
          sharedSpace:'',//合用场所（处）
          worship:'',//宗教场所（处）
          disputes:'',//2021年共化解矛盾纠纷（起）
          conflictsResolved:'',//待化解矛盾纠纷（起）
          memo:''




        },
      img:this.$route.query.img,
      // img:'../../assets/zhongzhuang1.png',
      id:this.$route.query.id,
      innerVisible:false,
      innerItems:[
                {
              "parentId":4,
              "id":1,
              "name":"红绿灯",
              "top": "53%",
              "left": "54%",
               "width": "35px",
              "height": "30px",
              "border": "1px solid #666",
              "backgroundColor": "#ccc",
              "position": "absolute",
              "cursor": "move",
            //   "zIndex": "3000",
            //   "img":require('../../assets/zhongzhuang1.jpg')

          },
            {
              "parentId":4,
              "id":2,
              "name":"章义楼",
              "top": "24%",
              "left": "54%",
               "width": "35px",
              "height": "30px",
              "border": "1px solid #666",
              "backgroundColor": "#ccc",
              "position": "absolute",
              "cursor": "move",
            //   "zIndex": "3000",
            //   "img":require('../../assets/zhongzhuang1.jpg')

          },
          {
              "parentId":4,
              "id":3,
              "name":"下中庄",
              "top": "20%",
              "left": "43%",
               "width": "35px",
              "height": "30px",
              "border": "1px solid #666",
              "backgroundColor": "#ccc",
              "position": "absolute",
              "cursor": "move",
            //   "zIndex": "3000",
            //   "img":require('../../assets/zhongzhuang1.jpg')

          },
            {
              "parentId":4,
              "id":4,
              "name":"社区活动中心",
              "top": "35%",
              "left": "37%",
               "width": "35px",
              "height": "30px",
              "border": "1px solid #666",
              "backgroundColor": "#ccc",
              "position": "absolute",
              "cursor": "move",
            //   "zIndex": "3000",
            //   "img":require('../../assets/zhongzhuang1.jpg')

          },
            {
              "parentId":4,
              "id":5,
              "name":"文化礼堂",
              "top": "30%",
              "left": "26%",
               "width": "35px",
              "height": "30px",
              "border": "1px solid #666",
              "backgroundColor": "#ccc",
              "position": "absolute",
              "cursor": "move",
            //   "zIndex": "3000",
            //   "img":require('../../assets/zhongzhuang1.jpg')

          },
           {
              "parentId":4,
              "id":6,
              "name":"蓝岩",
              "top": "39%",
              "left": "25%",
               "width": "35px",
              "height": "30px",
              "border": "1px solid #666",
              "backgroundColor": "#ccc",
              "position": "absolute",
              "cursor": "move",
            //   "zIndex": "3000",
            //   "img":require('../../assets/zhongzhuang1.jpg')

          },
           {
              "parentId":4,
              "id":7,
              "name":"前山屋",
              "top": "69%",
              "left": "20%",
               "width": "35px",
              "height": "30px",
              "border": "1px solid #666",
              "backgroundColor": "#ccc",
              "position": "absolute",
              "cursor": "move",
            //   "zIndex": "3000",
            //   "img":require('../../assets/zhongzhuang1.jpg')

          },
           {
              "parentId":4,
              "id":8,
              "name":"接客僧",
              "top": "69%",
              "left": "15%",
               "width": "35px",
              "height": "30px",
              "border": "1px solid #666",
              "backgroundColor": "#ccc",
              "position": "absolute",
              "cursor": "move",
            //   "zIndex": "3000",
            //   "img":require('../../assets/zhongzhuang1.jpg')

          }
          ]
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
             
           
        },
  methods:{

    init(){
      console.log("img:"+this.$route.query.img+",id:"+this.$route.query.id);
      console.log(window);
      document.getElementsByClassName("drag")[0].style.height=window.innerHeight+'px';
      document.getElementsByClassName("drag")[0].style.width=window.innerWidth+'px';
      this.context = require.context("../../assets/", true, /\.(png|jpg)$/);
// 相当于"../assets/image/ipad/img.jpg"
this.context("./zhongzhuang1.png");
    },
     clickInnerIcon: function(item){
        this.innerVisible = true;
        this.innerTitle = item.name;

    }
  },
   mounted() {
      this.init();
    //   LoginHidden();
    },
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
        width: 1536px;
        height: 824px;
        /* background-image: url(../../assets/wangge2.png); */
        background-size:100% 100%;
        background-attachment:fixed;
        background-repeat: no-repeat;
        position: relative;
    }

    .demo-input-suffix el-input{
      display: inline;
    }
</style>
