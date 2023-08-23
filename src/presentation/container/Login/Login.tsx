import { Alert, Dimensions, StyleSheet, TextStyle, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/header/Header';
import { BACKGROUND_BUTTON_BLUE, BACKGROUND_BUTTON_WHITE, ICON_AQUAFINA, ICON_HOME, IMG_BOTTOM_LOGIN, IMG_TITLE } from '../../../../assets';
import TextField from '../../component/input/TextField';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../resource/value/Colors';
import Button from '../../component/button/Button';
import ImageView from '../../component/image/ImageView';
import TextView from '../../component/text/TextView';
import { StackNavigation } from '../../navigation/StackNavigation';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerNavigationProp } from '@react-navigation/drawer';

type DrawerNavigationProps = DrawerNavigationProp<StackNavigation>;
type PropsType = NativeStackScreenProps<StackNavigation, "Login"> & {
  navigation: DrawerNavigationProps;
};
const Login: React.FC<PropsType> = (props) => {
    // const Login = () => {
    const { navigation } = props;
    const [value, setValue] = useState("");
    const [fontWeight, setFontWeight] = useState('500');
    const [colors, setColors] = useState('#AEB1B5');
    const handleInputChange = (text: string) => {
        setValue(text);
        if (text) {
            setFontWeight('bold');
            setColors('#707172')
        } else {
            setFontWeight('500');
            setColors('#AEB1B5')
        }
    }
    const textStyle: TextStyle = {
        fontWeight: fontWeight as TextStyle['fontWeight'],
        color: colors
    };
    const goScreenOTP = async (phoneNumber: string) => {
        if (phoneNumber && !Number.isInteger(Number(phoneNumber))) {
            Alert.alert("Số điện thoại không hợp lệ");
            return;
        }
        if (phoneNumber.length > 10 || phoneNumber.length < 10) {
            Alert.alert("Số điện thoại phải có 10 chữ số");
            return;
        }
        // navigation.navigate("ScreenOTP");
        navigation.navigate("ScreenOTP", { phoneNumber: value, type: true });
    };

    const goRegister = () => {
        navigation.navigate("Register");
    };

    const goHome = () => {
        navigation.navigate("Home");
    };
    return (
        <View>
            <Header
                iconCenter={ICON_AQUAFINA}
                iconLeft={ICON_HOME}
                iconRight={ICON_HOME}
                styleIconRight={{ opacity: 0 }}
                eventLeft={goHome}
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
                title="Đăng Nhập"
                styleContainer={{ marginTop: Dimensions.get("window").height * 0.21 }}
            />
            <TextField
                title="Số điện thoại"
                placeholder="Nhập số điện thoại của bạn"
                ViewStyle={{ marginTop: 25 }}
                onChangeText={(value) => handleInputChange(value)}
                value={value}
                TextStyle={textStyle}
            />
            <LinearGradient
                style={{
                    marginTop: Dimensions.get("window").height * 0.31,
                    height: 350,
                }}
                colors={[Colors.WHITE_LINEAR_2, Colors.WHITE_LINEAR]}
            >
                <Button
                    title="Đăng nhập"
                    backgroundImage={BACKGROUND_BUTTON_BLUE}
                    styleText={{ color: Colors.WHITE }}
                    // onPress={() => goScreenOTP(value)}
                    onPress={() => goScreenOTP(value)}
                />
                <TextView title="Hoặc" textStyle={styles.textOr} />
                <Button
                    title="Đăng ký"
                    backgroundImage={BACKGROUND_BUTTON_WHITE}
                    styleText={{ color: Colors.BLUE_KV }}
                    onPress={goRegister}
                />
            </LinearGradient>
        </View>
    )
}

export default Login

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
        fontWeight: '700',
        lineHeight: 13.2
    },
})