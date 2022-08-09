<script setup>
import { useCripto } from "../../composable/cripto.composable.js";
import {useField} from "vee-validate";
import { useTransactions } from "../../composable/transactions.composable";


const { getCriptoNames } = useCripto();
const { setPurchase } = useTransactions();

const {value: crypto_code, errorMessage: errorCode} = useField("crypto_code");
const {value: crypto_amount, errorMessage: errorCoin} = useField("crypto_amount");

</script>

<template>
<h4>Nueva compra</h4>
<div class="container">
  <form @submit="setPurchase">
    <div class="row mb-3" style="font-family: 'Lato', sans-serif;">  
      <label>Seleccionar criptomoneda</label>
      <select as="select" class="form-select" v-model="crypto_code">
        <option :value="item" v-for="(item, index) in getCriptoNames" :key="index">{{ item.name }}</option>
      </select>
      <span class="text-danger">{{errorCode}}</span>
    </div>
    <div class="row mb-3" style="font-family: 'Lato', sans-serif;">
      <label>Cantidad a comprar</label>
      <input type="number" step="any" class="form-control mb-2" v-model="crypto_amount" placeholder="0" min="0.000001" />
      <span class="text-danger">{{errorCoin}}</span>
      <button type="submit" class="btn btn-primary">Comprar</button>
    </div>
  </form>
</div>
</template>
