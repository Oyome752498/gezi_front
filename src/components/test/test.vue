<template>
<div >
  <button>go</button>
  <!-- <parking-autocomplete></parking-autocomplete> -->
  <parking-table :columnData="columnData" :tableData="tableData"></parking-table>
  </div>
</template>

<script>
  import parkingTable from '../../base/parking-table/parking-table'
  import parkingAutocomplete from '../../base/parking-autocomplete/parking-autocomplete'

  import {config} from '../../config'
  export default {
    data() {
      return {
        restaurants: [],
        state: '',
        timeout:  null,
        columnData:[
          {
            "prop":"name",
            "label":"姓名",
            "width":"180"
          },
          {
            "prop":"date",
            "label":"日期",
            "width":"180"
          },
          {
            "prop":"address",
            "label":"地址",
            "width":"180"
          }, 
        ],
        tableData: [{
          date: '2016-05-03',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1511 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1512 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1513 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1514 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎5',
          address: '上海市普陀区金沙江路 1515 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎6',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎7',
          address: '上海市普陀区金沙江路 1517 弄'
        }]
      }
    },
    components: {
      parkingAutocomplete,
      parkingTable
      
    },
    created(){

      this.$axios.get('https://pagead2.googlesyndication.com/getconfig/sodar',{       // 还可以直接把参数拼接在url后边
        params:{
            sv:200,
            tid:"gda",
            tv:"r20200817",
            st:"env"
        }
    }).then(function(res){
        console.log(res.data);
    }).catch(function (error) {
        console.log(error);
    });
    // this.$axios.get(`${config.base_url}parkinginfo/getdata`,{       // 还可以直接把参数拼接在url后边
    //     params:{
    //         id:'4537875645645696'
    //     }
    // }).then(function(res){
    //     console.log(res.data);
    // }).catch(function (error) {
    //     console.log(error);
    // });
      
    },
     mounted() {
      //  this.loadAll();
    },
    methods:{
        getRxJSData() {
          return new Observable((observer) => {
            setTimeout( () => {
              observer.next('这是Rxjs的异步方法返回');
              // observer.error('失败了...');
            }, 1000);
    });
  },
  go(){
    this.getRxJSData().subscribe((data) =>{
      console.log(data);
    })
  }
    
    }

  }
</script>
<style scoped>


</style>