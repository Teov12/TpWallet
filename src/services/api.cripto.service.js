import axios from "axios";

const apiCripto = axios.create({
  baseURL: "https://criptoya.com/api/",
});

const getDolar = () => {
  return apiCripto.get("/dolar");
};

const getBTC = () => {
  return apiCripto.get("/satoshitango/btc/ars");
};

const getETH = () => {
  return apiCripto.get("/satoshitango/eth/ars");
};

const getDAI = () => {
  return apiCripto.get("/satoshitango/dai/ars");
};

export default { getDAI, getBTC, getETH, getBTC, getDolar };
