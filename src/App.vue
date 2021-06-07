<template>
  <div id="app">
    <vTodo />
    <!-- <vList /> -->
  </div>
</template>

<script>
import vTodo from './components/v-todo.vue'
// import vList from './components/v-list.vue'

export default {
  name: 'App',
  components: {
    vTodo,
    // vList
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
</style>
