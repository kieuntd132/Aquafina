import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../resource/value/Colors';

const BackgroundModal = () => {
    return <View style={styles.modalBackground}></View>;
}

export default BackgroundModal

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: Colors.BG_MODAL,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
})