<template>
  <div class="form-control">
    <InputTodo inputPlaceholder="placeholderTitle" />
    <InputTodo inputPlaceholder="Содержание заметки" />
    <PriorityTodo />
    <ButtonTodo class="btn add" @click="addNewNote">{{ addButtonText }}</ButtonTodo>
  </div>
</template>

<script>
import InputTodo from '../components/InputTodo.vue';
import PriorityTodo from '../components/PriorityTodo.vue';
import ButtonTodo from '../components/ButtonTodo.vue';

export default {
  name: 'FormTodo',
  data() {
    return {
      placeholderTitle: 'Введите название заметки',
      placeholderNote: 'Содержание заметки',
      addButtonText: 'Добавить',
      title: '',
      titleValue: '',
      inputValue: '',
      singleNote: '',
    }
  },
  components: {
    InputTodo,
    PriorityTodo,
    ButtonTodo
  },
  methods: {
    addNewNote() {
      if(this.inputValue && this.titleValue) {
        console.log('click')
        this.singleNote = this.titleValue + ' ' + this.inputValue + ' ' + this.priorityValue
        this.$store.dispatch('addNote', this.singleNote);
        this.inputValue = ''
        this.titleValue = ''
        this.priorityValue = ''
      }
    },
  }
}
</script>

<style scoped>
  .form-control {
    position: relative;
    margin-bottom: 0.5rem;
  }
</style>
