import { defineStore } from "pinia";

export const historyStore = defineStore("history", {
  state: () =>({
    transactions: []
  }),
  getters:{
    getHistoryPurchase(state){
      const purchases = state.transactions.filter((a) => a.action == "purchase")
      return purchases;
    }
  },

  actions:{
    setAllTransactions(res){
      this.transactions = res;
    }
  }
})