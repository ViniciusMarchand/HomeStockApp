import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/telas/Produtos';
import StatutScreen from './src/telas/Status'
import CustomSidebarMenu from './src/telas/CustomSidebarMenu';
import Login from './src/telas/Login';
import Cadastro from './src/telas/Cadastro';
import { useState } from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext, AuthProvider } from './src/contexts/AuthContext';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
    const [estaLogado, setEstaLogado] = useState(true);

    if(!estaLogado){
        return(
            <>
            <NavigationContainer>
                <StatusBar/>
                <Stack.Navigator>
                    <Stack.Screen 
                    name='Login' 
                    component={Login}  
                    options={{headerShown:false}}
                    initialParams={{setEstaLogado}}
                    />
                    <Stack.Screen name='Cadastro' component={Cadastro}/>
                </Stack.Navigator>
            </NavigationContainer>
            </>
        );
    }else{
        return (
            <NavigationContainer>
                <StatusBar/>
                <Drawer.Navigator
                    drawerContent={(props) => <CustomSidebarMenu {...props} />}
                >
                    <Drawer.Screen name='Produtos' component={HomeScreen} />
                    <Drawer.Screen name='Status' component={StatutScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;