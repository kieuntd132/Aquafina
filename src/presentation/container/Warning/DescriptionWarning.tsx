import { StyleSheet, Modal, View, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { StackNavigation } from '../../navigation/StackNavigation';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppContext } from '../../shared-state/appContext/AppContext';
import ImageView from '../../component/image/ImageView';
import Header from '../../component/header/Header';
import { BACKGROUND_BUTTON_BLUE, ICON_AQUAFINA, ICON_LOGIN, ICON_MENU, IMG_BOTTOM_LOGIN } from '../../../../assets';
import DialogLogOut from '../../component/dialog/DialogLogOut';
import { User } from '../../../domain/entity/User';
import TextView from '../../component/text/TextView';
import { Colors } from '../../resource/value/Colors';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../component/button/Button';
type DrawerNavigationProps = DrawerNavigationProp<StackNavigation>;
type PropsType = NativeStackScreenProps<
    StackNavigation,
    "WarningDescriptionScreen"
> & {
    navigation: DrawerNavigationProps;
};

const DescriptionWarning: React.FC<PropsType> = (props) => {
    const { navigation } = props;
    const { isLoggedIn, setLoggedIn, setDataUser } = React.useContext(AppContext);
    const [modalVisibleSignOut, setModalVisibleSignOut] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [currenValue, setCurrenValue] = useState(null);

    const [items, setItems] = useState([
        {
            label: "1. Bỏ chai Aquafinha nhưng hệ thống không nhận diện được",
            value: "Bỏ chai Aquafinha nhưng hệ thống không nhận diện được",
        },
        {
            label: "2. Hệ thống không tích điểm",
            value: "NHệ thống không tích điểm",
        },
        { label: "3. Khác", value: "Khác" },
    ]);

    const showDrawerNavigator = () => {
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
    };

    return (
        <View>
            <ImageView
                uri={IMG_BOTTOM_LOGIN}
                imageStyle={styles.imageBottomStyle}
            />
            <Header
                iconCenter={ICON_AQUAFINA}
                iconLeft={ICON_MENU}
                iconRight={ICON_LOGIN}
                eventLeft={showDrawerNavigator}
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
            <TextView
                title="Nội dung báo lỗi"
                textStyle={{
                    textTransform: "none",
                    color: Colors.RED,
                    marginTop: 20,
                }}
            />
            <View style={{ marginHorizontal: 20, marginTop: 15 }}>
                <DropDownPicker
                    items={items}
                    open={isOpen}
                    setOpen={() => setIsOpen(!isOpen)}
                    value={currenValue}
                    setValue={setCurrenValue}
                    placeholder="Nội dung báo lỗi"
                    placeholderStyle={{
                        color: Colors.TEXT_GRAY,
                        fontFamily: "SVN-Gotham",
                        fontWeight: "400",
                        fontSize: 14,
                    }}
                    textStyle={{
                        color: Colors.GREY_5,
                        fontFamily: "SVN-Gotham",
                        fontWeight: "400",
                        fontSize: 14,
                    }}
                    style={{
                        borderColor: Colors.BLUE_10,
                        opacity: 0.85,
                    }}
                    dropDownContainerStyle={{
                        borderColor: Colors.BLUE_10,
                        paddingTop: 10,
                    }}
                    arrowIconStyle={{
                        //@ts-ignore
                        tintColor: Colors.BLUE_TEXT,
                        width: 24,
                        height: 24,
                    }}
                    setItems={setItems}
                />
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderRadius: 6,
                        borderColor: Colors.BLUE_10,
                        marginTop: 15,
                        backgroundColor: Colors.WHITE,
                        fontFamily: "SVN-Gotham",
                        fontWeight: "400",
                        fontSize: 14,
                        paddingStart: 10,
                        color: Colors.GREY_5,
                        opacity: 0.85,
                    }}
                    placeholder="Thông tin liên hệ (Email/Số điện thoại)"
                    placeholderTextColor={Colors.TEXT_GRAY}
                />
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderRadius: 6,
                        borderColor: Colors.BLUE_10,
                        marginTop: 15,
                        backgroundColor: Colors.WHITE,
                        fontFamily: "SVN-Gotham",
                        fontWeight: "400",
                        fontSize: 14,
                        paddingStart: 10,
                        color: Colors.GREY_5,
                        height: 196,
                        textAlignVertical: "top",
                        opacity: 0.85,
                    }}
                    placeholder="Mô tả lỗi"
                    placeholderTextColor={Colors.TEXT_GRAY}
                />
            </View>

            <LinearGradient
                style={{
                    marginTop: Dimensions.get("window").height * 0.16,
                    height: 250,
                }}
                colors={[Colors.WHITE_LINEAR_2, Colors.WHITE_LINEAR]}
            >
                <Button
                    onPress={goHome}
                    title="Gửi"
                    backgroundImage={BACKGROUND_BUTTON_BLUE} />
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    imageBottomStyle: {
        width: Dimensions.get("window").width * 1.2,
        height: Dimensions.get("window").height * 0.6,
        position: "absolute",
        top: Dimensions.get("window").height * 0.515,
    },
});
export default DescriptionWarning
