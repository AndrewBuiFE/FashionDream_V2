import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AppText} from '../shared/constants/AppGlobal';

/**
 * @author hoang
 * @description Header
 * @typedef Prop
 * @property {string=} title
 * @property {'large' | 'medium'} type
 * @property {import('react-native').StyleProp<import('react-native').ImageStyle>=} leftIcon
 * @property {import('react-native').StyleProp<import('react-native').ImageStyle>=} rightIcon
 * @property {import('react-native').StyleProp<import('react-native').ViewStyle>=} customViewStyle
 * @property {()=> void=} onLeftIconPress
 * @property {()=> void=} onRightIconPress
 * @param {Prop} props
 */
export default function HeaderComponent(props) {
  let {
    title,
    type,
    leftIcon,
    rightIcon,
    customViewStyle,
    onLeftIconPress,
    onRightIconPress,
  } = props;
  return type == 'medium' ? (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        height: 44,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        ...customViewStyle,
      }}>
      <TouchableOpacity
        onPress={onLeftIconPress}
        style={{
          width: 24,
          height: 24,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={leftIcon} style={{}} />
      </TouchableOpacity>
      <View>
        <Text style={[AppText.mediumTitle]}>{title}</Text>
      </View>
      <TouchableOpacity
        onPress={onRightIconPress}
        style={{
          width: 24,
          height: 24,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={rightIcon} />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={{height: 96, width: '100%', ...customViewStyle}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 44,
          paddingHorizontal: 8,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={onLeftIconPress}
          style={{
            width: 24,
            height: 24,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={leftIcon} style={{}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onRightIconPress}
          style={{
            width: 24,
            height: 24,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={rightIcon} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 18, paddingLeft: 14}}>
        <Text style={[AppText.largeTitle]}>{title}</Text>
      </View>
    </View>
  );
}
