<script setup>
import { onMounted } from 'vue';
import {useTransactions} from "../composable/transactions.composable";
const {getPurchases, getAllTransactions} = useTransactions();

onMounted(() =>{
    getAllTransactions();
})
</script>

<template>
<h1>historial</h1>

<h4>compras</h4>
<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Criptomoneda</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Dinero</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="(item, index) of getPurchases" :key="index">
            <th>{{index + 1}}</th>
            <td>{{item.crypto_code}}</td>
            <td>{{item.crypto_amount}}</td>
            <td>{{item.money}}</td>
        </tr>
    </tbody>
</table>
</template>