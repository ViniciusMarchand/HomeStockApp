import axios from "axios";
import { http } from "../../http";
import { useState } from "react";
export default async function logar(usuario) {
    console.log('entrou')
    return await axios.post(`${http}login`, usuario)
    .then((res) => res)
    .catch(erro => erro.message);
}