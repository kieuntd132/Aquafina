import { StyleSheet,Pressable, Image, Dimensions, Text, View } from 'react-native'
import React from 'react'
import BackgroundModal from '../backgroundModal/BackgroundModal';
import { BACKGROUND_BUTTON_BLUE, BACKGROUND_BUTTON_WHITE, BG_MODAL_LOGIN, ICON_CLOSE } from '../../../../assets';
import ImageView from '../image/ImageView';
import { Colors } from '../../resource/value/Colors';
import Button from '../button/Button';

type Props = {
    onPress: () => void;
    onPressSignOut: () => void;
    onPressCancel: () => void;
  };
  
  const DialogLogOut: React.FC<Props> = (props) => {
    const { onPress, onPressSignOut, onPressCancel } = props;
    return (
      <View style={styles.centeredView}>
        <BackgroundModal />
        <View style={styles.modalView}>
          <Pressable
            style={{ position: "absolute", top: 20, right: 20 }}
            onPress={onPress}
          >
            <Image
              source={{ uri: ICON_CLOSE }}
              style={{ width: 24, height: 24 }}
            />
          </Pressable>
  
          <ImageView
            uri={BG_MODAL_LOGIN}
            imageStyle={{
              width: 280,
              height: 200,
              resizeMode: "contain",
            }}
            viewStyle={{
              position: "absolute",
              alignSelf: "center",
            }}
          />
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "SVN-Gotham",
                fontWeight: "bold",
                fontSize: 18,
                color: Colors.BLUE_TEXT,
              }}
            >
              Bạn có muốn đăng xuất
            </Text>
            <Text
              style={{
                fontFamily: "SVN-Gotham",
                fontWeight: "700",
                fontSize: 18,
                color: Colors.BLUE_TEXT,
              }}
            >
              hay không ?
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              title="Huỷ"
              backgroundImage={BACKGROUND_BUTTON_WHITE}
              stylePressable={{
                width: Dimensions.get("window").width * 0.35,
                alignSelf: "center",
                marginTop: 20,
              }}
              styleText={{ color: Colors.BLUE_TEXT }}
              onPress={onPressCancel}
            />
            <Button
              title="Đăng xuất"
              backgroundImage={BACKGROUND_BUTTON_BLUE}
              stylePressable={{
                width: Dimensions.get("window").width * 0.35,
                alignSelf: "center",
                marginTop: 20,
              }}
              onPress={onPressSignOut}
            />
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
    },
    modalView: {
      margin: 20,
      backgroundColor: Colors.WHITE,
      borderRadius: 20,
      padding: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height: 199,
    },
  });

export default DialogLogOut
