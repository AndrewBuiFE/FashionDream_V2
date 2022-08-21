import React from 'react';
import {TouchableOpacity, View} from 'react-native';

/**
 * @author hoang
 * @description Color
 * @typedef Prop
 * @property {boolean} isCheck
 * @property {import('react-native').StyleProp<import('react-native').ViewStyle>} backgroundColor
 * @property {() => void } onColorPress
 * @param {Prop} props
 */
export default function ColorComponent(props) {
  let {isCheck, backgroundColor, onColorPress} = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: isCheck ? 'white' : 'transparent',
        borderRadius: 50,
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onColorPress}>
      <View
        style={{
          backgroundColor: backgroundColor,
          width: 36,
          height: 36,
          borderRadius: 50,
        }}
      />
    </TouchableOpacity>
  );
}
