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
 * @property {boolean=} hasText
 * @property {boolean=} isCheck
 * @property {(string) => string=} onCheck
 * @param {Prop} props
 */
export default function CheckBox(props) {
  let {content, type, hasText, isCheck, onCheck} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
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
      {hasText ? (
        <View style={{marginLeft: 13}}>
          <Text style={[AppText.primaryText]}>{content}</Text>
        </View>
      ) : null}
    </View>
  );
}
