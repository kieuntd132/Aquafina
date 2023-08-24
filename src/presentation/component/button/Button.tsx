import { ImageBackground, Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../../resource/value/Colors';
export type ButtonProps = {
    title: string;
    stylePressable?: StyleProp<ViewStyle>;
    backgroundImage?: string;
    styleText?: StyleProp<TextStyle>;
    onPress?: (screen?: string) => void;
};

const Button: React.FC<ButtonProps> = (props) => {
    const { backgroundImage, title, onPress } = props;

    const handlePress = () => {
        onPress && onPress();
    };
    return backgroundImage ? (
        <ImageBackground
            style={[styles.container, props.stylePressable]}
            source={{ uri: backgroundImage }}
        >
            <Pressable onPress={handlePress}>
                <Text style={[styles.styleText, props.styleText]}>
                    {title}
                </Text>
            </Pressable>
        </ImageBackground>
    ) : (
        <Pressable
            onPress={handlePress}
            style={[styles.container, props.stylePressable]}
        >
            <Text style={[styles.styleText, props.styleText]}>
                {title}
            </Text>
        </Pressable>
    );
};
export default Button

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        resizeMode: "cover",
        overflow: "hidden",
        flexShrink: 0
    },
    styleText: {
        fontFamily: 'SVN-Gotham',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 16.8,
        color: Colors.WHITE,
    }
})