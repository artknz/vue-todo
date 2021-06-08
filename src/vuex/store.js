import { createStore } from 'vuex'

const store = createStore({
  state: {
    notes: []
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note);
    }
  },
  actions: {
    addNote(context) {
      context.commit('addNote');
    }
  },
  getters: {}
});

export default store;
