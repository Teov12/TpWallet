import {computed, ref} from "vue";
import {useRouter} from "vue-router";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import Swal from "sweetalert2";

import {useCripto} from "./cripto.composable.js"
import { getTransactions, postTransactions } from "../services/api.client.service.js";
import { useUser } from "./user.composable.js";

import { historyStore } from "../stores/history.store.js"

export const useTransactions = () => {
  const user = useUser();
  const router = useRouter();
  const {setAllPrices} = useCripto();
  const store = historyStore();

  const getAllTransactions = async () => {
    const transactions = await getTransactions(user.getUser.value);
    store.setAllTransactions(transactions);
  };

  const getPurchases = computed(() =>{
    return store.getHistoryPurchase;
  })

  //FORM

  const schema = Yup.object({
    crypto_code: Yup.object().required("Seleccione una criptomoneda"),
    crypto_amount: Yup.number().required("Ingrese la cantidad a comprar").positive("Debe ser mayor a 0")
  })

  const {handleSubmit} = useForm({validationSchema: schema});

  const requestBody = ref ({
    user_id: user.getUser.value,
    action: "",
    crypto_code:"",
    crypto_amount:"",
    money: "",
    datetime:"",
});


const setPurchase = handleSubmit(async(values) => {
    requestBody.value.money = requestBody.value.crypto_amount * values.crypto_code.price.ask;
    requestBody.value.crypto_code = values.crypto_code.code;
    requestBody.value.datetime = new Date();
    requestBody.value.action = "purchase";
    requestBody.value.crypto_amount = values.crypto_amount;
    const status = await postTransactions(requestBody.value);
    if (status == 201) Swal.fire("Compra efectuada", undefined, "success").then(() => router.push ({path: "/home"}));
  });

  return { setPurchase, getAllTransactions, getPurchases };
};
