import { StyleSheet, Image, View, Dimensions, Pressable, Text } from 'react-native'
import React from 'react'
import { BG_FOOTER, ICON_FB, ICON_WARNING, ICON_YOUTUBE } from '../../../../assets';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../resource/value/Colors';
import Button from '../button/Button';
import TextView from '../text/TextView';
type OnClickProps = {
  onClick1: () => void;
  onClick2: () => void;
  onClick3: () => void;
  onClick4: () => void;
  onClick5: () => void;
  onClick6: () => void;
}
const FooterMenu: React.FC<OnClickProps> = (props) => {
  const { onClick1, onClick2, onClick3, onClick4, onClick5, onClick6 } = props;
  return (
    <View style={{
      width: Dimensions.get('window').width * 1,
      height: 400
    }}>
      <Image
        source={{ uri: BG_FOOTER }}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: 'stretch',
        }}
      />
      <LinearGradient
      style={{
        width: Dimensions.get("window").width * 1,
        position: "absolute",
        top: 0,
        height: 400,
      }}
      colors={[Colors.WHITE_LINEAR_2, Colors.WHITE_LINEAR_2]}
    >
      <Button
        title="Thế Giới Xanh"
        styleText={styles.styleText}
        stylePressable={styles.stylePressable}
        onPress={onClick1}
      />
      <Button
        title="Quà Tặng Xanh"
        styleText={styles.styleText}
        stylePressable={styles.stylePressable}
        onPress={onClick2}
      />
      <Button
        title="Bản Đồ Xanh"
        styleText={styles.styleText}
        stylePressable={styles.stylePressable}
        onPress={onClick3}
      />
      <Button
        title="Điểm Thưởng Xanh"
        styleText={styles.styleText}
        stylePressable={styles.stylePressable}
        onPress={onClick4}
      />
      <Button
        title="Bảng Xếp Hạng"
        styleText={styles.styleText}
        stylePressable={[
          styles.stylePressable,
          {
            borderBottomColor: Colors.BLUE_200,
            borderBottomWidth: 1,
          },
        ]}
        onPress={onClick5}
      />
      <TextView
        title="AQUAFINA là thương hiệu nước đóng chai của Pepsico-Suntory."
        styleContainer={{ marginHorizontal: 62, marginTop: 20 }}
        textStyle={styles.styleTextBottom}
      />
      <TextView
        title="Follow us"
        styleContainer={{ marginHorizontal: 62, marginTop: 6 }}
        textStyle={styles.styleTextBottom}
      />
      <View style={styles.viewFollow}>
        <Image style={{ width: 24, height: 24 }} source={{ uri: ICON_FB }} />
        <Image style={{ width: 24, height: 24 }} source={{ uri: ICON_YOUTUBE }} />
      </View>

      <Pressable
        style={[
          styles.viewFollow,
          { width: "100%", justifyContent: "center", marginTop: 18 },
        ]}
        onPress={onClick6}
      >
        <Image style={{ width: 24, height: 24 }} source={{ uri: ICON_WARNING }} />
        <Text
          style={{
            color: Colors.RED,
            fontSize: 14,
            marginStart: 5,
            fontFamily: "SVN-Gotham",
          }}
        >
          Báo Lỗi
        </Text>
      </Pressable>
      <TextView
        title="Copyright © 2022 Aquafina Vietnam"
        textStyle={[
          styles.styleTextBottom,
          { marginTop: 17, fontFamily: "SVN-Gotham",
          fontWeight:'500' },
        ]}
      />
    </LinearGradient>
  </View>
);
};

const styles = StyleSheet.create({
stylePressable: {
  marginHorizontal: 0,
  height: 44,
  borderTopColor: Colors.BLUE_200,
  borderTopWidth: 1,
  borderRadius: 0,
},
styleText: {
  color: Colors.BLUE_400,
  fontFamily: "SVN-Gotham",
  fontSize: 14,
},

styleTextBottom: {
  color: Colors.BLUE_400,
  fontSize: 10,
  textTransform: "none",
  textAlign: "center",
  fontWeight:'700'
},
viewFollow: {
  flexDirection: "row",
  alignItems: "center",
  width: 60,
  alignSelf: "center",
  justifyContent: "space-between",
  marginTop: 5,
},
});
export default FooterMenu
