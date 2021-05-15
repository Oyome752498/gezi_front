<template>
  <el-table
    :data="tableData"
    height="1000"
    border
    style="width: 100%">
     <el-table-column 
        v-for="item in columnData"
        :key="item.index"
        :label = "item.label"
        :prop = "item.prop"
        :width = "item.width"
      >
      </el-table-column>
  </el-table>
</template>

<script>
  export default {
          props: ['columnData','tableData'],

    data() {
      return {
      
       
      }
    }
  }
</script>