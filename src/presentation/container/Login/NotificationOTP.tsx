import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../component/header/Header'
import { BACKGROUND_BUTTON_BLUE, ICON_AQUAFINA, ICON_HOME, IMG_BOTTOM_LOGIN, IMG_TITLE } from '../../../../assets'
import ImageView from '../../component/image/ImageView'
import TextView from '../../component/text/TextView'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '../../resource/value/Colors'
import Button from '../../component/button/Button'

import { StackNavigation } from '../../navigation/StackNavigation';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type PropsType = NativeStackScreenProps<StackNavigation, "NotificationOTP">

const NotificationOTP: React.FC<PropsType> = (props) => {
    // const NotificationOTP = () => {
    const { navigation } = props;
    const goLogin = async () => {
        navigation.navigate("Login");
    }
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
                title="Đăng ký thành công"
                styleContainer={{ marginTop: Dimensions.get("window").height * 0.27 }}
                textStyle={styles.textSignUp}
            />
            <TextView
                title="Vui lòng đăng nhập để bắt đầu chương trình"
                styleContainer={{ marginTop: 10 }}
                textStyle={styles.textNotify}
            />
            <LinearGradient
                style={{
                    marginTop: Dimensions.get("window").height * 0.31,
                    height: 400,
                }}
                colors={[Colors.WHITE_LINEAR_2, Colors.WHITE_LINEAR]}
            >
                <Button
                    title="Đăng nhập"
                    backgroundImage={BACKGROUND_BUTTON_BLUE}
                    styleText={{ color: Colors.WHITE }}
                    onPress={goLogin}
                />
            </LinearGradient>
        </View>
    )
}

export default NotificationOTP

const styles = StyleSheet.create({
    imageBottomStyle: {
        width: Dimensions.get("window").width * 1.2,
        height: Dimensions.get("window").height * 0.6,
        marginTop: Dimensions.get("window").height * 1.48,
        marginStart: Dimensions.get("window").width * 0.05,
    },

    textSignUp: {
        textTransform: "none",
    },
    textNotify: {
        fontFamily: "SVN-Gotham",
        textTransform: "none",
        fontSize: 14,
        fontWeight: '500',
        color: Colors.GREY_5,
    },
})