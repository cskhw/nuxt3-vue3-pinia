import { defineStore } from "pinia";

const useStore = defineStore("main", {
  state: () => ({
    counter: 0,
  }),
  getters: {
    getDoubleCounter(state): number {
      return state.counter * 2;
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
