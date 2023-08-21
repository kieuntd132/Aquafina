import { ImageBackground, StyleProp, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { BACKGROUND_WHITE } from '../../../../assets';
import { Colors } from '../../resource/value/Colors';

export interface TextFieldProps {
  title: string;
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  ViewStyle?: StyleProp<ViewStyle>;
  TextStyle?: StyleProp<TextStyle>;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const { title, placeholder, onChangeText, value } = props;
  return (
    <View style={[{ marginHorizontal: 20 }, props.ViewStyle]}>
      <Text style={styles.styleText}>{title}</Text>
      <ImageBackground style={{ opacity: 0.9, overflow: "hidden", borderRadius: 8 }}
        source={{ uri: BACKGROUND_WHITE }}
      >
        <TextInput
          style={[styles.styleTextInput, props.TextStyle]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
        />
      </ImageBackground>
    </View>
  )
}

export default TextField

const styles = StyleSheet.create({
  styleText: {
    fontFamily:'SVN-Gotham',
    fontSize:16,
    color:Colors.BLUE_TITLE,
    fontWeight:'700',
    lineHeight:19.2,
    marginBottom:8.1
  },
  styleTextInput: {
    display:'flex',
    height:40,
    paddingStart:8,
    paddingVertical:8,
    borderRadius:8,
    alignItems:'center',
    gap:10,
    flexShrink:0,
    borderWidth:1,
    borderStyle:'solid',
    borderColor:Colors.BLUE_BORDER,
    color:Colors.TEXT_GRAY,
  },
})