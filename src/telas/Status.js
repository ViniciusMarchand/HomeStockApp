import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StatutScreen = () => {
    const teste = async () => {
        try {
           console.log(JSON.parse(await AsyncStorage.getItem('token'))); 
        } catch (error) {
            console.error('Erro ao pegar token')
        }
    }
    teste();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>StatutScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize:25,
    },
});

export default StatutScreen;