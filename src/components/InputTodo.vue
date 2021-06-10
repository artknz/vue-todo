<template>
  <input :placeholder="inputPlaceholder" type="text" class="note-title" v-model="titleValue" @keypress.enter="addNewNote" />
</template>

<script>
export default {
  name: 'InputTodo',
  props: {
    inputPlaceholder: String
  }
}
</script>

<style scoped>
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
