import axios from  'axios';
import { http } from '../../http';
async function realizarCadastro(usuario){
    const response = await axios.post(`${http}usuarios`, usuario)
}
export default realizarCadastro