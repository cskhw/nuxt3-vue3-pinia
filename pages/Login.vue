<template>
  <div class="login">
    <input type="text" />
    <input type="text" />

    <button @click="onClick"></button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  components: {},
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>

<style></style>
