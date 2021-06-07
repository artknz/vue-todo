<template>
  <div class="v-todo container">
    <h1>{{ title }}</h1>
    <div class="form-control">
      <input :placeholder="placeholderTitle" type="text" class="note-title" v-model="titleValue" @keypress.enter="addNewNote" />
      <input :placeholder="placeholderNote" type="text" v-model="inputValue" @keypress.enter="addNewNote" />
      <form class="priority-check">
        <p>Приоритет:</p>
        <label>
          <input
          v-model="priorityValue"
          @keypress.enter="addNewNote"
          name="priority"
          type="radio"
          value="⚡"
          class="priority-low">Низкий
        </label>
        <label>
          <input
          v-model="priorityValue"
          @keypress.enter="addNewNote"
          name="priority"
          type="radio"
          value="⚡⚡"
          class="priority-middle">Средний
        </label>
        <label>
          <input
          v-model="priorityValue"
          @keypress.enter="addNewNote"
          name="priority"
          type="radio"
          value="⚡⚡⚡"
          class="priority-high">Высокий
        </label>
      </form>
      <button class="btn add" @click="addNewNote">Добавить</button>
      <ul class="list" v-if="notes.length !== 0">
        <li class="list-item" v-for="(note, index) in notes" :key="note">
          {{ note }}
          <button class="btn done" @click="deleteNote(index)">Завершить</button>
          <button class="btn delete" @click="deleteNote(index)">Провалить</button>
        </li>
      </ul>
      <h3 class="msg" v-if="notes.length === 0">Заметок нет</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Заметки',
      placeholderTitle: 'Введите название заметки',
      placeholderNote: 'Содержание заметки',
      titleValue: '',
      inputValue: '',
      singleNote: '',
      notes: [],
      priorityValue: '',
    }
  },
  methods: {
    addNewNote() {
      if(this.inputValue || this.titleValue !== '') {
        this.singleNote = this.titleValue + ' ' + this.inputValue + ' ' + this.priorityValue
        this.notes.push(this.singleNote)
        this.inputValue = ''
        this.titleValue = ''
        this.priorityValue = ''
      }
    },
    deleteNote(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>

<style scoped>
  .btn {
    color: #177E89;
    position: relative;
    border-radius: 99px;
    letter-spacing: 0.05em;
    border: 1px solid #177E89;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1.5rem;
    font-weight: 700;
    background: #fff;
  }

  .btn:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .add {
    margin-top: 20px;
  }

  .delete {
    background: #DB3A34;
    color: #fff;
    border-color: #DB3A34;
    margin-left: 10px;
  }

  .done {
    background: #06d6a0;
    color: #fff;
    border-color: #06d6a0;
    margin-left: auto;
  }

  .container {
    margin: 0 auto;
    max-width: 1000px;
  }

  .form-control {
    position: relative;
    margin-bottom: 0.5rem;
  }

  .form-control input {
    margin: 20px auto 0px;
    outline: none;
    border: 2px solid #ccc;
    width: 100%;
    color: #2c3e50;
    padding: 0.5rem 1.5rem;
    border-radius: 99px;
    font-size: 1rem;
  }

  .list {
    margin: 0;
    margin-top: 20px;
    padding: 0;
    list-style: none;
  }

  .list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
    transition: .22s all;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 90%;
    margin: auto;
  }

  .msg {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .priority-check {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>
