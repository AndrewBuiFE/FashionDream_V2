import _ from 'lodash';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../shared/constants/AppColors';
import {AppText} from '../shared/constants/AppGlobal';
import {AppIcons} from '../shared/constants/AppIcons';
/**
 * @author hoang
 * @description Pickercomponent for item. Pressing will navigate to another screen.
 * @typedef Prop
 * @property {string} title
 * @property {string} description
 * @property {()=> void} onPickerPress
 * @property {import('react-native').StyleProp<import('react-native').ViewStyle>} customStyle
 * @param {Prop} props
 *
 */
export default function PickerComponent(props) {
  let {title, description, onPickerPress, customStyle} = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: AppColors.tabBar,
        flexDirection: 'row',
        alignItems: 'center',
        height: 58,
        paddingLeft: 16,
        ...customStyle,
      }}
      onPress={onPickerPress}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={AppText.smallTitle}>{title}</Text>
        {_.isString(description) && description.length > 0 ? (
          <Text style={[AppText.tinyTitle, {marginTop: 9}]}>{description}</Text>
        ) : null}
      </View>
      <View
        style={{
          marginRight: 8,
          width: 24,
          height: 24,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={AppIcons.right_arrow_normal} style={{}} />
      </View>
    </TouchableOpacity>
  );
}
