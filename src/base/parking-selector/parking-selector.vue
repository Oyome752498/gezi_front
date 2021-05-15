<template>
<div class="div">
  <p class="msg">{{msg}}：</p>
  <el-select class="selector" placeholder=""
             filterable
             collapse-tags
             :value="value"
             :size="size"
             @input="change($event)"
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
    props: ['value', 'size', 'array','msg'],
    data () {
      return {
        oldOptions: [],
          value5: [],
          returnArr:[]
      }
    },
     mounted: function() {
    
  },
 
    methods: {
      change: function (val) {
        this.$emit('input', val);
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
/* .selector :before{
   content: "单选";
} */
</style>
