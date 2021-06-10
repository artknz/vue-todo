import { createStore } from 'vuex';

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
    addNote(context, payload) {
      context.commit('addNote', payload);
    }
  },
  getters: {}
});

export default store;
