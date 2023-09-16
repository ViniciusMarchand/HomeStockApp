import axios from  'axios';
async function realizarCadastro(usuario){

    const response = await axios.post('http://localhost:3000/usuarios', usuario)
    console.log(response.data)
}
export default realizarCadastro