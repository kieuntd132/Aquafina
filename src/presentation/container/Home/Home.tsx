import { StyleSheet, ScrollView, View } from 'react-native'
import React, { useContext } from 'react'
import Header from '../../component/header/Header'
import { ICON_AQUAFINA, ICON_LOGIN, ICON_MENU, IMG_MAP } from '../../../../assets'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackNavigation } from '../../navigation/StackNavigation'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import FooterMenu from '../../component/footer/FooterMenu'
import SlideBanner from '../../component/slideBanner/SlideBanner'
import SumBottle from '../../component/sumBottle/SumBottle'
import Address from '../../component/address/Address'
import { dataBanner } from '../../../data/dataBanner'
import { AppContext } from '../../shared-state/appContext/AppContext'

type DrawerNavigationProps = DrawerNavigationProp<StackNavigation>;
type PropsType = NativeStackScreenProps<StackNavigation, "Home"> & {
  navigation: DrawerNavigationProps;
};

const Home: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn, setDataUser, setLoggedIn, key, dataUser } =
    useContext(AppContext);
  const showDrawer = () => {
    navigation.openDrawer();
  };
  const goLogin = () => {
    navigation.navigate("Login");
  };
  const goHome = () => {
    navigation.navigate("Home");
    scrollToTop();
  };

  const scrollViewRef = React.useRef<ScrollView>(null);
  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };
  const goToScreenPresent = () => {
    navigation.navigate("Quà Tặng Xanh");
    scrollToTop();
  };

  const goToScreenMap = () => {
    navigation.navigate("Bản Đồ Xanh");
    scrollToTop();
  };

  const goToScreenGreenWorld = () => {
    navigation.navigate("Thế Giới Xanh");
    scrollToTop();
  };

  const goToScreenChart = () => {
    if (isLoggedIn) {
      navigation.navigate("Bảng Xếp Hạng");
      scrollToTop();
    } else {
      // setModalVisible(true);
    }
  };

  const goToScreenPoints = () => {
    if (isLoggedIn) {
      navigation.navigate("Điểm Thưởng Xanh");
      scrollToTop();
    } else {
      // setModalVisible(true);
    }
  };

  const goToScreenDescriptionWarning = () => {
    // navigation.navigate("WarningDescriptionScreen");
    scrollToTop();
  };
  const handleClick = (screen: any) => {
    console.log('Clicked on screen:', screen);
    switch (screen) {
      case "Thế Giới Xanh":
        navigation.navigate("Thế Giới Xanh");
        break;
      case "Quà Tặng Xanh":
        navigation.navigate("Quà Tặng Xanh");
        break;
      default:
        break;
    }
  };
  return (
    <View>
      <Header
        iconCenter={ICON_AQUAFINA}
        iconLeft={ICON_MENU}
        iconRight={ICON_LOGIN}
        eventLeft={showDrawer}
        eventRight={goLogin}
        eventCenter={goHome}
        checkLogin={true}
      />
      <ScrollView style={{ marginBottom: 55 }}
        showsVerticalScrollIndicator={false} ref={scrollViewRef}>
        <SlideBanner
          data={dataBanner}
          onClick={handleClick}
          checkLogin={isLoggedIn}
        />
        <SumBottle sumAqua={200000} sumOther={100000} />
        <Address onPress={goToScreenMap} uri={IMG_MAP} checkType={false} />
        <FooterMenu
          onClick1={goToScreenGreenWorld}
          onClick2={goToScreenPresent}
          onClick3={goToScreenMap}
          onClick4={goToScreenPoints}
          onClick5={goToScreenChart}
          onClick6={goToScreenDescriptionWarning}
        />
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})