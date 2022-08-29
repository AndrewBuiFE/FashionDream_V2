import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {AppColors} from '../shared/constants/AppColors';
import {AppText} from '../shared/constants/AppGlobal';

/**
 * @author hoang
 * @description Tag
 * @typedef Prop
 * @property {'redTag' | 'blackTag' | 'whiteTag'} type
 * @property {'round' | 'square'} shape
 * @property {'large' | 'medium'} size
 * @property {string} tag
 * @property {() => void } onTagPress
 * @property {boolean} hasBorder
 * @property {import('react-native').StyleProp<import('react-native').ViewStyle>} tagViewStyle
 * @param {Prop} props
 */
export default function TagComponent(props) {
  let {tag, size, shape, type, tagViewStyle, hasBorder, onTagPress} = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor:
          type == 'blackTag'
            ? AppColors.backgroundColor
            : type == 'redTag'
            ? AppColors.primaryRed
            : AppColors.whiteBackground,
        height: size == 'large' || shape == 'square' ? 40 : 30,
        width: shape == 'round' ? 100 : 40,
        borderRadius:
          (size == 'large' && shape == 'round') || shape == 'square' ? 8 : 29,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: hasBorder ? AppColors.whiteBackground : undefined,
        ...tagViewStyle,
      }}
      onPress={onTagPress}>
      <Text
        style={[
          type == 'blackTag' ? AppText.primaryText : AppText.primaryTextBlack,
        ]}>
        {tag}
      </Text>
    </TouchableOpacity>
  );
}
