import { defineStore } from "pinia";
const useTinyStore = defineStore("tiny", {
  state: () => ({
    content: "initial Value",
  }),
  getters: {},
  actions: {
    changeText(content) {
      this.content = content;
    },
  },
});

export default useTinyStore;
