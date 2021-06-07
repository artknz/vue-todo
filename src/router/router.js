import Vue from 'vue'
import Router from 'vue-router'

import vTodo from '../components/v-todo.vue'
import vList from '../components/v-list'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'v-todo',
      component: vTodo
    },
    {
      path: '/todo-list',
      name: 'todo-list',
      component: vList
    }
  ]
})

export default router;
