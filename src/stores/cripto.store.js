import { defineStore } from "pinia";

export const criptoStore = defineStore("cripto", {
  state: () => ({
    dolar: {
      name: "dolar",
    },
    coins: [
      {
        name: "Bitcoin",
        code: "btc",
        price: null,
      },
      {
        name: "Etherum",
        code: "eth",
        price: null,
      },
      {
        name: "DAI",
        code: "dai",
        price: null,
      },
    ],
  }),
  getters: {
    getAllNames(state) {
      return state.coins;
    },
  },
  actions: {
    setDolarPrice(price) {
      this.dolar_price = price;
    },
    setBTCPrice(price) {
      this.coins[0].price = price;
    },
    setETHPrice(price) {
      this.coins[1].price = price;
    },
    setDAIPrice(price) {
      this.coins[2].price = price;
    },
  },
});
