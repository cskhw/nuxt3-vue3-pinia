<template>
  <div id="app">
    <h4>Page</h4>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/board">Board</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
    </nav>
    <div class="controls">
      <button @click="getTodos">todos 가져오기</button><br /><br />
      {{ todoStore.todos }}
    </div>
    <section>
      <TodoList></TodoList>
      <TinyMCE></TinyMCE>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TodoList from "@/components/TodoList.vue";
import TinyMCE from "@/components/TinyMCE.vue";
import useTodoStore from "~~/stores/todos";

export default defineComponent({
  components: {
    TodoList,
    TinyMCE,
  },
  setup() {
    const todoStore = useTodoStore();
    const getTodos = () => console.log(todoStore.todos);
    return { getTodos, todoStore };
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
}
section {
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, auto));
  grid-gap: 3vw;
  padding: 3vw;
}
nav {
  background-color: black;
  padding: 1rem;
  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;
    &:hover {
      color: darken(white, 10%);
    }
  }
}
.controls {
  margin: 3vw;
  padding: 2vw;
  border: 1px solid black;
  background-color: grey;
}
</style>
