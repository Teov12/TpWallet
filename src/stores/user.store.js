import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({
    user_id: 'teo123',
    transactions: [],
  }),
  getters: {
    getUser(state) {
      return state.user_id;
    },
  },
  actions: {
    setUser(user) {
      this.user_id = user;
    },
  },
});
