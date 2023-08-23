import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/header/Header';
import { BACKGROUND_BUTTON_BLUE, ICON_AQUAFINA, ICON_HOME, IMG_BOTTOM_LOGIN, IMG_TITLE } from '../../../../assets';
import ImageView from '../../component/image/ImageView';
import TextView from '../../component/text/TextView';
import TextViewBold from '../../component/textBold/TextViewBold';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Colors } from '../../resource/value/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../component/button/Button';

import { StackNavigation } from '../../navigation/StackNavigation';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerNavigationProp } from '@react-navigation/drawer';

type DrawerNavigationProps = DrawerNavigationProp<StackNavigation>;
type PropsType = NativeStackScreenProps<StackNavigation, "ScreenOTP"> & {
  navigation: DrawerNavigationProps;
};
const ScreenOTP: React.FC<PropsType> = (props) => {
    const { navigation, route } = props;
    const phoneNumber = route.params?.phoneNumber;
    const name = route.params?.name;
    const type = route.params?.type;
    console.log(type);
    console.log(name);
    console.log(phoneNumber);
    const textBold = "Một mã OTP vừa được gửi vào số " + phoneNumber;
    const phone = phoneNumber + "";
    const boldTexts: string[] = [phone];
    const textRed: string[] = ["30 giây"];
    const [display, setDisplay] = useState<"flex" | "none" | undefined>("flex");
    const [displayReSendOPT, setDisplayReSendOPT] = useState<
        "flex" | "none" | undefined
    >("none");
    const [colorOTP, setColorOTP] = useState<string>(Colors.BLUE_TEXT);
    const [borderColorOTP, setBorderColorOTP] = useState<string>(Colors.TEXT_GRAY);

    const codeOTP = "3845";
    const [code, setCode] = useState<string>("");
    const handleCheckOTP = () => {
        if (code != codeOTP) {
            setDisplay("none");
            setColorOTP(Colors.RED);
            setBorderColorOTP(Colors.RED);
            setDisplayReSendOPT("flex");
            return false;
        }
        if (type == true) {
            navigation.navigate("Home");
          } else if (type == false) {
           
            navigation.navigate("NotificationOTP");
          }
    };

    const handleResendOTP = () => {
        setDisplay("flex");
        setColorOTP(Colors.BLUE_TEXT);
        setBorderColorOTP(Colors.TEXT_GRAY);
        setDisplayReSendOPT("none");
        setCode("");
    };
    return (
        <View>
            <Header
                iconCenter={ICON_AQUAFINA}
                iconLeft={ICON_HOME}
                iconRight={ICON_HOME}
                styleIconRight={{ opacity: 0 }}
            />
            <ImageView
                uri={IMG_TITLE}
                imageStyle={{
                    width: Dimensions.get("window").width * 0.8,
                    height: Dimensions.get("window").width * 0.5,
                    marginTop: Dimensions.get("window").height * 0.15,
                    marginEnd: Dimensions.get("window").width * 0.04,
                }}
            />
            <ImageView
                uri={IMG_BOTTOM_LOGIN}
                imageStyle={styles.imageBottomStyle}
            />
            <TextView
                title="Nhập OTP"
                styleContainer={{ marginTop: Dimensions.get("window").height * 0.21 }}
            />

            <TextViewBold
                text={textBold}
                boldTexts={boldTexts}
                styleView={{ marginTop: 10 }}
            />

            <View style={styles.viewOTP}>
                <OTPInputView
                    style={{ width: "100%", height: 50 }}
                    pinCount={4}
                    autoFocusOnLoad = {false}
                    codeInputFieldStyle={StyleSheet.flatten([
                        styles.underlineStyleBase,
                        { color: colorOTP, borderColor: borderColorOTP },
                    ])}
                    code={code}
                    onCodeChanged={(code) => {
                        setCode(code);
                    }}
                    onCodeFilled={(code) => {
                        setCode(code);
                    }}
                    placeholderCharacter="|"
                    placeholderTextColor={Colors.TEXT_GRAY}
                    editable={true}
                />
            </View>

            <LinearGradient
                style={{
                    marginTop: Dimensions.get("window").height * 0.234,
                    height: 400,
                }}
                colors={[Colors.WHITE_LINEAR_2, Colors.WHITE_LINEAR]}
            >
                <Button
                    title="Xác nhận"
                    styleText={{ color: Colors.WHITE }}
                    backgroundImage={BACKGROUND_BUTTON_BLUE}
                    onPress={handleCheckOTP}
                />
                <TextViewBold
                    text="Mã sẽ được gửi trong vòng 30 giây"
                    boldTexts={textRed}
                    styleBold={{ color: "red", textTransform: "uppercase" }}
                    styleView={{ marginTop: 12, display: display }}
                />
                <Button
                    onPress={handleResendOTP}
                    title="Gửi lại mã"
                    styleText={StyleSheet.flatten([
                        styles.textReSendOTP,
                        { display: displayReSendOPT },
                    ])}
                />
            </LinearGradient>
        </View>
    )
}

export default ScreenOTP

const styles = StyleSheet.create({
    imageBottomStyle: {
        width: Dimensions.get("window").width * 1.2,
        height: Dimensions.get("window").height * 0.6,
        marginTop: Dimensions.get("window").height * 1.48,
        marginStart: Dimensions.get("window").width * 0.05,
    },

    textOr: {
        textTransform: "none",
        color: Colors.GREY_5,
        fontSize: 11,
        marginVertical: 3,
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,

        elevation: 5,
    },

    viewOTP: {
        marginTop: 20,
        marginHorizontal: Dimensions.get("window").width * 0.2,
        marginBottom: 50,
    },

    underlineStyleBase: {
        width: 44,
        height: 44,
        borderWidth: 1,
        borderColor: Colors.TEXT_GRAY,
        color: Colors.BLUE_TEXT,
        fontSize: 20,
        fontWeight: "700",
        borderRadius: 8,
    },

    underlineStyleHighLighted: {
        borderColor: "#7F4E1D",
    },

    textReSendOTP: {
        textTransform: "none",
        fontFamily: 'SVN-Gotham',
        fontSize: 12,
        textDecorationLine: "underline",
        color: Colors.BLUE_KV,
        marginTop: 5,
        display: "none",
    },
})