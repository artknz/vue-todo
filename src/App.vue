<template>
  <TodoLayot>
    <TiltleTodo :title="titleTodo" />
    <div id="nav">
      <router-link :to="{name: 'FormTodoPage'}">Создание заметки</router-link>
      <router-link :to="{name: 'ListTodoPage'}">Список заметок</router-link>
    </div>
    <router-view />
  </TodoLayot>
</template>

<script>
import TiltleTodo from './components/TitleTodo.vue';
import TodoLayot from './layouts/TodoLayout.vue';

export default {
  name: 'App',
  data() {
    return {
      titleTodo: 'Заметки'
    }
  },
  components: {
    TiltleTodo,
    TodoLayot
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #177E89;
}
</style>
