import { StyleSheet, Text, View, Modal, Pressable, Dimensions } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import Header from '../../component/header/Header'
import { ICON_AQUAFINA, ICON_LOGIN, ICON_MENU, MAP_8, MAP_9, W_2 } from '../../../../assets'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigation } from '../../navigation/StackNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native-gesture-handler';
import { AppContext } from '../../shared-state/appContext/AppContext';
import FooterMenu from '../../component/footer/FooterMenu';
import DialogLogIn from '../../component/dialog/DialogLogIn';
import DialogLogOut from '../../component/dialog/DialogLogOut';
import { User } from '../../../domain/entity/User';
import ImageView from '../../component/image/ImageView';

type DrawerNavigationProps = DrawerNavigationProp<StackNavigation>;
type PropsType = NativeStackScreenProps<StackNavigation, "Bản Đồ Xanh"> & {
  navigation: DrawerNavigationProps;
};
const GreenMap: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn, setDataUser, setLoggedIn, key, dataUser } =
    useContext(AppContext);
  const [modalVisibleSignOut, setModalVisibleSignOut] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }, []);
  const showDrawer = () => {
    navigation.openDrawer();
  };
  const goLogin = () => {
    if (isLoggedIn) {
      navigation.navigate("Login");
      scrollToTop();
    } else {
      setModalVisible(true);
    }
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

  // const goToScreenChart = () => {
  //   // if (isLoggedIn) {
  //   navigation.navigate("Bảng Xếp Hạng");
  //   scrollToTop();
  //   // } else {
  //   // setModalVisible(true);
  //   // }
  // };

  // const goToScreenPoints = () => {
  //   // if (isLoggedIn) {
  //   navigation.navigate("Điểm Thưởng Xanh");
  //   scrollToTop();
  //   // } else {
  //   // setModalVisible(true);
  //   // }
  // };

  const goToScreenDescriptionWarning = () => {
    navigation.navigate("WarningScreen");
    scrollToTop();
  };
  return (
    <View style={{ paddingBottom: 56 }}>
      <Header
        iconCenter={ICON_AQUAFINA}
        iconLeft={ICON_MENU}
        iconRight={ICON_LOGIN}
        eventLeft={showDrawer}
        eventRight={goLogin}
        eventCenter={goHome}
        checkLogin={true}
      />
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
            setModalVisibleSignOut(!modalVisibleSignOut);
            setLoggedIn(false);
            setDataUser({} as User);
            navigation.navigate("Home");
          }}
          onPressCancel={() => {
            setModalVisibleSignOut(!modalVisibleSignOut);
          }}
        />
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}>
        <Pressable
          onPress={() => {
            // navigation.navigate("StackRVM");
          }}
        >
          <ImageView uri={W_2} imageStyle={{ height: 700 }} />
        </Pressable>
        <ImageView uri={MAP_8} imageStyle={{ height: 700 }} />
        <ImageView
          uri={MAP_9}
          imageStyle={{
            height: 600,
            width: Dimensions.get("window").width * 1.2,
            // resizeMode: "contain",
            resizeMode: "stretch",
          }}
          viewStyle={{ marginStart: 6 }}
        />
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

export default GreenMap

const styles = StyleSheet.create({})