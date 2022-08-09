<template>
  <NavbarVue />
  <div class="container p-3">
    <RouterView />
  </div>
</template>

<script setup>
import NavbarVue from "./Navbar.vue";
import { RouterView, useRouter } from "vue-router";
import { useUser } from "../composable/user.composable.js";
import { useCripto } from "../composable/cripto.composable.js";
import { onMounted } from "vue";
const { setAllPrices } = useCripto();

const { getUser } = useUser();

const router = useRouter();

onMounted(() => {
  if (!getUser.value) router.push({ path: "/login" });
  else {
    setAllPrices();
  }
});
</script>
