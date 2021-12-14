<template>
  <div class="todolist">
    <h4>TodoList Page</h4>
    <div class="todos">
      <div class="todo" v-for="todo in todos" :key="todo.id">
        {{ todo }}
        {{ todo.title }}
        <button @click="onClickUpdateTodo(todo.id, todoText)">업데이트</button>
        <button @click="onClickDeleteTodo(todo.id)">삭제</button>
      </div>
      <span>{{ todoText }} </span><br />
      입력: <input type="text" @input="inputTodo" /><br />
      <button style="margin: 1vw" @click="onClickAddTodo">todo 추가</button>
      <button style="margin: 1vw" @click="onClickUpdateTodo(todo.id)">
        todo 업데이트
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import useTodoStore from "@/stores/todos";
export default defineComponent({
  name: "TodoList",
  components: {},
  props: {},
  setup() {
    const todoStore = useTodoStore();
    const todos = ref(todoStore.todos);
    const todoText = ref("");
    function inputTodo(e) {
      todoText.value = e.target.value;
    }
    const onClickAddTodo = () => todoStore.addTodo(todoText.value);
    const onClickDeleteTodo = (id) => todoStore.removeTodo(id);
    const onClickUpdateTodo = (id) => todoStore.updateTodo(id, todoText.value);
    return {
      todoStore,
      todos,
      todoText,
      inputTodo,
      onClickAddTodo,
      onClickDeleteTodo,
      onClickUpdateTodo,
    };
  },
});
</script>

<style lang="scss">
.todolist {
  border: 1px solid black;
  border-radius: 5px solid black;
  padding: 10px;
}
.todo {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  margin: 1vw;
  padding: 1vw;
}
</style>
