import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
const Produtos = (props) => {
    const [listaProdutos, setListaProdutos] = useState([['Sabão em pó', 'OMO']]);
    return (
        <>  
            <ScrollView> 
                <View style={styles.tableRow}>
                    <View style={styles.innerRow}>
                        <Text style={styles.text1}>Pizza |</Text>
                        <Text style={styles.text2}> Sadia</Text>
                    </View>
                    <View style={styles.innerRow}>
                        <Ionicons name="pencil" color={'#000000'} size={23} style={styles.toolIcon}/>
                        <Ionicons name="trash-sharp" color={'#000000'} size={23} style={styles.toolIcon}/>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        fontSize: 20,
    },
    text2: {
        fontSize: 20,
    },
    tableRow: {
        display: 'flex',
        flexDirection:'row',
        width:'100%',
        paddingHorizontal:20,
        marginTop:5,
        backgroundColor:'#ffffff',
        marginHorizontal: 5,
        height:50,
        alignItems: 'center',
        borderRadius:5,
        justifyContent:'space-between'
    },
    innerRow: {
        display:'flex',
        flexDirection:'row',
    },

});

export default Produtos;