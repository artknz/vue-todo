<template>
  <FormTodo />
  <Carousel />
</template>

<script>
import FormTodo from '../../components/FormTodo.vue';
import Carousel from '../../components/Carousel.vue';

export default {
  name: 'FormTodoPage',
  components: {
    FormTodo,
    Carousel
  }
}
</script>
