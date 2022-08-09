<script setup>
import { useCripto } from "../../composable/cripto.composable.js"
import { useSale } from "../../composable/sale.composable.js"
const { getCriptoNames } = useCripto();
const { requestBody, coinSelected, makeSale } = useSale();
</script>


<template>
  <div class="container" style="font-family: 'Lato', sans-serif;">
    <h4>Nueva Venta</h4>
    <label>Seleccionar criptomoneda</label>
    <select class="form-select" v-model="coinSelected">
      <option :value="item" v-for="item of getCriptoNames">{{ item.name }}</option>  
    </select>
    <label>Cantidad a vender</label>
    <input type="number" class="form-control mb-2" v-model="requestBody.crypto_amount" min="0" />
    <button type="button" class="btn btn-primary" @click="makeSale">Vender</button>
  </div>
    
</template>

