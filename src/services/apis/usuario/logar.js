import axios from "axios";
import { http } from "../../http";
import { useState } from "react";
export default async function logar(usuario) {
    return await axios.post(`${http}login`, usuario)
    .then((res) => res)
    .catch(erro => {
        console.error(erro.message)
    });
}