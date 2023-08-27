import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundModal from '../backgroundModal/BackgroundModal';
import { BACKGROUND_BUTTON_BLUE, } from '../../../../assets';
import ImageView from '../image/ImageView';
import TextView from '../text/TextView';
import TextViewBold from '../textBold/TextViewBold';
import { BG_STATIS_1, IMG_AQUAFINA, IMG_HP, IMG_OTHER } from '../../../../assets';
import { Colors } from '../../resource/value/Colors';
import Button from '../button/Button';
type Props = {
    onPress?: () => void;
    sumStatistical: number;
    aquafina: number;
    other: number;
};

const DialogStatistical: React.FC<Props> = (props) => {
    const { onPress, sumStatistical, aquafina, other } = props;
    let title = "Bạn đã đổi thành công " + sumStatistical + " điểm với:";
    return (
        <View style={styles.centeredView}>
            <BackgroundModal />
            <View style={styles.modalView}>
                <ImageView
                    uri={BG_STATIS_1}
                    imageStyle={{
                        width: 300,
                        height: 300,
                        resizeMode: "stretch",
                    }}
                    viewStyle={{
                        position: "absolute",
                        bottom: 0,
                    }}
                />
                <ImageView
                    uri={IMG_HP}
                    imageStyle={{
                        width: Dimensions.get("window").width * 0.7,
                        height: 80,
                        resizeMode: "stretch",
                    }}
                    viewStyle={{
                        position: "absolute",
                        top: 6,
                        alignSelf: "center",
                    }}
                />
                <TextView title="Chúc mừng " textStyle={{ marginTop: 12 }} />

                <View>
                    <View
                        style={{
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <TextViewBold
                            text={title}
                            boldTexts={[sumStatistical.toString()]}
                            styleText={{
                                fontFamily: "SVN-Gotham",
                                fontWeight: "400",
                                fontSize: 16,
                                color: Colors.BLUE_TEXT,
                            }}
                            styleBold={{
                                fontSize: 16,
                                color: Colors.BLUE_TEXT,
                            }}
                            styleView={{
                                width: Dimensions.get("window").width * 0.9,
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 30,
                            }}
                        />
                    </View>
                    <View
                        style={{ marginStart: 45, marginTop: 20, flexDirection: "row" }}
                    >
                        <Image
                            source={{ uri: IMG_AQUAFINA }}
                            style={{
                                width: 28.5,
                                height: 93.5,
                                resizeMode: "stretch",
                            }}
                        />
                        <Text
                            style={{
                                fontFamily: "SVN-Gotham",
                                fontWeight:'bold',
                                color: Colors.ORANGE,
                                fontSize: 42,
                                marginTop: 30,
                                marginStart: 15,
                            }}
                        >
                            {aquafina + ""}
                        </Text>
                        <Text
                            style={{
                                fontFamily: "SVN-Gotham",
                                fontWeight:'bold',
                                color: Colors.BLUE_KV,
                                fontSize: 16,
                                marginTop: 57,
                                marginStart: 5,
                            }}
                        >
                            chai Aquafina
                        </Text>
                    </View>
                    <View
                        style={{ marginStart: 45, marginTop: 20, flexDirection: "row" }}
                    >
                        <Image
                            source={{ uri: IMG_OTHER }}
                            style={{
                                width: 28.5,
                                height: 93.5,
                                resizeMode: "stretch",
                            }}
                        />
                        <Text
                            style={{
                                fontFamily: "SVN-Gotham",
                                fontWeight:'bold',
                                color: Colors.ORANGE,
                                fontSize: 42,
                                marginTop: 30,
                                marginStart: 15,
                            }}
                        >
                            {other + ""}
                        </Text>
                        <Text
                            style={{
                                fontFamily: "SVN-Gotham",
                                fontWeight:'bold',
                                color: Colors.BLUE_KV,
                                fontSize: 16,
                                marginTop: 57,
                                marginStart: 5,
                            }}
                        >
                            chai khác
                        </Text>
                    </View>
                </View>

                <Button
                    title="Đồng ý"
                    backgroundImage={BACKGROUND_BUTTON_BLUE}
                    stylePressable={{
                        width: Dimensions.get("window").width * 0.4,
                        alignSelf: "center",
                        position: "absolute",
                        bottom: 25,
                    }}
                    onPress={onPress}
                />
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
        height: 429,
        marginHorizontal: 30,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
});
export default DialogStatistical
