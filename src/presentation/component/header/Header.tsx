import { Dimensions, Image, ImageStyle, Pressable, StyleProp, StyleSheet, TextProps, View, ViewStyle } from 'react-native'
import React from 'react'

export interface HeaderProps extends TextProps {
    iconLeft: string,
    iconCenter: string,
    iconRight: string,
    eventLeft?: () => void,
    eventCenter?: () => void,
    eventRight?: () => void,
    styleIconLeft?: StyleProp<ImageStyle>,
    styleIconCenter?: StyleProp<ImageStyle>,
    styleIconRight?: StyleProp<ImageStyle>,

};

const Header: React.FC<HeaderProps> = (props) => {
    const { iconLeft, iconCenter, iconRight, eventLeft, eventCenter, eventRight, styleIconLeft, styleIconCenter, styleIconRight} = props

    const EventLeft = () => {
        if (iconLeft) {
            return (
                <Pressable onPress={eventLeft}>
                    <Image source={{ uri: iconLeft }} style={[styles.icon, styleIconLeft]} />
                </Pressable>
            );
        }
        return null;    
    };
    const EventCenter = () => {
        if (iconCenter) {
            return (
                <Pressable onPress={eventCenter}>
                    <Image source={{ uri: iconCenter }} style={[styles.iconCenter, styleIconCenter]} />
                </Pressable>
            );
        }
        return null;
    };
    const EventRight = () => {
        if (iconRight) {
            return (
                <Pressable onPress={eventRight}>
                    <Image source={{ uri: iconRight }} style={[styles.icon, styleIconRight]} />
                </Pressable>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            <View>
                {EventLeft()}
            </View>
            <View>
                {EventCenter()}
            </View>
            <View>
                {EventRight()}
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginHorizontal: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').height * 0.01,
        marginBottom: Dimensions.get('window').height * 0.01,
    },
    icon: {
        width: 24,
        height: 24,
    },
    iconCenter: {
        width: 75,
        height: 25,
    },
})