import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import Header from '../../component/header/Header'
import { ICON_AQUAFINA, ICON_LOGIN, ICON_MENU } from '../../../../assets'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackNavigation } from '../../navigation/StackNavigation'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import FooterMenu from '../../component/footer/FooterMenu'
import SlideBanner from '../../component/slideBanner/SlideBanner'
import SumBottle from '../../component/sumBottle/SumBottle'

type DrawerNavigationProps = DrawerNavigationProp<StackNavigation>;
type PropsType = NativeStackScreenProps<StackNavigation, "Home"> & {
  navigation: DrawerNavigationProps;
};

const Home: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const showDrawer = () => {
    navigation.openDrawer();
  };
  const goLogin = () => {
    navigation.navigate("Login");
  };
  const goHome = () => {
    navigation.navigate("Home");
  };

  const scrollViewRef = React.useRef<ScrollView>(null);
  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };
  const goToScreenHome = () => {
    navigation.navigate("Home");
    scrollToTop();
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
    navigation.navigate("Bảng Xếp Hạng");
    scrollToTop();
  };

  const goToScreenPoints = () => {
    navigation.navigate("Điểm Thưởng Xanh");
    scrollToTop();
  };

  const goToScreenDescriptionWarning = () => {
    // navigation.navigate("WarningDescriptionScreen");
    scrollToTop();
  };
  const data = [
    {
      key: '1',
      image: 'https://firebasestorage.googleapis.com/v0/b/aquafina-27d2b.appspot.com/o/banner_1.png?alt=media&token=ad6bcee7-2a6b-4cea-80a8-c039d43ac582',
      screen: 'Screen1',
    },
    {
      key: '2',
      image: 'https://firebasestorage.googleapis.com/v0/b/aquafina-27d2b.appspot.com/o/banner_2.png?alt=media&token=c40617b0-00f7-4e78-bd99-283b8e463bec',
      screen: 'Screen2',
    },
    {
      key: '3',
      image: 'https://firebasestorage.googleapis.com/v0/b/aquafina-27d2b.appspot.com/o/banner_3.png?alt=media&token=526296a5-f3df-494a-87d8-62c4153b2e6f',
      screen: 'Screen3',
    },
    {
      key: '4',
      image: 'https://firebasestorage.googleapis.com/v0/b/aquafina-27d2b.appspot.com/o/banner_4.png?alt=media&token=eac8f639-9e14-4822-941c-f43cc7e518f4',
      screen: 'Screen4',
    },
  ];
  const handleClick = (screen: string) => {
    console.log('Clicked on screen:', screen);
    navigation.navigate("Thế Giới Xanh");
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
      />
      <ScrollView style={{ marginBottom: 55 }}
        showsVerticalScrollIndicator={false} ref={scrollViewRef}>
        <SlideBanner
          data={data}
          onClick={handleClick}
        />
        <SumBottle sumAqua={200000} sumOther={100000} />
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