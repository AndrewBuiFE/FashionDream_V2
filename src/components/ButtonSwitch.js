import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../shared/constants/AppColors';

/**
 * @author hoang
 * @description Button Switch
 * @typedef Prop
 * @property {boolean} buttonType
 * @property {string=} leftTitle
 * @property {string=} rightTitle
 * @property {Function} toggleButtonType
 * @property {import('react-native').ViewStyle} backgroundColor
 * @property {string=} width
 * @property {number=} marginHorizontal
 * @property {import('react-native').StyleProp<import('react-native').ViewStyle>} customStyle
 * @param {Prop} props
 */

export default function ButtonSwitch(props) {
  const {
    buttonType,
    leftTitle,
    rightTitle,
    toggleButtonType,
    backgroundColor,
    width,
    marginHorizontal,
    customStyle,
  } = props;

  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : AppColors.primaryBackground,
        },
        customStyle,
      ]}>
      <View
        style={{
          ...styles.btn_switch,
          width: width ? width : 'auto',
          marginHorizontal: marginHorizontal !== 24 ? marginHorizontal : 24,
        }}>
        <TouchableOpacity
          style={{
            ...styles.btn,
            backgroundColor: `${buttonType ? '#7664FD' : AppColors.lightDark}`,
          }}
          onPress={() => {
            toggleButtonType();
          }}
          disabled={buttonType}>
          <Text
            style={{
              ...styles.btn_text,
              color: `${buttonType ? AppColors.lightDark : '#888CAF'}`,
            }}>
            {leftTitle}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.btn,
            backgroundColor: `${!buttonType ? '#7664FD' : AppColors.lightDark}`,
          }}
          onPress={() => {
            toggleButtonType();
          }}
          disabled={!buttonType}>
          <Text
            style={{
              ...styles.btn_text,
              color: `${!buttonType ? 'white' : '#888CAF'}`,
            }}>
            {rightTitle}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  btn_switch: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 24,
    // backgroundColor: '#F3F5F8',
    // borderColor: '#D3D2FF',
  },
  btn: {
    width: '50%',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  btn_text: {
    fontFamily: 'Metropolis',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
  },
});
