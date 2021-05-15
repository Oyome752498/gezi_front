<template>
<div class="div">
  <p class="msg">{{msg}}：</p>
  <el-select class="selector" placeholder=""
             multiple
             filterable
             collapse-tags
             :value="value"
             :size="size"
             @input="changeMultiple($event)"
             v-model="value5"
  >
    <el-option
      v-for="(item,index) in array"
      :key="item.label"
      :label="item.label"
      :value="item.value">

    </el-option>

  </el-select>
  </div>
</template>

<script type="text/ecmascript-6">
  import ElOption from "../../../node_modules/element-ui/packages/select/src/option.vue";

  export default {
    components: {ElOption},
    props: ['value', 'size', 'array','isall','msg'],
    data () {
      return {
        oldOptions: [],
          value5: [],
          returnArr:[]
      }
    },
     mounted: function() {
       this.$nextTick(function () {
         console.log(`isall:${this.isall}`);
         if(this.isall){
           this.array.unshift( {
            value: '全选',
            label: '全选'
          })
         }
       })
  },
 
    methods: {
      changeMultiple: function (val) {
        let allValues = []
        //保留所有值
        for (let item of this.array) {
          allValues.push(item.value)
        }

        // 用来储存上一次的值，可以进行对比
        const oldVal = this.oldOptions.length === 0 ? [] : this.oldOptions[1]

        // 若是全部选择
        if (val.includes('全选')) this.value5 = allValues

        // 取消全部选中  上次有 当前没有 表示取消全选
        if (oldVal.includes('全选') && !val.includes('全选')) this.value5 = []

        // 点击非全部选中  需要排除全部选中 以及 当前点击的选项
        // 新老数据都有全部选中
        if (oldVal.includes('全选') && val.includes('全选')) {
          const index = val.indexOf('全选')
          val.splice(index, 1) // 排除全选选项
          this.value5 = val
        }

        //全选未选 但是其他选项全部选上 则全选选上 上次和当前 都没有全选
        if (!oldVal.includes('全选') && !val.includes('全选')) {
          console.log(11)
          if (val.length === allValues.length - 1) this.value5 = ['全选'].concat(val)
        }

        //储存当前最后的结果 作为下次的老数据
        this.oldOptions[1] = this.value5
        if(this.value5){
          this.returnArr = [];
          for( let key of this.value5){
            if(key !== "全选"){
              this.returnArr.push(key);
            }
          }
        }
        this.$emit('input', this.returnArr);
      },

    },
    
  };
</script>

<style>
.div {
    display: inline-block;
}
.msg {
display: inline-block;
}
.selector {
display: inline-block;
}
</style>
