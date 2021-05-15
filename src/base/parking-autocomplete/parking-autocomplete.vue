<template>
<div class="div">
  <p class="msg">{{msg}}：</p>
<el-autocomplete class="wym_select"
  v-model="state"
  :fetch-suggestions="querySearchAsync"
  placeholder="请输入内容"
  @input="handleSelect"
  @focus="loadAll"
  
></el-autocomplete>


 
  </div>
</template>

<script>
  import {config} from '../../config'
  export default {
   props: ['params', 'msg'],

    data() {
      return {
        restaurants: [],
        state: '',
        timeout:  null,
       
      }
    },
  
    created(){
    
    },
     mounted() {
      //  this.loadAll();
    },
    methods:{
          loadAll() {
            let that = this;
            this.$axios.get(`${config.base_url}${that.params.url}`,{       // 还可以直接把参数拼接在url后边
        params:{
          name : that.state
        }
    }).then(function(res){
       that.restaurants = res.data
    }).catch(function (error) {
       that.restaurants = []
    });
      
      },
       querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 100 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        // this.state = item.address
        this.loadAll();
        console.log(item);
        this.$emit("input",this.state)
      }
    }

  }
</script>
<style scoped>
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