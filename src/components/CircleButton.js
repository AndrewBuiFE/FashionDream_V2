import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {AppColors} from '../shared/constants/AppColors';

/**
 * @author hoang
 * @description Circle button
 * @typedef Prop
 * @property {'redButton' | 'darkButton'} type
 * @property {'big' | 'small'} size
 * @property {boolean} isSocialButton
 * @property {StyleProp<ImageStyle>} icon
 * @property {()=>void=} onButtonPress
 * @param {Prop} props
 */
export default function CircleButton(props) {
  let {icon, type, size, isSocialButton, onButtonPress} = props;
  return (
    <TouchableOpacity
      style={{
        borderRadius: isSocialButton ? 50 : 24,
        backgroundColor:
          type == 'redButton' ? AppColors.hotRed : AppColors.lightDark,
        width: isSocialButton ? 92 : size == 'small' ? 36 : 52,
        height: isSocialButton ? 64 : size == 'small' ? 36 : 52,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onButtonPress}>
      <Image source={icon} />
    </TouchableOpacity>
  );
}
