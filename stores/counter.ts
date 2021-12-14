import { defineStore } from "pinia";

const useCounterStore = defineStore("counter", {
  state: () => ({ counter: 0 }),
  getters: {
    doubleCounter(state): number {
      return state.counter * 2;
    },
    doubleCounterWithoutType: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
      console.log(this.counter);
    },
  },
});

export default useCounterStore;
