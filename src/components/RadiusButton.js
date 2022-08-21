import React from 'react';
import {
  Image,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {AppColors} from '../shared/constants/AppColors';
import {AppText, DeviceConstant} from '../shared/constants/AppGlobal';
/**
 * @author hoang
 * @description Custom radius button for sharing through screens
 * @typedef Prop
 * @property {'redButton' | 'disabledButton' | 'whiteButton'} type
 * @property {string} title
 * @property {JSX.Element} icon
 * @property {StyleProp<ViewStyle>=} buttonCustomStyle
 * @property {StyleProp<TextStyle>=} titleCustomStyle
 * @property {()=>void=} onButtonPress
 * @param {Prop} props
 */
export default function RadiusButton(props) {
  let {
    title,
    type,
    icon,
    onButtonPress,
    buttonCustomStyle = null,
    titleCustomStyle = null,
  } = props;
  let buttonBackground = AppColors.primaryRed;
  let textStyle = AppText.mediumTitle;
  let borderStyle = {
    borderWidth: 1,
    borderColor: AppColors.primaryRed,
  };
  switch (type) {
    case 'redButton':
      buttonBackground = AppColors.primaryRed;
      textStyle = AppText.primaryText;

      break;
    case 'disabledButton':
      buttonBackground = AppColors.primaryBackground;
      textStyle = AppText.primaryText;
      borderStyle = {
        borderWidth: 1,
        borderColor: AppColors.primaryText,
      };

      break;
    case 'whiteButton':
      buttonBackground = AppColors.whiteBackground;
      textStyle = AppText.primaryTextBlack;
      borderStyle = {
        borderWidth: 1,
        borderColor: AppColors.whiteBackground,
      };
      break;
  }
  return (
    <TouchableOpacity
      style={{
        backgroundColor: buttonBackground,
        flexDirection: 'row',
        borderRadius: 25,
        height: 0.0591 * DeviceConstant.screenHeight,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderColor: borderStyle.borderColor,
        borderWidth: borderStyle.borderWidth,
        ...buttonCustomStyle,
      }}
      onPress={onButtonPress}>
      {icon ? <Image source={icon} /> : null}
      <Text style={[textStyle, titleCustomStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
