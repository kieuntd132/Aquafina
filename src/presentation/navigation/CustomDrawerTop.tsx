import { View, Text, Image, Pressable, StyleSheet, Modal } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import Header from '../component/header/Header';
import { ICON_AQUAFINA, ICON_AVATAR_LOGIN, ICON_CLOSE, ICON_HOME, ICON_LOGIN, ICON_LOGOUT, ICON_MENU1, ICON_MENU2, ICON_MENU3, ICON_MENU4, ICON_MENU5, ICON_MENU_1_FOCUS, ICON_MENU_2_FOCUS, ICON_MENU_3_FOCUS, ICON_MENU_4_FOCUS, ICON_MENU_5_FOCUS } from '../../../assets';
import { Colors } from '../resource/value/Colors';
import { AppContext } from '../shared-state/appContext/AppContext';
import DialogLogIn from '../component/dialog/DialogLogIn';
import DialogLogOut from '../component/dialog/DialogLogOut';
import { User } from '../../domain/entity/User';

type CustomDrawerContentProps = DrawerContentComponentProps
  & {
    imageAvatar?: string;
    textAccount?: string;
    imageSignOut?: string;
    imageSignIn?: string;
    textSignOut?: string;
    textSignIn?: string;
    checkLogin?: boolean;
  };

const CustomDrawerTop: React.FC<CustomDrawerContentProps> = (props) => {
  const { state, checkLogin, imageAvatar, textAccount, } = props;
  const { setLoggedIn, setDataUser } = React.useContext(AppContext);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisibleSignOut, setModalVisibleSignOut] = React.useState(false);
  const hiddenItems = ["StackNavigation"];
  const filteredRoutes = state.routes.filter(
    (route: any) => !hiddenItems.includes(route.name)
  );
  const hideModal = () => {
    setModalVisible(!modalVisible);
  };

  const hideModalSignOut = () => {
    setModalVisibleSignOut(!modalVisibleSignOut);
  };

  // const handleItemPress = (route: string) => {
  //   if (route === "Điểm Thưởng Xanh") {
  //     // Xử lý logic trước khi chuyển hướng đến màn hình hạn chế
  //     if (checkLogin) {
  //       props.navigation.navigate(route);
  //     } else {
  //       // setModalVisible(true);
  //     }
  //   } else if (route === "Bảng Xếp Hạng") {
  //     if (checkLogin) {
  //       props.navigation.navigate(route);
  //     } else {
  //       // setModalVisible(true);
  //     }
  //   } else {
  //     // Chuyển hướng đến các màn hình khác
  //     props.navigation.navigate(route);
  //   }
  // };
  const handleItemPress = (route: string) => {
    if (route === "Điểm Thưởng Xanh") {
      // Xử lý logic trước khi chuyển hướng đến màn hình hạn chế
      
        props.navigation.navigate(route);
      
      
    } else if (route === "Bảng Xếp Hạng") {
      
        props.navigation.navigate(route);
      
    } else {
      // Chuyển hướng đến các màn hình khác
      props.navigation.navigate(route);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <DialogLogIn
            onPress={() => {
              hideModal();
            }}
            onPressSignIn={() => {
              hideModal();
              props.navigation.navigate("SignIn");
            }}
          />
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleSignOut}
        >
          <DialogLogOut
            onPress={() => {
              setModalVisibleSignOut(!modalVisibleSignOut);
            }}
            onPressSignOut={() => {
              hideModalSignOut();
              setLoggedIn(false);
              setDataUser({} as User);
              props.navigation.closeDrawer();
            }}
            onPressCancel={() => {
              setModalVisibleSignOut(!modalVisibleSignOut);
            }}
          />
        </Modal>
        <Header
          checkLogin={checkLogin}
          iconCenter={ICON_AQUAFINA}
          iconLeft={ICON_CLOSE}
          iconRight={ICON_HOME}
          styleIconRight={{ opacity: 0 }}
          eventLeft={() => props.navigation.closeDrawer()}
          eventCenter={() => {
            props.navigation.navigate("Home");
          }}
        />
        <View style={{ marginStart: 16, marginVertical: 30 }}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 6 }}
            // source={{ uri: imageAvatar  }}
            source={{ uri: ICON_AVATAR_LOGIN  }}
          />
          <Text style={StyleSheet.flatten(styles.styleTextAccount)}>
            {/* {textAccount} */}
            Lê Quỳnh Ái Vân
          </Text>
        </View>
        {filteredRoutes.map((route: any, index: number) => (
          <Pressable
            key={route.key}
            onPress={() => handleItemPress(route.name)}
          >
            <DrawerItem
              label={route.name}
              labelStyle={{
                fontSize: 16,
                fontFamily: "SVN-Gotham",
                marginStart: -20,
              }}
              onPress={() => handleItemPress(route.name)}
              icon={({ focused, color, size }) => {
                let iconStart;
                if (route.name === "StackNavigation") {
                  iconStart = focused ? ICON_MENU_1_FOCUS : ICON_MENU1;
                } else if (route.name === "Thế Giới Xanh") {
                  iconStart = focused ? ICON_MENU_1_FOCUS : ICON_MENU1;
                } else if (route.name === "Quà Tặng Xanh") {
                  iconStart = focused ? ICON_MENU_2_FOCUS : ICON_MENU2;
                } else if (route.name === "Bản Đồ Xanh") {
                  iconStart = focused ? ICON_MENU_3_FOCUS : ICON_MENU3;
                } else if (route.name === "Điểm Thưởng Xanh") {
                  iconStart = focused ? ICON_MENU_4_FOCUS : ICON_MENU4;
                } else if (route.name === "Bảng Xếp Hạng") {
                  iconStart = focused ? ICON_MENU_5_FOCUS : ICON_MENU5;
                }
                return (
                  <Image
                    source={{ uri: iconStart }}
                    style={{ width: 24, height: 24 }}
                  />
                );
              }}
              activeTintColor={Colors.BLUE_TEXT}
              inactiveTintColor={Colors.GREY_5}
              focused={state.index === index}
              activeBackgroundColor="transparent"
              inactiveBackgroundColor="transparent"
            />
          </Pressable>
        ))}
      </DrawerContentScrollView>
      {/* {checkLogin ? ( */}
        <View style={{ borderTopWidth: 1, padding: 20, borderTopColor: '#DEE1E2' }}>
          <Pressable
            onPress={() => {
              setModalVisibleSignOut(true)
            }}
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Image
              style={{ width: 24, height: 24 }}
              source={{ uri: ICON_LOGOUT }}
            />
            <Text style={{ marginStart: 8, fontSize: 16, fontWeight: '700', fontFamily: 'SVN-Gotham', color: Colors.BLUE_KV }}>
              Sign out
            </Text>
          </Pressable>
        </View>
      {/* ) : (
        <View style={{ borderTopWidth: 1, padding: 20, borderTopColor: '#DEE1E2' }}>
          <Pressable
            onPress={() => {
              props.navigation.navigate("Login");
            }}
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Image
              style={{ width: 24, height: 24 }}
              source={{ uri: ICON_LOGIN }}
            />
            <Text style={{ marginStart: 8, fontSize: 16, fontWeight: '700', fontFamily: 'SVN-Gotham', color: Colors.BLUE_KV }}>
              Sign in
            </Text>
          </Pressable>
        </View>
      )} */}
    </View>
  )
}

export default CustomDrawerTop
const styles = StyleSheet.create({

  styleTextAccount: {
    fontSize: 14,
    fontFamily: 'SVN-Gotham',
    marginTop: 5,
    color: Colors.BLACK,
    marginBottom: 16,
  },

});