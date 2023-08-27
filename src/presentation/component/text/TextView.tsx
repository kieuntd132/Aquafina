import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../../resource/value/Colors';
export type TextViewProps = {
    styleContainer?: StyleProp<ViewStyle>;
    title: string;
    textStyle?: StyleProp<TextStyle>;
};

const TextView: React.FC<TextViewProps> = (props) => {
    const { title } = props;
    return (
        <View style={[styles.container, props.styleContainer]}>
            <Text style={[styles.textStyle, props.textStyle]}>
                {title}
            </Text>
        </View>
    );
};
export default TextView

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    textStyle: {
        fontFamily: 'SVN-Gotham',
        fontWeight:'bold',
        textTransform: "uppercase",
        color: Colors.BLUE_TEXT,
        fontSize: 22,
    },
});