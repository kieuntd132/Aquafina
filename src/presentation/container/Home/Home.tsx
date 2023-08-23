import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../component/header/Header'
import { ICON_AQUAFINA, ICON_HOME, ICON_LOGIN, ICON_MENU } from '../../../../assets'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackNavigation } from '../../navigation/StackNavigation'
import { DrawerNavigationProp } from '@react-navigation/drawer'

type DrawerNavigationProps = DrawerNavigationProp<StackNavigation>;
type PropsType = NativeStackScreenProps<StackNavigation, "Home"> & {
  navigation: DrawerNavigationProps;
};

const Home: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const showDrawerNavigator = () => {
    navigation.openDrawer();
  };
  const goLogin = () => {
      navigation.navigate("Login");
  };
  return (
    <View>
      <Header
        iconCenter={ICON_AQUAFINA}
        iconLeft={ICON_MENU}
        iconRight={ICON_LOGIN}
        eventLeft={showDrawerNavigator}
        eventRight={goLogin}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})