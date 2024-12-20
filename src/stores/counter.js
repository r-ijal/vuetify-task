import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const oddOrEven = computed(() => count.value % 2 === 0 ? 'even' : 'odd')

    function increment() {
        count.value++
    }

    function decrement() {
        count.value--
    }

    return { count, doubleCount, increment, decrement, oddOrEven }
})