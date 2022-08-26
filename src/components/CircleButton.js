import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {AppColors} from '../shared/constants/AppColors';

/**
 * @author hoang
 * @description Circle button
 * @typedef Prop
 * @property {'redButton' | 'darkButton' | 'whiteButton'} type
 * @property {'big' | 'small'} size
 * @property {boolean} isSocialButton
 * @property {StyleProp<ImageStyle>} icon
 * @property {import('react-native').StyleProp<import('react-native').ViewStyle>} customStyle
 * @property {import('react-native').StyleProp<import('react-native').ViewStyle>} iconStyle,
 * @property {()=>void=} onButtonPress
 * @param {Prop} props
 */
export default function CircleButton(props) {
  let {
    icon,
    type,
    size,
    isSocialButton,
    customStyle,
    iconStyle,
    onButtonPress,
  } = props;
  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: isSocialButton ? 50 : 24,
          backgroundColor:
            type == 'redButton'
              ? AppColors.hotRed
              : type == 'darkButton'
              ? AppColors.lightDark
              : AppColors.whiteBackground,
          width: isSocialButton ? 92 : size == 'small' ? 36 : 52,
          height: isSocialButton ? 64 : size == 'small' ? 36 : 52,
          alignItems: 'center',
          justifyContent: 'center',
        },
        customStyle,
      ]}
      onPress={onButtonPress}>
      <Image source={icon} style={iconStyle} />
    </TouchableOpacity>
  );
}
