import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
const CustomDrawerTop = (props: any) => {
    return (
       <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
       </DrawerContentScrollView>
    )
}

export default CustomDrawerTop