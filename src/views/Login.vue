<template>
  <div class="row justify-content-center" style="font-family: 'Lato', sans-serif;">
    <div class="col-auto p-5">
      <div class="card p-5">
        <form @submit.prevent="login(user)">
          <h1>Bienvenido a su billetera virtual</h1>
          <label>ID alfanumerico</label>
          <Field type="text" class="form-control" placeholder="Ingrese su ID alfanumerico" name="user" v-model="user"/>
          <ErrorMessage name="user" class="text-danger"/><br>
          <button type="submit" class="btn btn-primary mt-3">Ingresar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUser } from "../composable/user.composable.js";
import { useForm, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
const { login } = useUser();
const user = ref();

const userSchema = Yup.object({
  user: Yup.string().required("El usuario es obligatorio")
});

const handleSubmit = useForm({
  validationSchema: userSchema
});



</script>
