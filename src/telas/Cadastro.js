import { TextInput, TouchableOpacity, View, Text, StyleSheet, Alert } from "react-native";
import validacaoCadastro from "../forms/validacaoCadastro";
import { useState } from "react";
import realizarCadastro from "../services/apis/usuario/realizarCadastro"
import axios from "axios";
import { http } from "../services/http";
export default function Cadastro({navigation}){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmada, setSenhaConfirmada] = useState('');

    const showAlert = () => {
        Alert.alert(
          'Cadastro Inválido!',
          'Verifique se você preencheu os campos adequadamente.',
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ],
          { cancelable: false }
        );
      };

      const handleSubmit = async (usuario)=> { 
        try {
            const response = await axios.post(`${http}usuarios`, usuario)
            console.log(response.data)
        } catch (error) {
            console.error(error.message + 'dadw');
        }
      }
    return(
            <>
                <View style={styles.centralizar}>
                    <View style={styles.cadastroBlock}>
                    <Text style={styles.nomeApp}>HomeStockApp</Text>
                        <Text style={styles.paginaTitulo}>Cadastrar</Text>
                        <View style={styles.viewInput}>
                            <Text style={styles.labels}>Nome:</Text>
                            <TextInput style={styles.inputs} placeholder="Insira seu nome aqui" keyboardType="email-address" onChangeText={(inputValue) => setNome(inputValue)} value={nome}/>
                        </View>
                        <View style={styles.viewInput}>
                            <Text style={styles.labels}>Email:</Text>
                            <TextInput style={styles.inputs} placeholder="Insira seu email aqui" keyboardType="email-address" onChangeText={(inputValue) => setEmail(inputValue)} value={email}/>
                        </View>
                        <View style={styles.viewInput}>
                            <Text style={styles.labels}>Senha:</Text>
                            <TextInput style={styles.inputs} placeholder="Insira sua senha aqui" secureTextEntry={true} onChangeText={(inputValue) => setSenha(inputValue)} value={senha}/>
                        </View>
                        <View style={styles.viewInput}>
                            <Text style={styles.labels}>Confirme sua senha:</Text>
                            <TextInput style={styles.inputs} placeholder="Confirme sua senha aqui" secureTextEntry={true} onChangeText={(inputValue) => setSenhaConfirmada(inputValue)} value={senhaConfirmada}/>
                        </View>
                        <TouchableOpacity style={styles.botaoConfirmar}><Text style={styles.botaoConfirmarTexto}onPress={ async() => {
                            setSenhaConfirmada('');
                            setSenha('');
                            setNome('');
                            setEmail('');
                            if(validacaoCadastro(nome, email, senha, senhaConfirmada)){

                                const novoUsuario = {
                                    nome: nome.trim(),
                                    email:email.trim(),
                                    senha:senha.trim()
                                }
                                handleSubmit(novoUsuario)
                                navigation.navigate('Login')
                            }else{
                                showAlert();
                            }
                            
                        }
                            }>CONFIRMAR</Text></TouchableOpacity>
                    </View>
                </View>
            </>
    );
}

const styles = StyleSheet.create({
    centralizar:{
        width:'100%',
        height:'100%',
        alignItems: "center",
        marginTop:100,
    },
    cadastroBlock:{
        width:350,
        height:400,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'

    },
    paginaTitulo:{
        fontSize:30,
    },
    nomeApp:{
        fontSize:40,
        marginBottom:30,
    },
    inputs:{
        height:35,
        width:290,
        fontSize:20,
        textAlign:'center',
    },
    viewInput:{
        borderBottomWidth:1,
        marginTop:27
    },
    botaoConfirmar:{
        marginTop:50,
        width:290,
        height:50,
        display:'flex',
        alignContent:'center',
        justifyContent:'center',
        textAlign:'center',
        backgroundColor:'#19BEF0'
    },
    botaoConfirmarTexto:{
        textAlign:'center',
        color:'#fdfdfd',
        fontWeight:'bold'
    },

})