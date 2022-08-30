import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AppText} from '../shared/constants/AppGlobal';
import {AppIcons} from '../shared/constants/AppIcons';
/**
 * @author hoang
 * @description Check box
 * @typedef Prop
 * @property {string=} content
 * @property {'redCheckbox' | 'whiteCheckbox'} type
 * @property {boolean=} hasTextLeft
 * @property {boolean=} hasTextRight
 * @property {string=} textLeft
 * @property {string=} textRight
 * @property {boolean=} isCheck
 * @property {(string) => string=} onCheck
 * @property {import('react-native').ViewStyle} customStyle
 * @param {Prop} props
 */
export default function CheckBox(props) {
  let {
    textLeft,
    textRight,
    type,
    hasTextLeft,
    hasTextRight,
    isCheck,
    onCheck,
    customStyle,
  } = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...customStyle,
      }}>
      {hasTextLeft ? (
        <View style={{}}>
          <Text style={[AppText.primaryText]}>{textLeft}</Text>
        </View>
      ) : null}
      <TouchableOpacity onPress={onCheck}>
        <Image
          source={
            !isCheck
              ? AppIcons.checkbox_inactive
              : type == 'redCheckbox'
              ? AppIcons.checkbox_red
              : AppIcons.checkbox_white
          }
        />
      </TouchableOpacity>
      {hasTextRight ? (
        <View style={{marginLeft: 13}}>
          <Text style={[AppText.primaryText]}>{textRight}</Text>
        </View>
      ) : null}
    </View>
  );
}
