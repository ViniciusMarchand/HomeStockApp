export default function validacaoCadastro(nome, email, senha, senhaConfirmacao){
    if(senha != senhaConfirmacao){
        console.log('Senhas diferentes!')
        return false;
    }
    if(nome == undefined || email == undefined || senha == undefined){
        console.log('Campo vazio!')

        return false;
    }

    if(nome.trim() == '' || email.trim() == '' || senha == ''){
        console.log(nome.trim())

        return false;
    }
    return true
}

