<script setup>
import { useTransactions } from "../composable/transactions.composable.js";
import { useUser } from "../composable/user.composable.js"
const { getAll, getAllPurchase, getAllSales } = useTransactions();
const { getUser } = useUser();
</script>

<template>
  <div class="container" style="font-family: 'Lato', sans-serif;">
    <h1>Bienvendido a su billetera virtual {{getUser}}</h1>
    <h3>Aqui podrá acceder a su historial total de transacciones, de compras o ventas</h3>
    <button type="button" class="btn btn-primary me-2" @click="getAll">Ver transacciones</button>
    <button type="button" class="btn btn-primary me-2" @click="getAllPurchase">Ver compras</button>
    <button type="button" class="btn btn-primary" @click="getAllSales">Ver ventas</button>
  </div>
</template>
