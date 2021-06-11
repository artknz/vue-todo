import { createRouter, createWebHistory } from 'vue-router';

import FormTodoPage from '../pages/FormTodo/route';
import ListTodoPage from '../pages/ListTodo/route';

const routes = [
  FormTodoPage,
  ListTodoPage
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
