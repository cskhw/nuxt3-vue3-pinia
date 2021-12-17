<template>
  <div class="tinymce">
    <h4>TinyMCE Page</h4>
    <editor :initialValue="text"></editor>
    <span>{{ text }}</span>
    <input type="text" @input="inputText" />
    <button @click="onClick(text)">insert</button>
    <button @click="check">check</button>

  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Editor from "@tinymce/tinymce-vue";
import useTinyStore from "@/stores/tiny";
import useTodoStore from "~~/stores/todos";

export default defineComponent({
  name: "TinyMCE",
  components: { Editor },
  setup() {
    const todoStore = useTodoStore();
    const tinyStore = useTinyStore();
    const text = ref("aaa");
    const inputText = (e) => {
      text.value = e.target.value;
      tinyStore.content = e.target.value;
    };

    const onClick = (inputContent) => {
      console.log("onClick");
      tinyStore.changeText(inputContent);
      console.log(content.value);
    };
    const check = () => console.log(tinyStore.content);
    return { text, onClick, check, todoStore, inputText };
  },
});
</script>

<style lang="scss">
.tinymce {
  border: 1px solid black;
  padding: 10px;
}
</style>
