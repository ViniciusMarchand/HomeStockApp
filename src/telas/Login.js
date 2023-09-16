import { TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function Login({navigation}){

    return(
        <>
            <View style={styles.centralizar}>
                <View style={styles.loginBlock}>
                <Text style={styles.nomeApp}>HomeStockApp</Text>
                    <Text style={styles.paginaTitulo}>Entrar</Text>
                    <View style={styles.viewInput}>
                        <Text style={styles.labels}>Email:</Text>
                        <TextInput style={styles.inputs} placeholder="Insira seu email aqui" keyboardType="email-address"/>
                    </View>
                    <View style={styles.viewInput}>
                        <Text style={styles.labels}>Senha:</Text>
                        <TextInput style={styles.inputs} placeholder="Insira sua senha aqui" secureTextEntry={true}/>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.botaoCadastro}><Text>Ainda não tem uma conta? Clique aqui</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botaoConfirmar}><Text style={styles.botaoConfirmarTexto}>CONFIRMAR</Text></TouchableOpacity>
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
        justifyContent:'center',
    },
    loginBlock:{
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
    botaoCadastro:{
        marginTop:20
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