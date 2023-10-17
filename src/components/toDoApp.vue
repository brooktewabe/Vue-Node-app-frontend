<template>
  <div>
    <div class="container">
      <AddMyTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "../components/toDos/Todos.vue";
import AddMyTodo from "../components/toDos/AddMyTodo.vue";
import FilterTodos from "../components/toDos/FilterTodos.vue";

export default {
  name: "toDoApp",
  components: {
    Todos,
    AddMyTodo,
    FilterTodos,
  },
};
</script>

<style scoped>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
