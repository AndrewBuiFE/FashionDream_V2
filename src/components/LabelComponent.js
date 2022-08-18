import React from 'react';
import {Text, View} from 'react-native';
import {AppColors} from '../shared/constants/AppColors';
import {AppText} from '../shared/constants/AppGlobal';

/**
 * @author hoang
 * @description Label
 * @typedef Prop
 * @property {'redLabel' | 'blackLabel'} type
 * @property {string} label
 * @property {import('react-native').StyleProp<import('react-native').ViewStyle>} labelViewStyle
 * @param {Prop} props
 */
export default function LabelComponent(props) {
  let {label, type, labelViewStyle} = props;
  return (
    <View
      style={[
        {
          backgroundColor:
            type == 'redLabel' ? AppColors.hotRed : AppColors.primaryBackground,
          height: 24,
          width: 40,
          borderRadius: 29,
          alignItems: 'center',
          justifyContent: 'center',
        },
        labelViewStyle,
      ]}>
      <Text
        style={[
          type == 'blackLabel'
            ? AppText.secondaryText
            : AppText.secondaryTextBlack,
        ]}>
        {label}
      </Text>
    </View>
  );
}
