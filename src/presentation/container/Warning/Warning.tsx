import { StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigation } from '../../navigation/StackNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppContext } from '../../shared-state/appContext/AppContext';
import { BACKGROUND_BUTTON_BLUE, ICON_AQUAFINA, ICON_LOGIN, ICON_MENU, WARNING_2 } from '../../../../assets';
import Header from '../../component/header/Header';
import ImageView from '../../component/image/ImageView';
import TextView from '../../component/text/TextView';
import Button from '../../component/button/Button';
import { Colors } from '../../resource/value/Colors';

type DrawerNavigationProps = DrawerNavigationProp<StackNavigation>;
type PropsType = NativeStackScreenProps<StackNavigation, "WarningScreen"> & {
    navigation: DrawerNavigationProps;
};

const Warning: React.FC<PropsType> = (props) => {
    const { navigation } = props;
    const { isLoggedIn } = React.useContext(AppContext);

    const showDrawerNavigator = () => {
        navigation.openDrawer();
    };
    const goLogin = () => {
        navigation.navigate("Login");
    };
    const goHome = () => {
        navigation.navigate("Home");
    };
    const goToScreenDescriptionWarning = () => {
        navigation.navigate("WarningDescriptionScreen");
    }
    return (
        <View>
            <Header
                iconCenter={ICON_AQUAFINA}
                iconLeft={ICON_MENU}
                iconRight={ICON_LOGIN}
                eventLeft={showDrawerNavigator}
                eventRight={goLogin}
                eventCenter={goHome}
                checkLogin={true}
            />
            <ImageView
                uri={WARNING_2}
                viewStyle={{ marginTop: Dimensions.get("window").width * 0.5 }}
                imageStyle={{
                    width: Dimensions.get("window").width * 0.6,
                    height: Dimensions.get("window").height * 0.4,
                    resizeMode: "stretch",
                }}
            />

            <TextView
                title="Đã xảy ra lỗi trong quá trình kết nối,
Vui lòng kiểm tra và thử lại sau!"
                textStyle={styles.textStyle}
            />
            <Button
                onPress={goToScreenDescriptionWarning}
                title="Thử lại"
                backgroundImage={BACKGROUND_BUTTON_BLUE}
                stylePressable={{
                    width: 190,
                    alignSelf: "center",
                    marginTop: Dimensions.get("window").width * 0.2,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        textAlign: "center",
        textTransform: "none",
        marginTop: Dimensions.get("window").width * 0.5,
        color: Colors.GREY_5,
        fontSize: 14,
        fontFamily: "SVN-Gotham",
        fontWeight: "400",
        lineHeight: 20,
    },
});
export default Warning
