 <template>
  <div>
    <el-tabs type="border-card" @tab-click = "clickTab" >
      <!-- <el-tab-pane label="用户管理">
        <user-management></user-management>
      </el-tab-pane>
      <el-tab-pane label="配置管理">
        <configuration-management></configuration-management>
      </el-tab-pane>
      <el-tab-pane label="角色管理" class="js">
        <test></test>
      </el-tab-pane> -->
      <el-tab-pane label="网格">
        <parking-demo></parking-demo>
      </el-tab-pane>
    </el-tabs>
  </div>
 </template>

<script type="text/ecmascript-6">
import test from '../test/test'
import parkingDemo from '../parking-demo/parking-demo'
export default {
  methods: {
    clickTab (e) {
      console.log('11')
    }
  },
  mounted() {
  },
  components: {
    test,
    parkingDemo
  }
}
</script>

<style >
  .js{
    width: 100%;
    height: 100%;
  }
</style>
