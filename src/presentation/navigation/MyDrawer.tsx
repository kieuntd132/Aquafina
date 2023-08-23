import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import GreenWorld from '../container/Home/GreenWorld';
import GreenGift from '../container/Home/GreenGift';

type DrawerParamList = {
  "Thế Giới Xanh": undefined;
  "Quà Tặng Xanh": undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation: React.FC = () => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Thế Giới Xanh" component={GreenWorld} />
        <Drawer.Screen name="Quà Tặng Xanh" component={GreenGift} />
      </Drawer.Navigator>
  );
};

export default DrawerNavigation;