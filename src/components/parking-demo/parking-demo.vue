<template>
<div>
 <div class="drag" v-bind:style="{display:!clickFlag? 'block':'none'}">
            <div v-for="item in items" :key="item.id"  v-on:click="clickIcon(item,$event)" v-bind:style="{top:item.top,
            left:item.left,
            width:item.width,
            height:item.height,
          position: item.position,
            cursor:item.cursor,
            zIndex:item.zIndex,
          


            }" v-drag >
            <i class="iconfont icon-xingxing cancel"></i>
            </div>
      
   </div> 
       <div class="innerImg" @dblclick="close" v-bind:style="{display:clickFlag? 'block':'none',backgroundImage: 'url('+ imgUrl +')'}">
             <div v-for="item in innerItems" :key="item.id"  v-on:click="clickInnerIcon(item)" v-bind:style="{top:item.top,
            left:item.left,
            width:item.width,
            height:item.height,
          position: item.position,
            cursor:item.cursor,
            zIndex:item.zIndex,
          


            }" v-drag >
            <i class="iconfont icon-xingxing cancel"></i>
            </div>
          
       
        </div>  
        <!-- 大网格 -->
        <div class="innerTable"  v-bind:style="{display:clickBigFlag? 'block':'none'}">
           
           <div> <i class="iconfont icon-guanbi- closebtn" @click="clickBigFlag = false"></i></div>
         
          <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>网格长（一肩挑）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.user}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>联系方式</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.mobile}}</span></div></el-col>
          </el-row>
          <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>村庄面积（km²）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.area}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>林地、耕地（亩）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.woodland}}</span></div></el-col>
          </el-row> 
          <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>地质灾害点（处）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.geologicalHazards}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>违章建筑（处）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.unauthorizedConstruction}}</span></div></el-col>
          </el-row>   
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>户数（户）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.huoseholds}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>总人口数（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.totalPopulation}}</span></div></el-col>
          </el-row>         
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>常住人口（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.population}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>在外人口（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.outsiders}}</span></div></el-col>
          </el-row>    
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>党员（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.party}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>困难户党员（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.poorHouseholds}}</span></div></el-col>
          </el-row>    
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>低保户（户）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.lowIncomeHouseholds}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>低边户（户）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.lowEdgeHousehold}}</span></div></el-col>
          </el-row>    
            <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>退伍军人（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.exSoldier }}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>残疾人（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.theDisabled}}</span></div></el-col>
          </el-row>     
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>新居民（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.newResidents}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>村民代表（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.villagerRepresentative}}</span></div></el-col>
          </el-row>   
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>重点人员（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.keyPersonnel}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>吸毒管控对象（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.drugControlObjects}}</span></div></el-col>
          </el-row>    
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>社区矫正对象（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.communityCorrection }}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>易肇事肇祸精神病人（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.accident}}</span></div></el-col>
          </el-row>    
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>重点场所（处）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.keyPlaces}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>出租房（处）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.rentalHousing}}</span></div></el-col>
          </el-row>    
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>合用场所（处）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.sharedSpace}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>宗教场所（处）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.worship}}</span></div></el-col>
          </el-row>    
            <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>2021年共化解矛盾纠纷（起）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.disputes}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>待化解矛盾纠纷（起）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.conflictsResolved}}</span></div></el-col>
          </el-row>    
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>驻堂名单</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.garrisonname1}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>联系方式</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.garrisonmobile1}}</span></div></el-col>
          </el-row>    
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>驻堂名单</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.garrisonname2}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>联系方式</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.garrisonmobile2}}</span></div></el-col>
          </el-row> 
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>驻村干部</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.villageCadres}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>联系方式</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.villageCadresmobile}}</span></div></el-col>
          </el-row>   
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>专职网格员</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.fullTimeGridMember}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>联系方式</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.fullTimeGridMembermobile}}</span></div></el-col>
          </el-row>    
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>辖区民警</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.districtPolice}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>联系方式</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.districtPolicemobile}}</span></div></el-col>
          </el-row>  
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>市监入格员</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.qualifiedSupervisor}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>联系方式</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.qualifiedSupervisormobile}}</span></div></el-col>
          </el-row>     
          <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>住建入格员</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.housingConstruction}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>联系方式</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.housingConstructionmobile}}</span></div></el-col>
          </el-row>     
          <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>安监入格员</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.safetySupervisor}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>联系方式</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.safetySupervisormobile}}</span></div></el-col>
          </el-row>   
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>消防入格员</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.qualifiedFireOfficer}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>联系方式</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.qualifiedFireOfficermobile}}</span></div></el-col>
          </el-row>    
          <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>禁毒入格员</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.qualifiedDrugControlOfficer}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>联系方式</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.qualifiedDrugControlOfficermobile}}</span></div></el-col>
          </el-row>
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>自规入格员</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInline.selfQualifiedPersonnel}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>联系方式</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInline.selfQualifiedPersonnelmobile}}</span></div></el-col>
          </el-row> 
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>备注</span></div></el-col>
            <el-col :span="18"><div class="grid-content bg-purple"><span>{{formInline.memo}}</span></div></el-col>
          </el-row> 
        </div>
          <!-- 微网格 -->
        <div class="innerTable"  v-bind:style="{display:clickInnerFlag? 'block':'none'}">
           <div> <i class="iconfont icon-guanbi- closebtn" @click="clickInnerFlag = false"></i></div>
          <el-row type="flex" class="row-bg">
            <el-col :span="24"><div class="grid-content bg-purple"><span>{{innerTitle}}</span></div></el-col>
          </el-row>
          <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>网格长（一肩挑）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInnerInline.user}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>联系方式</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInnerInline.mobile}}</span></div></el-col>
          </el-row>
         
          <el-row type="flex" class="row-bg">
            <el-col :span="12"><div class="grid-content bg-purple"><span>地质灾害点（处）</span></div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple"><span >{{formInnerInline.geologicalHazards}}</span></div></el-col>
            
          </el-row>   
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>户数（户）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInnerInline.huoseholds}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>总人口数（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInnerInline.totalPopulation}}</span></div></el-col>
          </el-row>         
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>常住人口（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInnerInline.population}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>在外人口（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInnerInline.outsiders}}</span></div></el-col>
          </el-row>    
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>党员（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInnerInline.party}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>困难户党员（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInnerInline.poorHouseholds}}</span></div></el-col>
          </el-row>    
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>低保户（户）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInnerInline.lowIncomeHouseholds}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>低边户（户）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInnerInline.lowEdgeHousehold}}</span></div></el-col>
          </el-row>    
            <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>退伍军人（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInnerInline.exSoldier }}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>残疾人（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInnerInline.theDisabled}}</span></div></el-col>
          </el-row>     
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>新居民（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInnerInline.newResidents}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>村民代表（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInnerInline.villagerRepresentative}}</span></div></el-col>
          </el-row>   
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>重点人员（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInnerInline.keyPersonnel}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>吸毒管控对象（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInnerInline.drugControlObjects}}</span></div></el-col>
          </el-row>    
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>社区矫正对象（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInnerInline.communityCorrection }}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>易肇事肇祸精神病人（人）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInnerInline.accident}}</span></div></el-col>
          </el-row>    
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>重点场所（处）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInnerInline.keyPlaces}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>出租房（处）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInnerInline.rentalHousing}}</span></div></el-col>
          </el-row>    
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>合用场所（处）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInnerInline.sharedSpace}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>宗教场所（处）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInnerInline.worship}}</span></div></el-col>
          </el-row>    
            <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>2021年共化解矛盾纠纷（起）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span >{{formInnerInline.disputes}}</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"><span>待化解矛盾纠纷（起）</span></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <span>{{formInnerInline.conflictsResolved}}</span></div></el-col>
          </el-row>    
          
           <el-row type="flex" class="row-bg">
            <el-col :span="6"><div class="grid-content bg-purple"><span>备注</span></div></el-col>
            <el-col :span="18"><div class="grid-content bg-purple"><span>{{formInnerInline.memo}}</span></div></el-col>
          </el-row> 
        </div>
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
          
      <!-- </div> -->
       
    
        
      <!-- <img :src="url" v-bind:style="{width:'90%'}" id="imgs"/>     -->
      
           

       

            
  <!-- border:item.border,
            backgroundColor:item.backgroundColor -->

 
</template>

<script>
  export default {

    data() {
      return {
      clickFlag:false,  
      clickBigFlag:false,
      clickInnerFlag:false,   
      appRootElment:{},
      showDialog:false,
       imgUrl:"",
       innerTitle:"",
       innerVisible:false,
        aaa:'123123',
             items:[
     
           {
              "id":4,
              "name":"中庄微网格",
              "top": "73%",
              "left": "56%",
               "width": "35px",
              "height": "30px",
              "border": "1px solid #666",
              "backgroundColor": "#ccc",
              "position": "absolute",
              "cursor": "move",
            //   "zIndex": "3000",
              "img":require('../../assets/zhongzhuang.png')

          },

          
      ],
      /*
      大网格表单
       */
        formInline: {
          user: '王国增',//网格长（一肩挑）
          mobile: '13780110998',//联系方式
          area:'2.7',//村庄面积
          woodland:'729',//林地
          geologicalHazards:'1',//地质灾害点（处）
          unauthorizedConstruction:'0',//违章建筑（处）
          huoseholds:'594',//户数（户）
          totalPopulation:'1918',//总人口数（人）
          population:'700',//常住人口（人）
          outsiders:'1218',// 在外人口（人）
          party:'64',//党员（人）
          poorHouseholds:'1',//困难户党员（人）
          lowIncomeHouseholds:'29',//低保户（户）
          lowEdgeHousehold:'2',//低边户（户） 
          exSoldier :'38',//退伍军人（人）
          theDisabled:'59',//残疾人（人）
          newResidents:'51',//新居民（人）
          villagerRepresentative:'61', //村民代表（人）
          keyPersonnel:'50',//重点人员（人） 
          drugControlObjects:'4',//吸毒管控对象（人）
          communityCorrection :'8',//社区矫正对象（人）
          accident:'8',//易肇事肇祸精神病人（人）
          keyPlaces:'11',//重点场所（处）
          rentalHousing:'9',//出租房（处）
          sharedSpace:'1',//合用场所（处）
          worship:'1',//宗教场所（处）
          disputes:'0',//2021年共化解矛盾纠纷（起）
          conflictsResolved:'0',//待化解矛盾纠纷（起）
          garrisonname1:'朱知平',//驻堂名单1
          garrisonmobile1:'13567778286',//驻堂联系1
          garrisonname2:'陈良财',//驻堂名单2
          garrisonmobile2:'13777737520',//驻堂联系1
          villageCadres:'李莉莉',//驻村干部
          villageCadresmobile:'13587707032',//驻村干部联系方式
          fullTimeGridMember:'阮双双',//专职网格员
          fullTimeGridMembermobile:'13588984918',//专职网格员联系方式
          districtPolice:'傅璟瀚',//辖区民警
          districtPolicemobile:'18357759321',//辖区民警联系方式
          qualifiedSupervisor:'罗广',//市监入格员
          qualifiedSupervisormobile:'15067879892',//市监入格员联系方式
          housingConstruction:'宋建兵',//住建入格员
          housingConstructionmobile:'13205877755',//住建入格员联系方式
          safetySupervisor:'干伟丰',//安监入格员
          safetySupervisormobile:'15825682031',//安监入格员联系方式
          qualifiedFireOfficer:'蒋勇',//消防入格员
          qualifiedFireOfficermobile:'15088577400',//消防入格员联系方式
          qualifiedDrugControlOfficer:'盛勇',//禁毒入格员
          qualifiedDrugControlOfficermobile:'15068152160',//禁毒入格员联系方式
          selfQualifiedPersonnel:'俞廷雷',//自规入格员
          selfQualifiedPersonnelmobile:'15726882508',//自规入格员
          memo:''
        },
        /**
         * 微网格表单
         */
        formInnerInline:{
          user: '',//网格长（一肩挑）
          mobile: '',//联系方式
          geologicalHazards:'',//地质灾害点（处）
          huoseholds:'',//户数（户）
          totalPopulation:'',//总人口数（人）
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

       innerItems:[
                {
              "parentId":4,
              "id":1,
              "name":"红绿灯",
              "top": "50%",
              "left": "68%",
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
              "top": "31%",
              "left": "63%",
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
              "top": "28%",
              "left": "56%",
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
              "top": "31%",
              "left": "48%",
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
              "left": "40%",
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
              "top": "36%",
              "left": "36%",
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
              "top": "46%",
              "left": "36%",
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
              "top": "45%",
              "left": "30%",
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
              "id":9,
              "name":"谷岙1",
              "top": "58%",
              "left": "83%",
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
              "id":10,
              "name":"谷岙2",
              "top": "55%",
              "left": "85%",
               "width": "35px",
              "height": "30px",
              "border": "1px solid #666",
              "backgroundColor": "#ccc",
              "position": "absolute",
              "cursor": "move",
            //   "zIndex": "3000",
            //   "img":require('../../assets/zhongzhuang1.jpg')

          }
          ],
          /**
           * 微网格表格信息
           */
          InnerTableInfo:[
            /**
             * 谷岙1
             */
                {parentId:4,
                id:9,
                user: '程志前',//网格长（一肩挑）
                mobile: '13587759396',//联系方式
                geologicalHazards:'1',//地质灾害点（处）
                huoseholds:'57',//户数（户）
                totalPopulation:'170',//总人口数（人）
                population:'62',//常住人口（人）
                outsiders:'108',// 在外人口（人）
                party:'5',//党员（人）
                poorHouseholds:'0',//困难户党员（人）
                lowIncomeHouseholds:'2',//低保户（户）
                lowEdgeHousehold:'0',//低边户（户） 
                exSoldier :'0',//退伍军人（人）
                theDisabled:'6',//残疾人（人）
                newResidents:'0',//新居民（人）
                villagerRepresentative:'5', //村民代表（人）
                keyPersonnel:'1',//重点人员（人） 
                drugControlObjects:'0',//吸毒管控对象（人）
                communityCorrection :'0',//社区矫正对象（人）
                accident:'1',//易肇事肇祸精神病人（人）
                keyPlaces:'1',//重点场所（处）
                rentalHousing:'0',//出租房（处）
                sharedSpace:'1',//合用场所（处）
                worship:'0',//宗教场所（处）
                disputes:'0',//2021年共化解矛盾纠纷（起）
                conflictsResolved:'0',//待化解矛盾纠纷（起）
                memo:''
            },
            /**
             * 谷岙2
             */
                {parentId:4,
                id:10,
                user: '程新立',//网格长（一肩挑）
                mobile: '13646825027',//联系方式
                geologicalHazards:'0',//地质灾害点（处）
                huoseholds:'46',//户数（户）
                totalPopulation:'131',//总人口数（人）
                population:'48',//常住人口（人）
                outsiders:'83',// 在外人口（人）
                party:'4',//党员（人）
                poorHouseholds:'0',//困难户党员（人）
                lowIncomeHouseholds:'2',//低保户（户）
                lowEdgeHousehold:'0',//低边户（户） 
                exSoldier :'3',//退伍军人（人）
                theDisabled:'2',//残疾人（人）
                newResidents:'0',//新居民（人）
                villagerRepresentative:'4', //村民代表（人）
                keyPersonnel:'0',//重点人员（人） 
                drugControlObjects:'0',//吸毒管控对象（人）
                communityCorrection :'0',//社区矫正对象（人）
                accident:'0',//易肇事肇祸精神病人（人）
                keyPlaces:'0',//重点场所（处）
                rentalHousing:'0',//出租房（处）
                sharedSpace:'0',//合用场所（处）
                worship:'0',//宗教场所（处）
                disputes:'0',//2021年共化解矛盾纠纷（起）
                conflictsResolved:'0',//待化解矛盾纠纷（起）
                memo:''
            },
            /**
             * 章义楼
             */
                {parentId:4,
                id:2,
                user: '董美芳',//网格长（一肩挑）
                mobile: '13296708673',//联系方式
                geologicalHazards:'0',//地质灾害点（处）
                huoseholds:'76',//户数（户）
                totalPopulation:'225',//总人口数（人）
                population:'83',//常住人口（人）
                outsiders:'142',// 在外人口（人）
                party:'10',//党员（人）
                poorHouseholds:'0',//困难户党员（人）
                lowIncomeHouseholds:'1',//低保户（户）
                lowEdgeHousehold:'0',//低边户（户） 
                exSoldier :'9',//退伍军人（人）
                theDisabled:'4',//残疾人（人）
                newResidents:'0',//新居民（人）
                villagerRepresentative:'10', //村民代表（人）
                keyPersonnel:'0',//重点人员（人） 
                drugControlObjects:'0',//吸毒管控对象（人）
                communityCorrection :'0',//社区矫正对象（人）
                accident:'0',//易肇事肇祸精神病人（人）
                keyPlaces:'1',//重点场所（处）
                rentalHousing:'0',//出租房（处）
                sharedSpace:'0',//合用场所（处）
                worship:'1',//宗教场所（处）
                disputes:'0',//2021年共化解矛盾纠纷（起）
                conflictsResolved:'0',//待化解矛盾纠纷（起）
                memo:''
            },
             /**
             * 红绿灯
             */
                {parentId:4,
                id:1,
                user: '李远君',//网格长（一肩挑）
                mobile: '15067739303',//联系方式
                geologicalHazards:'0',//地质灾害点（处）
                huoseholds:'37',//户数（户）
                totalPopulation:'108',//总人口数（人）
                population:'10',//常住人口（人）
                outsiders:'98',// 在外人口（人）
                party:'4',//党员（人）
                poorHouseholds:'0',//困难户党员（人）
                lowIncomeHouseholds:'0',//低保户（户）
                lowEdgeHousehold:'0',//低边户（户） 
                exSoldier :'3',//退伍军人（人）
                theDisabled:'1',//残疾人（人）
                newResidents:'5',//新居民（人）
                villagerRepresentative:'4', //村民代表（人）
                keyPersonnel:'0',//重点人员（人） 
                drugControlObjects:'0',//吸毒管控对象（人）
                communityCorrection :'0',//社区矫正对象（人）
                accident:'0',//易肇事肇祸精神病人（人）
                keyPlaces:'3',//重点场所（处）
                rentalHousing:'1',//出租房（处）
                sharedSpace:'2',//合用场所（处）
                worship:'0',//宗教场所（处）
                disputes:'0',//2021年共化解矛盾纠纷（起）
                conflictsResolved:'0',//待化解矛盾纠纷（起）
                memo:''
            },
            /**
             * 下中庄
             */
                {parentId:4,
                id:3,
                user: '李加良',//网格长（一肩挑）
                mobile: '13780119797',//联系方式
                geologicalHazards:'0',//地质灾害点（处）
                huoseholds:'100',//户数（户）
                totalPopulation:'326',//总人口数（人）
                population:'120',//常住人口（人）
                outsiders:'206',// 在外人口（人）
                party:'8',//党员（人）
                poorHouseholds:'0',//困难户党员（人）
                lowIncomeHouseholds:'9',//低保户（户）
                lowEdgeHousehold:'0',//低边户（户） 
                exSoldier :'6',//退伍军人（人）
                theDisabled:'14',//残疾人（人）
                newResidents:'2',//新居民（人）
                villagerRepresentative:'3', //村民代表（人）
                keyPersonnel:'5',//重点人员（人） 
                drugControlObjects:'1',//吸毒管控对象（人）
                communityCorrection :'3',//社区矫正对象（人）
                accident:'1',//易肇事肇祸精神病人（人）
                keyPlaces:'0',//重点场所（处）
                rentalHousing:'0',//出租房（处）
                sharedSpace:'0',//合用场所（处）
                worship:'0',//宗教场所（处）
                disputes:'0',//2021年共化解矛盾纠纷（起）
                conflictsResolved:'0',//待化解矛盾纠纷（起）
                memo:''
            },
            /**
             * 社区活动中新
             */
                {parentId:4,
                id:4,
                user: '李回伟',//网格长（一肩挑）
                mobile: '17758119033',//联系方式
                geologicalHazards:'0',//地质灾害点（处）
                huoseholds:'41',//户数（户）
                totalPopulation:'150',//总人口数（人）
                population:'55',//常住人口（人）
                outsiders:'95',// 在外人口（人）
                party:'6',//党员（人）
                poorHouseholds:'0',//困难户党员（人）
                lowIncomeHouseholds:'4',//低保户（户）
                lowEdgeHousehold:'1',//低边户（户） 
                exSoldier :'2',//退伍军人（人）
                theDisabled:'7',//残疾人（人）
                newResidents:'10',//新居民（人）
                villagerRepresentative:'4', //村民代表（人）
                keyPersonnel:'2',//重点人员（人） 
                drugControlObjects:'0',//吸毒管控对象（人）
                communityCorrection :'2',//社区矫正对象（人）
                accident:'0',//易肇事肇祸精神病人（人）
                keyPlaces:'0',//重点场所（处）
                rentalHousing:'0',//出租房（处）
                sharedSpace:'0',//合用场所（处）
                worship:'0',//宗教场所（处）
                disputes:'0',//2021年共化解矛盾纠纷（起）
                conflictsResolved:'0',//待化解矛盾纠纷（起）
                memo:''
            },
             /**
             * 文化礼堂
             */
                {parentId:4,
                id:5,
                user: '张晓敏',//网格长（一肩挑）
                mobile: '13868426246',//联系方式
                geologicalHazards:'0',//地质灾害点（处）
                huoseholds:'50',//户数（户）
                totalPopulation:'149',//总人口数（人）
                population:'55',//常住人口（人）
                outsiders:'94',// 在外人口（人）
                party:'7',//党员（人）
                poorHouseholds:'0',//困难户党员（人）
                lowIncomeHouseholds:'2',//低保户（户）
                lowEdgeHousehold:'1',//低边户（户） 
                exSoldier :'3',//退伍军人（人）
                theDisabled:'3',//残疾人（人）
                newResidents:'4',//新居民（人）
                villagerRepresentative:'4', //村民代表（人）
                keyPersonnel:'3',//重点人员（人） 
                drugControlObjects:'0',//吸毒管控对象（人）
                communityCorrection :'2',//社区矫正对象（人）
                accident:'1',//易肇事肇祸精神病人（人）
                keyPlaces:'1',//重点场所（处）
                rentalHousing:'1',//出租房（处）
                sharedSpace:'0',//合用场所（处）
                worship:'0',//宗教场所（处）
                disputes:'0',//2021年共化解矛盾纠纷（起）
                conflictsResolved:'0',//待化解矛盾纠纷（起）
                memo:''
            },  
            /**
             * 兰岩
             */
                {parentId:4,
                id:6,
                user: '何琴玉',//网格长（一肩挑）
                mobile: '13695872585',//联系方式
                geologicalHazards:'0',//地质灾害点（处）
                huoseholds:'58',//户数（户）
                totalPopulation:'232',//总人口数（人）
                population:'86',//常住人口（人）
                outsiders:'146',// 在外人口（人）
                party:'7',//党员（人）
                poorHouseholds:'0',//困难户党员（人）
                lowIncomeHouseholds:'5',//低保户（户）
                lowEdgeHousehold:'0',//低边户（户） 
                exSoldier :'3',//退伍军人（人）
                theDisabled:'8',//残疾人（人）
                newResidents:'18',//新居民（人）
                villagerRepresentative:'6', //村民代表（人）
                keyPersonnel:'0',//重点人员（人） 
                drugControlObjects:'0',//吸毒管控对象（人）
                communityCorrection :'0',//社区矫正对象（人）
                accident:'0',//易肇事肇祸精神病人（人）
                keyPlaces:'5',//重点场所（处）
                rentalHousing:'5',//出租房（处）
                sharedSpace:'0',//合用场所（处）
                worship:'0',//宗教场所（处）
                disputes:'0',//2021年共化解矛盾纠纷（起）
                conflictsResolved:'0',//待化解矛盾纠纷（起）
                memo:''
            },
             /**
             * 前山屋
             */
                {parentId:4,
                id:7,
                user: '何友春',//网格长（一肩挑）
                mobile: '13588974230',//联系方式
                geologicalHazards:'0',//地质灾害点（处）
                huoseholds:'45',//户数（户）
                totalPopulation:'141',//总人口数（人）
                population:'53',//常住人口（人）
                outsiders:'88',// 在外人口（人）
                party:'5',//党员（人）
                poorHouseholds:'0',//困难户党员（人）
                lowIncomeHouseholds:'2',//低保户（户）
                lowEdgeHousehold:'0',//低边户（户） 
                exSoldier :'2',//退伍军人（人）
                theDisabled:'10',//残疾人（人）
                newResidents:'9',//新居民（人）
                villagerRepresentative:'6', //村民代表（人）
                keyPersonnel:'4',//重点人员（人） 
                drugControlObjects:'3',//吸毒管控对象（人）
                communityCorrection :'1',//社区矫正对象（人）
                accident:'0',//易肇事肇祸精神病人（人）
                keyPlaces:'2',//重点场所（处）
                rentalHousing:'2',//出租房（处）
                sharedSpace:'0',//合用场所（处）
                worship:'0',//宗教场所（处）
                disputes:'0',//2021年共化解矛盾纠纷（起）
                conflictsResolved:'0',//待化解矛盾纠纷（起）
                memo:''
            },
             /**
             * 接客僧
             */
                {parentId:4,
                id:8,
                user: '金忠孝',//网格长（一肩挑）
                mobile: '15168742626',//联系方式
                geologicalHazards:'0',//地质灾害点（处）
                huoseholds:'84',//户数（户）
                totalPopulation:'287',//总人口数（人）
                population:'106',//常住人口（人）
                outsiders:'181',// 在外人口（人）
                party:'8',//党员（人）
                poorHouseholds:'0',//困难户党员（人）
                lowIncomeHouseholds:'2',//低保户（户）
                lowEdgeHousehold:'0',//低边户（户） 
                exSoldier :'5',//退伍军人（人）
                theDisabled:'1',//残疾人（人）
                newResidents:'3',//新居民（人）
                villagerRepresentative:'9', //村民代表（人）
                keyPersonnel:'0',//重点人员（人） 
                drugControlObjects:'0',//吸毒管控对象（人）
                communityCorrection :'0',//社区矫正对象（人）
                accident:'0',//易肇事肇祸精神病人（人）
                keyPlaces:'0',//重点场所（处）
                rentalHousing:'0',//出租房（处）
                sharedSpace:'0',//合用场所（处）
                worship:'0',//宗教场所（处）
                disputes:'0',//2021年共化解矛盾纠纷（起）
                conflictsResolved:'0',//待化解矛盾纠纷（起）
                memo:''
            },
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
       this.init();
    //   LoginHidden();
    },
     created() {
  },
  methods: {
    init :function(){
      document.getElementsByClassName("drag")[0].style.height=window.innerHeight-50+'px';
      let image = new Image();
      image.src = "http://localhost:8080/download/wangge2.png";
      // document.getElementsByClassName("drag")[0].style.width=window.innerWidth+'px';
    },
    clickIcon: function (item,event) {
        this.clickFlag = true;
        this.clickBigFlag = true;
        // document.getElementsByClassName("innerImg")[0].style.width=window.innerWidth+'px'; 
        
        this.imgUrl = 'http://localhost:8080/download/zhongzhuang.png';
        document.getElementsByClassName("innerImg")[0].style.height=window.innerHeight-50+'px'; 
        

    //    item.img =  require('@/assets/'+this.a)
    //     let routeData = this.$router.resolve({
    //     name: 'MessageCenter',
    //     query: {img: item.img,id:item.id}

    // })
    // window.open(routeData.href, '_blank')
    //     this.dialogVisible = true;
    //     this.title = item.name;
    //     this.url = item.img
    //     document.getElementById("imgs")
        // this.innerVisible = true;
        // alert(item.id);
     
    },
    
  
  close: function(){
      this.clickFlag = false;
      this.clickBigFlag = false;
      this.clickInnerFlag = false;

  },
    clickInnerIcon: function(item){
      this.clickInnerFlag = true;
       this.clickBigFlag = false;
        this.innerVisible = true;
        this.innerTitle = item.name;
        for(let i =0 , obj; obj = this.InnerTableInfo[i++];){
          if(obj.id == item.id && obj.parentId == item.parentId){
              for( let key in this.formInnerInline){
                this.formInnerInline[key] = obj[key];
              }
          }
        }

    },
    closeDialog:function(event){
        console.log(event);

    }
  }
  }
</script>
<style >
  .el-row {
    /* margin-bottom: 20px; */
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 5px 0;
    background-color: #f9fafc;
  }
    .innerTable{
      position: absolute;
      height: 600px;
      width: 600px;
      border:1px solid ;
      top: 50px;
      right: 20px;
      overflow-y: scroll; 
    }
   .dialogclass {
        height: 80%;
        /* overflow-y: scroll; */
    }
</style>
<style scoped>

.drag {
        background-image: url(http://localhost:8080/download/wangge2.png);
        background-size:80% 100%;
        background-position:center top;
        background-repeat: no-repeat;
        margin: auto 10%;
        position: relative;
    }

    .innerdrag{
      background-size:100% 100%;
        position: relative;
    }
    .innerImg{
        background-size:100% 100%;
        background-repeat: no-repeat;
        background-position:center top;
        margin: auto 10%;
        position: relative;
        /* background-color: red; */
    }
    .closebtn{
      font-size: 25px;
      margin-right: -96%;
    }
 .cancel{
   opacity: 0;
 }
    
</style>