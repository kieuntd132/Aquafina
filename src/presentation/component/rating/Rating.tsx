import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    StyleProp,
    ViewStyle,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import React, { useState, useEffect, useRef } from "react";
import { User } from '../../../domain/entity/User';
import { Colors } from '../../resource/value/Colors';
import { BACKGROUND_BUTTON_WHITE, BG_FOOTER, ICON_RT_1, ICON_RT_2, ICON_RT_3, NUMBER_RT_1, NUMBER_RT_2, NUMBER_RT_3 } from '../../../../assets';
import ImageView from '../image/ImageView';
import Button from '../button/Button';
import TextView from '../text/TextView';
interface ItemTab {
    id: number;
    title: string;
}

type ItemProps = {
    item: User;
    index: number;
};

const Item = ({ item, index }: ItemProps) => {
    let backgroundColor = Colors.WHITE;
    let uri = NUMBER_RT_1;
    let uriR = ICON_RT_1;
    let displayImage: "flex" | "none" | undefined = "none";
    let displayText: "flex" | "none" | undefined = "flex";
    let color = Colors.GREY_5;

    if (index == 0) {
        backgroundColor = Colors.R1;
        displayImage = "flex";
        displayText = "none";
        color = Colors.WHITE;
    } else if (index == 1) {
        backgroundColor = Colors.R2;
        displayImage = "flex";
        displayText = "none";
        uri = NUMBER_RT_2;
        uriR = ICON_RT_2;
        color = Colors.WHITE;
    } else if (index == 2) {
        backgroundColor = Colors.R3;
        displayImage = "flex";
        displayText = "none";
        uri = NUMBER_RT_3;
        uriR = ICON_RT_3;
        color = Colors.WHITE;
    }
    return (
        <View
            style={{
                backgroundColor: backgroundColor,
                marginBottom: 10,
                height: 33,
                borderRadius: 6,
                alignItems: "center",
                flexDirection: "row",
            }}
        >
            <Image
                style={{
                    width: 38,
                    height: 33,
                    overflow: "hidden",
                    borderRadius: 6,
                    display: displayImage,
                }}
                source={{ uri: uri }}
            />
            <Text
                style={{
                    display: displayText,
                    color: Colors.GREY_5,
                    fontFamily: "SVN-Gotham",
                    fontWeight: "bold",
                    marginStart: 11,
                    fontSize: 12,
                }}
            >
                #{index + 1}
            </Text>
            <Image
                style={{ marginStart: 10, marginEnd: 5, borderRadius: 50 }}
                source={{ uri: item.avatar, width: 24, height: 24 }}
            />
            <Text style={{ color: color, fontFamily: "SVN-Gotham", fontWeight: 'bold' }}>
                {item.name}
            </Text>
            <Image
                style={{
                    display: displayImage,
                    width: 20,
                    height: 20,
                    position: "absolute",
                    right: 55,
                }}
                source={{ uri: uriR }}
            />
            <Text
                style={{
                    position: "absolute",
                    right: 7,
                    color: color,
                    fontFamily: "SVN-Gotham",
                    fontWeight: 'bold'
                }}
            >
                {item.point}
            </Text>
        </View>
    );
};

const Item2 = ({ item, index }: ItemProps) => {
    // let backgroundColor = Colors.WHITE;
    let backgroundColor = Colors.BLUE_KV;

    let uri = NUMBER_RT_1;
    let uriR = ICON_RT_1;
    let displayImage: "flex" | "none" | undefined = "none";
    let displayText: "flex" | "none" | undefined = "flex";
    // let color = Colors.GREY_5;
    let color = Colors.WHITE;

    // if (index == 0) {
    //     backgroundColor = Colors.R1;
    //     displayImage = "flex";
    //     displayText = "none";
    //     color = Colors.WHITE;
    // } else if (index == 1) {
    //     backgroundColor = Colors.R2;
    //     displayImage = "flex";
    //     displayText = "none";
    //     uri = NUMBER_RT_2;
    //     uriR = ICON_RT_2;
    //     color = Colors.WHITE;
    // } else if (index == 2) {
    //     backgroundColor = Colors.R3;
    //     displayImage = "flex";
    //     displayText = "none";
    //     uri = NUMBER_RT_3;
    //     uriR = ICON_RT_3;
    //     color = Colors.WHITE;
    // }
    return (
        <View
            // style={{
            //     backgroundColor: backgroundColor,
            //     marginBottom: 10,
            //     height: 33,
            //     borderRadius: 6,
            //     alignItems: "center",
            //     flexDirection: "row",
            // }}
            style={{
                backgroundColor: backgroundColor,
                borderColor: Colors.WHITE,
                borderWidth: 1,
                marginBottom: 10,
                height: 33,
                borderRadius: 6,
                alignItems: "center",
                flexDirection: "row",
            }}
        >
            <Image
                style={{
                    width: 38,
                    height: 33,
                    overflow: "hidden",
                    borderRadius: 6,
                    display: displayImage,
                }}
                source={{ uri: uri }}
            />
            <Text
                style={{
                    display: displayText,
                    // color: Colors.GREY_5,
                    color: Colors.WHITE,
                    fontFamily: "SVN-Gotham",
                    fontWeight: "bold",
                    marginStart: 11,
                    fontSize: 12,
                }}
            >
                {/* #{index + 1} */}
                #{index + 100}
            </Text>
            <Image
                style={{ marginStart: 10, marginEnd: 5, borderRadius: 50 }}
                source={{ uri: item.avatar, width: 24, height: 24 }}
            />
            <Text style={{ color: color, fontFamily: "SVN-Gotham", fontWeight: "bold" }}>
                {item.name}
            </Text>
            <Image
                style={{
                    display: displayImage,
                    width: 20,
                    height: 20,
                    position: "absolute",
                    right: 55,
                }}
                source={{ uri: uriR }}
            />
            <Text
                style={{
                    position: "absolute",
                    right: 7,
                    color: color,
                    fontFamily: "SVN-Gotham",
                    fontWeight: "bold",
                }}
            >
                {item.point}
            </Text>
        </View>
    );
};

type RatingProps = {
    checkLogin: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    data: User[];
    type: boolean;
    onPressSignIn?: () => void;
    onPress?: () => void;
    dataUser: User[];
};

const Rating: React.FC<RatingProps> = (props) => {
    const { checkLogin, data, type, dataUser } = props;
    // const itemUser = useSelector((state: RootState) => state.user.item);
    // const index = useSelector((state: RootState) => state.user.index);
    const scrollViewRef = useRef<ScrollView>(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    useEffect(() => {
        if (scrollViewRef.current && selectedIndex >= 0) {
            const itemWidth = Dimensions.get("window").width / 3 + 11; // Độ rộng của mỗi phần tử danh sách
            const screenWidth = Dimensions.get("window").width;
            const itemCount = DATADATE.length;
            const maxScrollX = itemWidth * (itemCount - 1);
            let scrollToX = itemWidth * selectedIndex;
            // Đảm bảo scrollToX không vượt quá giới hạn của danh sách
            scrollToX = Math.min(scrollToX, maxScrollX);

            // Tính toán vị trí căn giữa theo chiều rộng màn hình
            const offsetX = Math.max(0, scrollToX - (screenWidth - itemWidth) / 2);

            // Cuộn đến phần tử được chọn và căn giữa theo chiều rộng màn hình
            scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
        }
    }, [selectedIndex]);

    const [status, setStatus] = useState(DATADATE[1].title);

    const setStatusFilter = (status: string) => {
        setStatus(status);
    };

    interface ItemDate {
        id: number;
        title: string;
    }

    type ItemDateProps = {
        item: ItemDate;
    };

    const ItemDate = ({ item }: ItemDateProps) => {
        return (
            <TouchableOpacity
                style={[styles.btnTab, status === item.title && styles.btnTabActive]}
                onPress={() => {
                    setStatusFilter(item.title);
                    setSelectedIndex(item.id);
                }}
            >
                <Text
                    style={[styles.textTab, status === item.title && styles.textActive]}
                >
                    {item.title}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={props.containerStyle}>
            <View style={styles.container}>
                <ImageView
                    uri={BG_FOOTER}
                    imageStyle={{ width: 310, height: 310 }}
                    viewStyle={{ position: "absolute", left: -180, top: 40 }}
                />
                {checkLogin ? (
                    <View style={styles.listTab}>
                        <ScrollView
                            ref={scrollViewRef}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            {DATADATE.map((item) => (
                                <ItemDate item={item} key={item.id} />
                            ))}
                        </ScrollView>
                    </View>
                ) : (
                    <TextView
                        textStyle={{
                            color: Colors.WHITE,
                            fontSize: 12,
                            fontFamily: "SVN-Gotham",
                            fontWeight: "500",
                            marginTop: 25,
                            marginBottom: 15,
                        }}
                        title="13/06/2022 - 19/06/2022"
                    />
                )}

                <View style={{ marginHorizontal: 54 }}>
                    {data.map((item, index) => (
                        <Item item={item} index={index} key={item.key} />
                    ))}
                </View>

                {/* {checkLogin ? ( */}
                    <View style={{ marginHorizontal: 54 }}>
                        <TextView
                            title="Hạng của tôi"
                            textStyle={{
                                color: Colors.WHITE,
                                fontSize: 14,
                                textTransform: "none",
                                marginBottom: 10,
                            }}
                        />
                        {/* <Item2 item={itemUser} index={index} /> */}
                        
                            {dataUser.map((itemUser, index) => (
                                <Item2 item={itemUser} index={index} key={itemUser.key} />
                            ))}
                        <Button
                            title="Xem chi tiết"
                            backgroundImage={BACKGROUND_BUTTON_WHITE}
                            stylePressable={{
                                marginHorizontal: 0,
                                display: type ? "flex" : "none",
                            }}
                            styleText={{ color: Colors.BLUE_TEXT }}
                            onPress={props.onPress}
                        />
                    </View>
                {/* // ) : (
                //     <View style={{ marginTop: 15 }}>
                //         <TextView
                //             title="Vui lòng đăng nhập để xem thứ hạng của bạn"
                //             textStyle={{
                //                 color: Colors.WHITE,
                //                 fontSize: 14,
                //                 textTransform: "none",
                //             }}
                //         />
                //         <Button
                //             title="Đăng nhập"
                //             backgroundImage={BACKGROUND_BUTTON_WHITE}
                //             styleText={{ color: Colors.BLUE_TEXT }}
                //             stylePressable={{ marginHorizontal: 54, marginTop: 20 }}
                //             onPress={props.onPressSignIn}
                //         />
                //     </View>
                // )} */}
            </View>
            <Text style={styles.textTitle}>Bảng xếp hạng</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textTitle: {
        textTransform: "none",
        borderWidth: 1,
        borderColor: Colors.BLUE_300,
        borderRadius: 10,
        width: 150,
        color: Colors.WHITE,
        alignSelf: "center",
        textAlign: "center",
        fontSize: 14,
        fontFamily: "SVN-Gotham",
        fontWeight: "bold",
        paddingVertical: 7,
        backgroundColor: Colors.BLUE_300,
        position: "absolute",
    },

    container: {
        backgroundColor: Colors.BLUE_KV,
        marginTop: 18,
        height: "auto",
        paddingBottom: 30,
    },

    listTab: {
        flexDirection: "row",
        alignSelf: "center",
        marginBottom: 20,
        marginHorizontal: 5,
        marginTop: 37,
    },

    btnTab: {
        width: Dimensions.get("window").width / 3,
        flexDirection: "row",
        borderWidth: 0.5,
        borderColor: Colors.WHITE,
        justifyContent: "center",
        height: 33,
        alignItems: "center",
        borderRadius: 4,
        marginHorizontal: 5,
    },
    textTab: {
        fontSize: 14,
        color: Colors.WHITE,
        fontFamily: "SVN-Gotham",
        fontWeight: "bold",
    },
    btnTabActive: {
        backgroundColor: Colors.WHITE,
    },
    textActive: {
        color: Colors.BLUE_TEXT,
    },
});

const DATADATE: ItemTab[] = [
    {
        id: 0,
        title: "06/2022 Tuần 1",
    },
    {
        id: 1,
        title: "06/2022 Tuần 2",
    },
    {
        id: 2,
        title: "06/2022 Tuần 3",
    },
    {
        id: 3,
        title: "06/2022 Tuần 4",
    },
    {
        id: 4,
        title: "07/2022 Tuần 1",
    },
    {
        id: 5,
        title: "07/2022 Tuần 2",
    },
    {
        id: 6,
        title: "07/2022 Tuần 3",
    },
    {
        id: 7,
        title: "07/2022 Tuần 4",
    },
];
export default Rating
