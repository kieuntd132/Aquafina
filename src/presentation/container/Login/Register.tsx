import { Alert, Dimensions, StyleSheet, TextStyle, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/header/Header';
import { BACKGROUND_BUTTON_BLUE, ICON_AQUAFINA, ICON_HOME, IMG_BOTTOM_LOGIN, IMG_TITLE } from '../../../../assets';
import TextField from '../../component/input/TextField';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../resource/value/Colors';
import Button from '../../component/button/Button';
import ImageView from '../../component/image/ImageView';
import TextView from '../../component/text/TextView';
import { StackNavigation } from '../../navigation/StackNavigation';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { AppContext } from '../../shared-state/appContext/AppContext';

type DrawerNavigationProps = DrawerNavigationProp<StackNavigation>;
type PropsType = NativeStackScreenProps<StackNavigation, "Register"> & {
    navigation: DrawerNavigationProps;
};
const Register: React.FC<PropsType> = (props) => {
    const { navigation } = props;
    const { isLoggedIn } = React.useContext(AppContext);
    const [valueName, setValueName] = useState("");
    const [valuePhone, setValuePhone] = useState("");
    const [fontWeight, setFontWeight] = useState('500');
    const [colors, setColors] = useState('#AEB1B5');
    const handleInputChangeName = (text: string) => {
        setValueName(text);
        if (text) {
            setFontWeight('bold');
            setColors('#707172');
        } else {
            setFontWeight('500');
            setColors('#AEB1B5');
        }
    }
    const handleInputChangePhone = (text: string) => {
        setValuePhone(text);
        if (text) {
            setFontWeight('bold');
            setColors('#707172');
        } else {
            setFontWeight('500');
            setColors('#AEB1B5');
        }
    }
    const textStyle: TextStyle = {
        fontWeight: fontWeight as TextStyle['fontWeight'],
        color: colors
    };
    const goScreenOTP = async () => {
        const nameStand = "[a-zA-Z\\s\\u00C0-\\u1EF9]+";
        if (!valueName) {
            Alert.alert("Bạn chưa nhập họ và tên");
            return;
        }
        if (!nameStand.match(nameStand)) {
            Alert.alert("Họ tên không hợp lệ");
            return;
        }
        if (!valuePhone) {
            Alert.alert("Bạn chưa nhập số điện thoại");
            return;
        }
        if (
            valuePhone.length < 10 || valuePhone.length > 10 || (valuePhone && !Number.isInteger(Number(valuePhone)))) {
            Alert.alert("Số điện thoại không hợp lệ");
            return;
        }
        navigation.navigate("ScreenOTP", { phoneNumber: valuePhone, name: valueName, type: false });

    }
    const goHome = () => {
        navigation.navigate("Home");
    }
    return (
        <View>
            <Header
                iconCenter={ICON_AQUAFINA}
                iconLeft={ICON_HOME}
                iconRight={ICON_HOME}
                styleIconRight={{ opacity: 0 }}
                eventLeft={goHome}
                checkLogin={true}

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
                title="Đăng Ký"
                styleContainer={{ marginTop: Dimensions.get("window").height * 0.21 }}
            />
            <TextField
                title="Họ và tên"
                placeholder="Nhập họ và tên của bạn"
                ViewStyle={{ marginTop: 25 }}
                onChangeText={(valueName) => handleInputChangeName(valueName)}
                value={valueName}
                TextStyle={textStyle}
            />
            <TextField
                title="Số điện thoại"
                placeholder="Nhập số điện thoại của bạn"
                ViewStyle={{ marginTop: 25 }}
                onChangeText={(valuePhone) => handleInputChangePhone(valuePhone)}
                value={valuePhone}
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
                    title="Đăng ký"
                    backgroundImage={BACKGROUND_BUTTON_BLUE}
                    styleText={{ color: Colors.WHITE }}
                    onPress={() => goScreenOTP()}
                />
            </LinearGradient>
        </View>
    )
}

export default Register

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