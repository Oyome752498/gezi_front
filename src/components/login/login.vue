<template>
 <div>
 <p>login</p>
  <el-button type="primary" @click="goto">测试跳转</el-button>
  <div>  
    <!-- {{count}}
    <button button v-stream:click="plus$">+</button> -->
     <div>{{ count }}</div>
    <!-- simple usage -->
    <button v-stream:click="plus$">Add on Click</button>
    <button
      v-stream:click="{ subject: plus$, data: minusDelta1, options:{once:true} }"
    >Add on Click (Option once:true)</button>
    <!-- you can also stream to the same subject with different events/data -->
    <button
      v-stream:click="{ subject: minus$, data: minusDelta1 }"
      v-stream:mousemove="{ subject: minus$, data: minusDelta2 }"
    >Minus on Click &amp; Mousemove</button>
    <pre>{{ $data }}</pre>
    <my-button v-stream:click="plus$"></my-button>
  </div>


  </div> 

</template>

<script>
import {LoginHidden} from '../../js/userInfo'
import { Subject,merge  } from 'rxjs'
import { map, pluck,startWith, scan } from 'rxjs/operators'
  export default {
      domStreams: ['plus$', 'minus$'],
 subscriptions() {
    return {
      count: merge(
        this.plus$.pipe(map(() => 1)),
        this.minus$.pipe(pluck('data'))
      ).pipe(
        startWith(0),
        scan((total, change) => total + change)
      )
    }
  },
    data() {
      return {
      count:0,
        appRootElment:{},
        minusDelta1: -1,
        minusDelta2: -1
       
      }
 
    },
 

       
    methods:{
      goto(){
        this.$router.push("/ProcessingCenter")
      },
 
    },
     mounted() {
      LoginHidden();
    },
     created() {
         setTimeout(() => {
      this.minusDelta2 = -5
    }, 5000)
       console.log('created Event  --> Goto init()')
  },
  components: {
    myButton: {
      template: `<button @click="$emit('click')">MyButton</button>`
    }
  },
  }
</script>
<style scoped>


</style>