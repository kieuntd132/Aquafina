import { Dimensions, Image, ImageStyle, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'

export type ImageViewProps = {
    uri: string;
    viewStyle?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
};

const ImageView: React.FC<ImageViewProps> = (props) => {
    const { uri } = props;
    return (
        <View style={StyleSheet.flatten([styles.container, props.viewStyle])}>
            <Image
                style={StyleSheet.flatten([styles.image, props.imageStyle])}
                source={{ uri: uri }}
            />
        </View>
    );
};

export default ImageView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },

    image: {
        resizeMode: "stretch",
        width: Dimensions.get("window").width * 1,
        height: Dimensions.get("window").height * 1,
    },
});