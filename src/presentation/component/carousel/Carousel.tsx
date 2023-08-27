import { StyleSheet, Text, View, Dimensions, Pressable, Image, Modal, ImageBackground } from 'react-native'
import React, { useState, useRef, useEffect, useMemo } from 'react'
import { Present } from '../../../domain/entity/Present'
import { Colors } from '../../resource/value/Colors';
import TextView from '../text/TextView';
import Button from '../button/Button';
import { BACKGROUND_BUTTON_BLUE, BACKGROUND_ITEM, BACKGROUND_PRESENT, GROUP, ICON_CLOSE, TUI, TUI_CONTENT, WAVE } from '../../../../assets';
import { Pagination } from 'react-native-snap-carousel';
import { dataPresent } from '../../../data/dataPresent';

export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.52);

type CarouselProps = {
    onPress?: () => void;
    check?: boolean;
};
const Carousel: React.FC<CarouselProps> = ( props) => {
    const { onPress, check } = props;
    const isCarousel = useRef(null);
    const [indexActive, setIndexActive] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [present, setPresent] = useState<Present>({
        key: "2",
        title: "Túi tote \n Aqufina x Repeet",
        image: TUI,
        content: "1 túi được làm từ 2 chai nhựa",
        imageContent: TUI_CONTENT,
        sum: 2,
    });
    // const presents: Present[] = useSelector<RootState, Present[]>(
    //     (state) => state.present.presents
    //   );

    //   const loadingPresent = useSelector<RootState, boolean>(
    //     (state) => state.present.loading
    //   );

    useEffect(() => {
        // dispatch(getAllPresent());
    }, []);

    let show: "flex" | "none" | undefined = "flex";
    let uriImageBackground: string = BACKGROUND_ITEM;
    if (check) {
        show = "none";
        uriImageBackground = WAVE;
    }

    const showModal = (present: Present) => {
        setModalVisible(true);
        setPresent(present);
    };

    const renderItem = useMemo(
        () =>
            ({ item, index }: { item: Present; index: number }) => {
                const isActive = index === indexActive;
                return (
                    <Pressable
                        style={[
                            styles.stylePressableItem,
                            {
                                backgroundColor: isActive ? Colors.BLUE_400 : Colors.WHITE,
                            },
                        ]}
                        onPress={() => showModal(item)}
                    >
                        <Image
                            source={{ uri: BACKGROUND_PRESENT }}
                            style={styles.styleImagePresentItem}
                        />

                        <Image
                            source={{ uri: item.image }}
                            style={[
                                styles.styleImageItem,
                                isActive ? { marginTop: -35 } : { marginTop: 0 },
                            ]}
                        />
                        <Text style={styles.textTitleItem}>
                            {item.title.replace(/\\n/g, "\u000A")}
                        </Text>
                        <Image
                            source={{ uri: item.imageContent }}
                            style={styles.styleImageContentItem}
                        />
                        <Text
                            style={[
                                styles.textSumItem,
                                isActive ? { display: "flex" } : { display: "none" },
                            ]}
                        >
                            Sản phẩm được làm từ {item.sum} chai nhựa rỗng
                        </Text>
                    </Pressable>
                );
            },
        [indexActive]
    );

    return (
        <View>
            {/* {loadingPresent ? ( */}
            {/* <Loading height={600} /> */}
            {/* ) : ( */}
            <View>
                <TextView
                    title="Quà tặng xanh"
                    styleContainer={{ marginTop: 10, display: show }}
                />
                <Image
                    source={{ uri: GROUP }}
                    style={{
                        width: Dimensions.get("window").width * 0.8,
                        height: Dimensions.get("window").height * 0.2,
                        resizeMode: "stretch",
                        alignSelf: "center",
                        display: show,
                    }}
                />
                <ImageBackground
                    source={{ uri: uriImageBackground }}
                    imageStyle={check ? { marginTop: 210 } : { marginTop: 0 }}
                >
                    <View style={styles.container}>
                        {/* <Carousel
                            ref={isCarousel}
                            data={dataPresent}
                            //@ts-ignore
                            renderItem={renderItem}
                            sliderWidth={SLIDER_WIDTH}
                            itemWidth={ITEM_WIDTH}
                            autoplay={true}
                            onSnapToItem={(index: any) => setIndexActive(index)}
                            autoplayDelay={2000}
                            initialNumToRender={3}
                            inactiveSlideOpacity={1}
                            inactiveSlideScale={0.8}
                        /> */}
                        <Button
                            backgroundImage={BACKGROUND_BUTTON_BLUE}
                            title="Khám phá ngay"
                            stylePressable={{
                                marginTop: 30,
                                paddingHorizontal: 20,
                                marginBottom: -10,
                                display: show,
                            }}
                            onPress={onPress}
                        />
                        <Pagination
                            dotsLength={dataPresent.length}
                            activeDotIndex={indexActive}
                            carouselRef={isCarousel}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 10,
                                marginHorizontal: -7,
                                backgroundColor: Colors.BLUE_KV,
                                display: show,
                            }}
                            inactiveDotScale={1}
                            inactiveDotStyle={{
                                backgroundColor: Colors.TEXT_GRAY,
                            }}
                        />
                    </View>
                </ImageBackground>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Pressable
                                style={{ position: "absolute", top: 20, right: 20 }}
                              onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Image
                                    source={{ uri: ICON_CLOSE }}
                                    style={{ width: 24, height: 24 }}
                                />
                            </Pressable>
                            <View style={{ flexDirection: "column", alignItems: "center" }}>
                                <TextView
                                    title="Khám phá quà tặng được làm từ vải tái chế của Aquafina"
                                    textStyle={{
                                        fontSize: 14,
                                        textAlign: "center",
                                        fontFamily: "SVN-Gotham",
                                        fontWeight: "bold",
                                    }}
                                    styleContainer={{
                                        marginTop: 40,
                                    }}
                                />
                                <Image
                                    source={{ uri: BACKGROUND_PRESENT }}
                                    style={{
                                        width: 230,
                                        height: 230,
                                        top: 0,
                                    }}
                                />
                                <Text
                                    style={{
                                        color: Colors.BLUE_TEXT,
                                        fontSize: 18,
                                        fontFamily: "SVN-Gotham",
                                        fontWeight: "bold",
                                        width: 230,
                                        textAlign: "center",
                                        marginBottom: 10,
                                    }}
                                >
                                    {present.title.replace(/\\n/g, "\u000A")}
                                </Text>
                                <Text
                                    style={{
                                        color: Colors.BLUE_TEXT,
                                        fontSize: 14,
                                        fontFamily: "SVN-Gotham",
                                        fontWeight: "700",
                                    }}
                                >
                                    {present.content}
                                </Text>

                                <View style={{ position: "absolute", top: 80 }}>
                                    <Image
                                        style={{
                                            width: 300,
                                            height: 190,
                                            marginTop: 20,
                                            resizeMode: "contain",
                                        }}
                                        source={{ uri: present.image }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            {/* ) */}
            {/* } */}
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
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
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },

    active: {
        backgroundColor: Colors.BLUE_400,
    },

    stylePressableItem: {
        marginTop: 40,
        borderRadius: 20,
        alignItems: "center",
        flexDirection: "column",
        width: ITEM_WIDTH,
        height: 285,
        overflow: "visible",
        position: "relative",
    },

    styleImagePresentItem: {
        width: 222,
        height: 170,
        resizeMode: "stretch",
        top: 0,
        position: "absolute",
    },

    styleImageItem: {
        width: 240,
        height: 200,
        resizeMode: "contain",
    },

    textTitleItem: {
        fontFamily: "SVN-Gotham",
        fontWeight: "bold",
        fontSize: 16,
        color: Colors.WHITE,
        width: 190,
        textAlign: "center",
        marginTop: 12,
    },

    styleImageContentItem: {
        width: 78,
        height: 23,
        marginTop: 5,
        resizeMode: "stretch",
        marginBottom: 5,
    },

    textSumItem: {
        fontFamily: "SVN-Gotham",
        fontWeight: "bold",
        fontSize: 12,
        color: Colors.WHITE,
        width: 170,
        textAlign: "center",
    },
});


export default Carousel
