import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Header from '../component/header/Header';
import { ICON_AQUAFINA, ICON_AVATAR_LOGIN, ICON_CLOSE, ICON_HOME, ICON_LOGOUT } from '../../../assets';
import { Colors } from '../resource/value/Colors';

type CustomDrawerContentProps = DrawerContentComponentProps
  & {
    imageAvatar?: string;
    textAccount?: string;
    imageSignOut?: string;
    imageSignIn?: string;
    textSignOut?: string;
    textSignIn?: string;
  };

const CustomDrawerTop: React.FC<CustomDrawerContentProps> = (props) => {
  const { state } = props;
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <Header
          iconCenter={ICON_AQUAFINA}
          iconLeft={ICON_CLOSE}
          iconRight={ICON_HOME}
          styleIconRight={{ opacity: 0 }}
          eventLeft={() => props.navigation.closeDrawer()}
        />
        <View style={{marginStart:16, marginVertical:30}}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 6 }}
            source={{ uri: ICON_AVATAR_LOGIN }}
          />
          <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 6 }}>Nguyễn Văn A</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{borderTopWidth:1, padding:20, borderTopColor:'#DEE1E2'}}>
      <Pressable
          onPress={() => {
            props.navigation.navigate("Login");
          }}
          style={{flexDirection:'row', alignItems:'center'}}
        >
          <Image
            style={{ width: 24, height: 24 }}
            source={{ uri: ICON_LOGOUT }}
          />
          <Text style={{marginStart:8, fontSize:16, fontWeight:'700', fontFamily:'SVN-Gotham', color:Colors.BLUE_KV}}>
            Sign out
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default CustomDrawerTop