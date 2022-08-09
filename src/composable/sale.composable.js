import {  } from "module";
import { onMounted, ref } from "vue";
import { postSale } from "../services/api.client.service.js";
import { useUser } from "./user.composable.js";

export const useSale = () =>{
    const user = useUser();

    const coinSelected = ref({
        name: "",
        code: "",
        price: "",
    });

    const requestBody = ref ({
        user_id: "",
        action: "",
        crypto_code:"",
        crypto_amount:"",
        money: "",
        datetime:"",
    });

    onMounted (() => {
        requestBody.value.user_id = user.getUser.value;
        requestBody.value.action = "sale";
    });

    const makeSale = () => {
        requestBody.value.money = requestBody.value.crypto_amount * coinSelected.value.price.bid;
        requestBody.value.crypto_code = coinSelected.value.code;
        requestBody.value.datetime = new Date();
        postSale(requestBody.value);
        
    };

    

    return {
       requestBody,
       coinSelected,
       makeSale
    };
}