import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import Header from '../../component/header/Header'
import { ICON_AQUAFINA, ICON_LOGIN, ICON_MENU } from '../../../../assets'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigation } from '../../navigation/StackNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native-gesture-handler';
import { AppContext } from '../../shared-state/appContext/AppContext';
import FooterMenu from '../../component/footer/FooterMenu';

type DrawerNavigationProps = DrawerNavigationProp<StackNavigation>;
type PropsType = NativeStackScreenProps<StackNavigation, "Quà Tặng Xanh"> & {
  navigation: DrawerNavigationProps;
};
const GreenGift: React.FC<PropsType> = (props) => {
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
    // if (isLoggedIn) {
      navigation.navigate("Bảng Xếp Hạng");
      scrollToTop();
    // } else {
      // setModalVisible(true);
    // }
  };

  const goToScreenPoints = () => {
    // if (isLoggedIn) {
      navigation.navigate("Điểm Thưởng Xanh");
      scrollToTop();
    // } else {
      // setModalVisible(true);
    // }
  };
  
  const goToScreenDescriptionWarning = () => {
    // navigation.navigate("WarningDescriptionScreen");
    scrollToTop();
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
        <Text style={{marginVertical:100, textAlign:'center'}}>GreenGift</Text>
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

export default GreenGift

const styles = StyleSheet.create({})