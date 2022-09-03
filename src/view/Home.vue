
<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  {{store.counter}} 
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="add" >click</button>
</template>

<script >
import {storeToRefs} from 'pinia'
import { useCounterStore } from '@/stores/counters.js'

export default {
  setup() {
    const store = useCounterStore()
    const add = function(){
      store.addCount();
    }
    

    return { store, add }
  }
}
</script>

<style scoped>
</style>
