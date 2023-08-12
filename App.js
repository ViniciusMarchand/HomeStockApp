import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/telas/Home';
import StatutScreen from './src/telas/teste'
import CustomSidebarMenu from './src/telas/CustomSidebarMenu';

const Drawer = createDrawerNavigator();

const App = () => {
    
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomSidebarMenu {...props} />}
            >
                <Drawer.Screen name='Home' component={HomeScreen} />
                <Drawer.Screen name='Status' component={StatutScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;