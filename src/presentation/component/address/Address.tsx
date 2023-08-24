import { StyleSheet, Image, View, Dimensions } from 'react-native'
import React from 'react'
import Button from '../button/Button';
import { BACKGROUND_BUTTON_BLUE } from '../../../../assets';

type AddressProps = {
    onPress: () => void;
    uri: string;
    checkType?: boolean;
}

const Address: React.FC<AddressProps> = (props) => {
    const { onPress, uri, checkType } = props;
    let title = 'Khám phá ngay';
    if (checkType) {
        title = 'Tìm hiểu thêm';
    }

    return (
        <View style={{ alignItems: "center" }}>
      <Image
        source={{ uri: uri }}
        style={{
          width: Dimensions.get("window").width * 1,
          height: 615,
          resizeMode: "stretch",
        }}
      />
      <Button
        title={title}
        backgroundImage={BACKGROUND_BUTTON_BLUE}
        stylePressable={{
          width: 200,
          position: "absolute",
          bottom: 24,
        }}
        onPress={onPress}
      />
    </View>
    )
}

export default Address

const styles = StyleSheet.create({})