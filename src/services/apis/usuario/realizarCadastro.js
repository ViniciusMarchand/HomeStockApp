import axios from  'axios';
async function realizarCadastro(usuario){
    const response = await axios.post('http://localhost:3000/usuarios', usuario)
}
export default realizarCadastro