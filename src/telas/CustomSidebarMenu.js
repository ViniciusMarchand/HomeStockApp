import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ marginTop: 50, }}>
                <Text
                    style={styles.sideBarMenuTitulo}
                >HomeStockApp</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}  />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sideBarMenuTitulo: {
        // resizeMode: 'contain',
        width: '100%',
        height: 60,
        fontSize: 30,
        textAlign:'center',
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CustomSidebarMenu;