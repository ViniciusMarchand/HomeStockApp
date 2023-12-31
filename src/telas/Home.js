import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen!</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
});

export default HomeScreen;