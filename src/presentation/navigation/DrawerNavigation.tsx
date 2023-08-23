import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import GreenWorld from '../container/Home/GreenWorld';
import GreenGift from '../container/Home/GreenGift';
import GreenMap from '../container/Home/GreenMap';
import GreenBonusPoint from '../container/Home/GreenBonusPoint';
import Charts from '../container/Home/Charts';
import CustomDrawerTop from './CustomDrawerTop';
import { ICON_MENU1, ICON_MENU2, ICON_MENU3, ICON_MENU4, ICON_MENU5, ICON_MENU_1_FOCUS, ICON_MENU_2_FOCUS, ICON_MENU_3_FOCUS, ICON_MENU_4_FOCUS, ICON_MENU_5_FOCUS } from '../../../assets';
import { Image, StyleSheet } from 'react-native';
import { Colors } from '../resource/value/Colors';
import StackNavigation from './StackNavigation';

type DrawerParamList = {
  "Thế Giới Xanh": undefined;
  "Quà Tặng Xanh": undefined;
  "Bản Đồ Xanh": undefined;
  "Điểm Thưởng Xanh": undefined;
  "Bảng Xếp Hạng": undefined;
  StackNavigation: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigation: React.FC = () => {
  return (
      <Drawer.Navigator drawerContent={(props) => (<CustomDrawerTop{...props}/>)} 
      initialRouteName="StackNavigation"
      screenOptions={({ route }) => ({
        headerShown: false,
        drawerIcon: ({ focused, color, size }) => {
          let iconStart;
          if (route.name === "StackNavigation") {
            iconStart = focused ? ICON_MENU_1_FOCUS : ICON_MENU1;
          }else if (route.name === "Thế Giới Xanh") {
            iconStart = focused ? ICON_MENU_1_FOCUS : ICON_MENU1;
          }else if (route.name === "Quà Tặng Xanh") {
            iconStart = focused ? ICON_MENU_2_FOCUS : ICON_MENU2;
          } else if (route.name === "Bản Đồ Xanh") {
            iconStart = focused ? ICON_MENU_3_FOCUS : ICON_MENU3;
          } else if (route.name === "Điểm Thưởng Xanh") {
            iconStart = focused ? ICON_MENU_4_FOCUS : ICON_MENU4;
          } else if (route.name === "Bảng Xếp Hạng") {
            iconStart = focused ? ICON_MENU_5_FOCUS : ICON_MENU5;
          }
          return (
            <Image source={{ uri: iconStart }} style={{ width: 24, height: 24 }} />
          );
        },
        drawerLabelStyle: styles.drawerLabel,
        drawerActiveTintColor: Colors.BLUE_TEXT,
        drawerInactiveTintColor: Colors.GREY_5,
        drawerActiveBackgroundColor: Colors.WHITE
      })}>
        <Drawer.Screen name="Thế Giới Xanh" component={GreenWorld} />
        <Drawer.Screen name="Quà Tặng Xanh" component={GreenGift} />
        <Drawer.Screen name="Bản Đồ Xanh" component={GreenMap} />
        <Drawer.Screen name="Điểm Thưởng Xanh" component={GreenBonusPoint} />
        <Drawer.Screen name="Bảng Xếp Hạng" component={Charts} />
        <Drawer.Screen
          name="StackNavigation"
          component={StackNavigation}
          options={{
            drawerLabel: () => null,
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer.Navigator>
  );
};

export default DrawerNavigation;
const styles = StyleSheet.create({
  drawerLabel: {
    fontSize: 16,
    fontFamily: "SVN-Gotham",
    marginStart: -20,
    marginVertical: 5,
  }
});