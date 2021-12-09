import { defineStore } from 'pinia';

const useCounterStore = defineStore("counter", {
    state: () => ({counter: 0}),
    getters: {
        getCounter() {
            console.log(this.counter)
            return this.counter;
        }
    },
    actions: {      
        increment(){
            this.counter++;
            console.log(this.counter)
        }
    }
})

export default useCounterStore;