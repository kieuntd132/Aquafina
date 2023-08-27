import { StyleSheet, Modal, View, ImageBackground } from 'react-native'
import React, { useContext, useState } from 'react'
import Header from '../../component/header/Header'
import { BANNER_HOME_3, BA_1, ICON_AQUAFINA, ICON_LOGIN, ICON_MENU, W_2, W_3, W_4 } from '../../../../assets'
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
import { Colors } from '../../resource/value/Colors';
import TextView from '../../component/text/TextView';

type DrawerNavigationProps = DrawerNavigationProp<StackNavigation>;
type PropsType = NativeStackScreenProps<StackNavigation, "Thế Giới Xanh"> & {
  navigation: DrawerNavigationProps;
};
const GreenWorld: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn, setDataUser, setLoggedIn } =
    useContext(AppContext);
  const [modalVisibleSignOut, setModalVisibleSignOut] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
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

  const title1 =
    "Tiếp tục hành trình lan tỏa vị ngon của sự tinh khiết và không ngừng truyền cảm hứng về phong cách sống thời thượng. Năm 2022, Aquafina đánh dấu cột mốc mới tiên phong lan tỏa cảm cảm hứng  sống xanh bền vững (Sustainability), thời trang hơn và ý nghĩa hơn đến với giới mộ điệu yêu thích thời trang.\n\nHình ảnh vòng tròn lan tỏa cùng mũi tên mang tính biểu tượng với ý nghĩa cùng Aquafina lan tỏa những hành động tích cực đến môi trường và truyền cảm hứng về phong cách Xanh bền vững.";

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



  const goToScreenDescriptionWarning = () => {
    navigation.navigate("WarningScreen");
    scrollToTop();
  };
  const hideModalSignOut = () => {
    setModalVisibleSignOut(!modalVisibleSignOut);
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
      ></Modal>
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
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}>
        <ImageView uri={BANNER_HOME_3} imageStyle={{ height: 700 }} />
        <ImageBackground
          source={{ uri: BA_1 }}
          style={{
            width: "101%",
            marginStart: -4,
            paddingBottom: 8,
            height: 200,
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              backgroundColor: Colors.BACKGROUND_1,
            }}
          >
            <TextView title="Aquafina" styleContainer={{ marginTop: 10 }} />
            <TextView
              title={title1}
              textStyle={{
                color: Colors.BLACK,
                textTransform: "none",
                fontSize: 13,
                fontFamily: "SVN-Gotham",
                fontWeight: '400',
                lineHeight: 15.6,
              }}
            />
          </View>
        </ImageBackground>

        <ImageView
          uri={W_2}
          imageStyle={{ height: 700 }}
          viewStyle={{ marginTop: -4 }}
        />
        <TextView
          title="Không chỉ lan tỏa cảm hứng sống Xanh, Aquafina sẽ cùng bạn hành động để mang đến những tác động tích cực đến môi trường.  Lần đầu tiên tự hào giới thiệu, Trạm Tái Sinh của Aquafina – Nơi tái sinh vòng đời mới cho chai nhựa."
          textStyle={{
            color: Colors.BLACK,
            textTransform: "none",
            fontSize: 13,
            fontFamily: "SVN-Gotham",
            fontWeight: '400',
            lineHeight: 15.6,
          }}
          styleContainer={{
            backgroundColor: Colors.BACKGROUND_2,
            padding: 20,
          }}
        />
        <ImageView uri={W_3} imageStyle={{ height: 600 }} />
        <ImageView uri={W_4} imageStyle={{ height: 600 }} />
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

export default GreenWorld

const styles = StyleSheet.create({})