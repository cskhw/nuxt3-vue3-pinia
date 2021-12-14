import { defineStore } from "pinia";

const useTodoStore = defineStore("todos", {
  state: () => ({
    todos: [
      {
        id: 0,
        title: "first",
      },
      {
        id: 1,
        title: "second",
      },
      {
        id: 2,
        title: "third",
      },
    ],
  }),
  getters: {
    getTodos(state): Array<Object> {
      return state.todos;
    },
  },
  actions: {
    addTodo(todo: string) {
      this.todos.push({
        id: this.todos[this.todos.length - 1].id + 1,
        title: todo,
      });
    },
    removeTodo(id: number) {
      console.log(id);
      var idx = 0;
      this.todos.forEach((todo) => {
        if (todo.id == id) {
          this.todos.splice(idx, 1);
        }
        idx++;
      });
    },
    updateTodo(id: number, title: string) {
      console.log(id, title);
      this.todos.forEach((todo) => {
        if (todo.id == id) {
          todo.id = id;
          todo.title = title;
        }
      });
    },
  },
});

export default useTodoStore;
