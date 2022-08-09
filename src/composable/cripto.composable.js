import { computed } from "vue";
import ApiCripto from "../services/api.cripto.service.js";
import { criptoStore } from "../stores/cripto.store.js";

export const useCripto = () => {
  const store = criptoStore();

  const getCriptoNames = computed(() => {
    return store.getAllNames;
  });

  const setDolar = () => {
    ApiCripto.getDolar()
      .then((res) => store.setDolarPrice(res.data))
      .catch((err) => console.log(err));
  };

  const setBTC = () => {
    ApiCripto.getBTC()
      .then((res) => store.setBTCPrice(res.data))
      .catch((err) => console.log(err));
  };

  const setETH = () => {
    ApiCripto.getETH()
      .then((res) => store.setETHPrice(res.data))
      .catch((err) => console.log(err));
  };

  const setDAI = () => {
    ApiCripto.getDAI()
      .then((res) => store.setDAIPrice(res.data))
      .catch((err) => console.log(err));
  };

  const setAllPrices = () => {
    setBTC();
    setDAI();
    setDolar();
    setETH();
  };

  return { setAllPrices, getCriptoNames };
};
