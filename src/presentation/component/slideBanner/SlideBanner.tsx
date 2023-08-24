import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import Button from '../button/Button';
import { BACKGROUND_BUTTON_BLUE } from '../../../../assets';
interface Banner {
    key?: string;
    image?: string;
    screen?: string | undefined;
}
interface SlideBannerProps {
    data: Banner[];
    onClick: (screen: string) => void;
}

const SlideBanner: React.FC<SlideBannerProps> = (props) => {
    const { data } = props;

    return (
        <View style={styles.container}>
            <Swiper loop autoplay>
                {data.map((item: Banner) => (
                    <View key={item.key} style={styles.slide}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Button
                            onPress={() => {
                                if (item.screen) {
                                    props.onClick(item.screen);
                                }
                            }}
                            title="Tìm hiểu thêm"
                            backgroundImage={BACKGROUND_BUTTON_BLUE}
                            stylePressable={styles.showPressable}
                        />
                    </View>
                ))}
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 600,
        backgroundColor: "transparent",
    },
    slide: {
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    showPressable: {
        position: "absolute",
        bottom: 50,
        width: 122,
    },
});

export default SlideBanner;