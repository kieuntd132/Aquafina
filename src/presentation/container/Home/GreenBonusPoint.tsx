import { StyleSheet, Text, View, Modal, Image, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../../component/header/Header'
import { AQUA_BG, BG_POINT, CAMERA, ICON_AQUAFINA, ICON_AVATAR_LOGIN, ICON_LOGIN, ICON_MENU } from '../../../../assets'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigation } from '../../navigation/StackNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { AppContext } from '../../shared-state/appContext/AppContext';
import FooterMenu from '../../component/footer/FooterMenu';
import { User } from '../../../domain/entity/User';
import DialogLogOut from '../../component/dialog/DialogLogOut';
import TextView from '../../component/text/TextView';
import { Colors } from '../../resource/value/Colors';
import ImageView from '../../component/image/ImageView';

type DrawerNavigationProps = DrawerNavigationProp<StackNavigation>;
type PropsType = NativeStackScreenProps<StackNavigation, "Điểm Thưởng Xanh"> & {
  navigation: DrawerNavigationProps;
};
const GreenBonusPoint: React.FC<PropsType> = (props) => {
  const { navigation } = props;
  const { isLoggedIn, setDataUser, setLoggedIn, key, dataUser } =
    useContext(AppContext);
  const [modalVisibleSignOut, setModalVisibleSignOut] = useState(false);
  const showDrawer = () => {
    navigation.openDrawer();
  };
  const goLogin = () => {
    if (isLoggedIn) {
      navigation.navigate("Login");
      scrollToTop();
    } else {
      setModalVisibleSignOut(true);
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
  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }, []);
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


  const [name, setName] = useState<string | undefined>("Lê Quỳnh Ái Vân");
  const [phone, setPhone] = useState<string | undefined>("0943975890");
  const [point, setPoint] = useState<string | undefined>("150");

  // useEffect(() => {
  //   setName(dataUser.name);
  //   setPhone(dataUser.phone);
  //   setPoint(dataUser.point + "");
  // }, [dataUser]);


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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <TextView
            title="Thông tin người chơi"
            textStyle={{
              textTransform: "none",
              fontSize: 18,
              marginBottom: 10,
            }}
          />
          <Image
            source={{ uri: dataUser.avatar ? dataUser.avatar : ICON_AVATAR_LOGIN }}
            style={{ width: 94, height: 94, borderRadius: 50 }}
          />

          <Image
            source={{ uri: CAMERA }}
            style={{
              width: 17,
              height: 17,
              position: "absolute",
              left: Dimensions.get("window").width / 2 + 20,
              bottom: 2,
            }}
          />
        </View>

        <View>
          <Text style={styles.textName}>Họ và tên</Text>
          <TextInput value={name} style={styles.textInput} />
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.textName}>Số điện thoại</Text>
          <TextInput value={phone} style={styles.textInput} />
        </View>

        <View>
          <ImageView
            uri={BG_POINT}
            imageStyle={{
              width: Dimensions.get("window").width * 0.8,
              height: Dimensions.get("window").height * 0.3,
              resizeMode: "stretch",
              marginVertical: 30,
            }}
          />
          <TextView
            title="Số Điểm tích luỹ:"
            textStyle={{
              textTransform: "none",
              fontSize: 18,
            }}
            styleContainer={{
              position: "absolute",
              top: 70,
              alignSelf: "center",
            }}
          />
          <TextView
            title={point + ""}
            textStyle={{
              textTransform: "none",
              fontSize: 60,
              color: Colors.YELLOW,

            }}
            styleContainer={{
              position: "absolute",
              top: 120,
              alignSelf: "center",
            }}
          />
        </View>

        <View style={{ marginVertical: 50 }}>
          <TextView
            title="CẢM ƠN BẠN ĐÃ THAM GIA"
            textStyle={{
              color: Colors.BLUE_TEXT,
              textAlign: "left",
              marginStart: 20,
              fontSize: 14,
            }}
            styleContainer={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          />
          <TextView
            title="CHIẾN DỊCH “SẢI BƯỚC PHONG CÁCH XANH“ CÙNG AQUAFINA"
            textStyle={{
              color: Colors.BLUE_TEXT,
              textAlign: "left",
              marginStart: 20,
              fontSize: 14,
            }}
            styleContainer={{
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          />
        </View>

        <Image
          source={{ uri: AQUA_BG }}
          style={{
            width: Dimensions.get("window").width * 0.8,
            height: 42,
            resizeMode: "stretch",
          }}
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

export default GreenBonusPoint

const styles = StyleSheet.create({
  textName: {
    fontSize: 14,
    fontFamily: "SVN-Gotham",
    fontWeight: "bold",
    color: Colors.GREY_TEXT_400,
    marginStart: 20,
    marginBottom: 5,
  },

  textInput: {
    marginHorizontal: 20,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: Colors.GREY_GREY,
    borderColor: Colors.GREY_GREY,
    height: 44,
    paddingStart: 18,
  },
})