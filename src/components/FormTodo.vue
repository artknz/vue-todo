<template>
  <div class="form-control">
    <input :placeholder="placeholderTitle" type="text" class="note-title" v-model="titleValue" @keypress.enter="addNewNote" />
    <input :placeholder="placeholderNote" type="text" class="note-title" v-model="inputValue" @keypress.enter="addNewNote" />
    <PriorityTodo @changeValue='onChangeValue' @keypress.enter="addNewNote" />
    <ButtonTodo :class="'list__btn add'" @click="addNewNote">{{ addButtonText }}</ButtonTodo>
  </div>
</template>

<script>
import PriorityTodo from '../components/PriorityTodo.vue';
import ButtonTodo from '../components/ButtonTodo.vue';

export default {
  name: 'FormTodo',
  data() {
    return {
      placeholderTitle: 'Введите название заметки',
      placeholderNote: 'Содержание заметки',
      addButtonText: 'Добавить',
      titleValue: '',
      inputValue: '',
      singleNote: '',
    }
  },
  components: {
    PriorityTodo,
    ButtonTodo
  },
  methods: {
    addNewNote() {
      if(this.inputValue && this.titleValue && this.priorityValue) {
        this.$store.dispatch('addNote', this.note);
        this.inputValue = '';
        this.titleValue = '';
        this.priorityValue = '';
      }
    },
    onChangeValue(value) {
      return this.priorityValue = value;
    }
  },
  computed: {
    note() {
      return `${this.titleValue} ${this.inputValue} ${this.priorityValue}`;
    }
  }
};
</script>

<style scoped>
  .form-control {
    position: relative;
    margin-bottom: 0.5rem;
  }

  .note-title {
    margin: 20px auto 0px;
    outline: none;
    border: 2px solid #ccc;
    width: 100%;
    color: #2c3e50;
    padding: 0.5rem 1.5rem;
    border-radius: 99px;
    font-size: 1rem;
  }
</style>
