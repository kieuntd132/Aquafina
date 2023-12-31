import { StyleSheet, ScrollView, View, Modal } from 'react-native'
import React, { useContext, useRef, useState, useEffect } from 'react'
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
import { dataRating } from '../../../data/dataRating'
import { AppContext } from '../../shared-state/appContext/AppContext'
import Rating from '../../component/rating/Rating'
import { dataRatingUser } from '../../../data/dataRatingUser'
import Carousel from '../../component/carousel/Carousel'
import DialogStatistical from '../../component/dialog/DialogStatistical'
import DialogLogIn from '../../component/dialog/DialogLogIn'
import DialogLogOut from '../../component/dialog/DialogLogOut'
import { User } from '../../../domain/entity/User'


type DrawerNavigationProps = DrawerNavigationProp<StackNavigation>;
type PropsType = NativeStackScreenProps<StackNavigation, "Home"> & {
  navigation: DrawerNavigationProps;
};

const Home: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn, setDataUser, setLoggedIn, key, dataUser } =
    useContext(AppContext);
  const [modalVisibleSignOut, setModalVisibleSignOut] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleStatistical, setModalVisibleStatistical] = useState(false);
  const showDrawer = () => {
    navigation.openDrawer();
  };
  const goLogin = () => {
    if (isLoggedIn) {
      setModalVisibleSignOut(true);
    } else {
      navigation.navigate("Login");
    }
  };
  const goHome = () => {
    navigation.navigate("Home");
    scrollToTop();
  };

  const scrollViewRef = useRef<ScrollView>(null);
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
      setModalVisible(true);
    }
  };

  const goToScreenPoints = () => {
    if (isLoggedIn) {
      navigation.navigate("Điểm Thưởng Xanh");
      scrollToTop();
    } else {
      setModalVisible(true);
    }
  };
  const hideModalSignOut = () => {
    setModalVisibleSignOut(!modalVisibleSignOut);
  };
  const goToScreenDescriptionWarning = () => {
    navigation.navigate("WarningScreen");
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
  useEffect(() => {
    if (
      (isLoggedIn &&
        dataUser &&
        dataUser.statistical &&
        dataUser.statistical.aquafina) ||
      (dataUser.statistical?.other == 0 &&
        dataUser.statistical?.aquafina == 0) ||
      dataUser.point == 0
    ) {
      setModalVisibleStatistical(true);
    }
  }, [isLoggedIn, dataUser]);

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleStatistical}
      >
        <DialogStatistical
          onPress={() => {
            setModalVisibleStatistical(!modalVisibleStatistical);
          }}
          sumStatistical={dataUser?.point}
          aquafina={dataUser?.statistical?.aquafina}
          other={dataUser?.statistical?.other}
        />
      </Modal>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <DialogLogIn
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          onPressSignIn={() => {
            setModalVisible(!modalVisible);
            props.navigation.navigate("Login");
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
            navigation.navigate("Home");
          }}
          onPressCancel={() => {
            setModalVisibleSignOut(!modalVisibleSignOut);
          }}
        />
      </Modal>
      <ScrollView style={{ marginBottom: 55 }}
        showsVerticalScrollIndicator={false} ref={scrollViewRef}>
        <SlideBanner
          data={dataBanner}
          onClick={handleClick}
          checkLogin={isLoggedIn}
        />
        <SumBottle sumAqua={200000} sumOther={100000} />
        <Rating
          checkLogin={isLoggedIn}
          data={dataRating}
          dataUser={dataRatingUser}
          type={true}
          onPressSignIn={() => {
            navigation.navigate("Login");
          }}
          onPress={() => {
            navigation.navigate("Bảng Xếp Hạng");
          }}
        />
        <Carousel onPress={goToScreenPresent} check={false} />
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