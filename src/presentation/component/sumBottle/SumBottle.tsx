import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BG_SUMBOTTLE } from '../../../../assets';
import { Colors } from '../../resource/value/Colors';
export type SumBottleProps = {
    sumAqua: number;
    sumOther: number;
};

const SumBottle: React.FC<SumBottleProps> = (props) => {
    const { sumAqua, sumOther } = props;

    const numberAqua = sumAqua.toLocaleString("vi-VN");
    const numberOther = sumOther.toLocaleString("vi-VN");
    return (
        <ImageBackground style={styles.container} source={{ uri: BG_SUMBOTTLE }}>
            <View style={styles.viewAquafina}>
                <Text style={styles.textSum}>{numberAqua}</Text>
                <Text style={styles.text}>Chai AQUAFINA</Text>
            </View>
            <View style={styles.viewOther}>
                <Text style={styles.textSum}>{numberOther}</Text>
                <Text style={styles.text}>Chai khác</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width * 1,
        height: 200,
        resizeMode: "stretch",
    },
    viewAquafina: {
        position: "absolute",
        left: 95,
        bottom: 73,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    viewOther: {
        right: 110,
        bottom: 73,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
    },

    textSum: {
        color: Colors.BLUE_400,
        fontFamily: "SVN-Gotham",
        fontSize: 14,
        fontWeight: "bold",
    },

    text: {
        color: Colors.BLUE_400,
        fontFamily: "SVN-Gotham",
        fontSize: 12,
    },
});
export default SumBottle
