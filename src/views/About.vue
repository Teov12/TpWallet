<template>
<div class="container">
  <table class="table table-borderer">
    <thead>
        <tr>
          <th scope="col">Actividad</th>
          <th scope="col">Activo</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Dinero</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions">
          <td>{{transaction.action}}</td>
          <td>{{transaction.crypto_code}}</td>
          <td>{{transaction.crypto_amount}}</td>
          <td>{{transaction.money}}</td>
        </tr>
      </tbody>
  </table>
</div>
</template>

<script setup>
import { getAllTransactions } from "../services/api.client.service.js";
import { useTransactions } from "../composable/transactions.composable.js";
const transactions = getAllTransactions();
const { getAll, getAllPurchase, getAllSales } = useTransactions();
</script>


