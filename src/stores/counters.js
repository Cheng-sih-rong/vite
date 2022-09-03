import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useCounterStore = defineStore('counters', () => {
    const counter = ref(0)
    const addCount = () => {
        counter.value++;
    }
    const doubleCount = computed(() => {
        counter.value * 2
    })
    return {
        counter,
        addCount,
        doubleCount
    }
});


// function getNewDiscountRate(rate) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(rate * Math.random())
//         }, 1000)
//     })
// }

// export const useCounterStore = defineStore({
//     id: 'counter',
//     state: () => ({
//         counter: 0,
//         // name: 'jason',
//         // discountRate: 10
//     }),
//     getters: {
//         // 方法一
//         doubleCount: (state) => { state.counter * 2 },
//         // 方法二想用this(可以獲取整個實例)不能用箭頭函式
//         doubleCountByRowFunc: function () { return this.counter * 2 }
//     },
//     actions: {
//         // func
//         addCount() {
//             this.counter++
//         },
//         // asyn func
//         // async changeDiscountRate() {
//         //     try {
//         //         return this.discountRate = await getNewDiscountRate(this.discountRate)
//         //     } catch (e) {
//         //         throw Error(e)
//         //     }
//         // }
//     }
// })