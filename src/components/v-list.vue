<template>
  <ul class="list" v-if="notes.length !== 0">
    <li class="list-item" v-for="(note, index) in notes" :key="note">
      {{ note }}
      <button class="btn done" @click="deleteNote(index)">Завершить</button>
      <button class="btn delete" @click="deleteNote(index)">Провалить</button>
    </li>
  </ul>
  <h3 class="msg" v-if="notes.length === 0">Заметок нет</h3>
</template>

<script>
export default {
  data() {
    return {
      notes: []
    }
  },
  methods: {
    deleteNote(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>
