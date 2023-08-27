import { StyleSheet, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
export type TextPlusProps = {
    style?: StyleProp<TextStyle>;
    children: {
        bold: boolean;
        contentStyle?: StyleProp<TextStyle>;
        content: string;
    }[];
};

const TextPlus: React.FC<TextPlusProps> = (props) => {
    const { children } = props;
    return (
        <Text style={props.style}>
            {children.map((item, index) => (
                <Text
                    key={index}
                    style={StyleSheet.flatten([
                        item.bold ? styles.boldText : styles.regularText,
                        item.contentStyle,
                    ])}
                >
                    {item.content}
                </Text>
            ))}
        </Text>
    );
};

const styles = StyleSheet.create({
    regularText: {
        fontFamily: "SVN-Gotham",
        fontWeight: '400',
        fontSize: 13,
    },
    boldText: {
        fontFamily: "SVN-Gotham",
        fontWeight: '700',
        fontSize: 13,
    },
});

export default TextPlus
