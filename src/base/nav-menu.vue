<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item v-bind:style="{'display':'none'}"  index="ProcessingCenter">大荆镇平安管理</el-menu-item>
    <!-- <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
   
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
    <!-- <el-menu-item index="5"><a >登录页面</a></el-menu-item> -->
 <el-menu-item v-bind:style="{'display':'none'}" index="MessageCenter" :disabled="messageAuthority">消息中心</el-menu-item>
  </el-menu>
</template>

<script type="text/ecmascript-6">
import {UserInfo} from '../js/userInfo'
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: 'ProcessingCenter'
    }
  },
  computed: {
    messageAuthority () {
      return UserInfo.messageAuthority
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      this.activeIndex2 = key;
      this.$router.push({name: key}).catch(err => err)
    }
  }
}
</script>

<style>
</style>
