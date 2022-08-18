import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {AppColors} from '../shared/constants/AppColors';
import {AppText} from '../shared/constants/AppGlobal';

/**
 * @author hoang
 * @description Text field
 * @typedef Prop
 * @property {string=} inputLabel
 * @property {string} inputText
 * @property {string=} alertText
 * @property {boolean=} isAlerting
 * @property {boolean=} isShowRightIcon
 * @property {StyleProp<ImageStyle>} rightIcon
 * @property {boolean} isShowLabel
 * @property {StyleProp<ViewStyle>} viewStyle
 * @property {(string)=>string} onTextEdit
 * @param {Prop} props
 */
export default function EditTextComponent(props) {
  let {
    inputText,
    inputLabel,
    alertText,
    isAlerting,
    isShowRightIcon,
    isShowLabel,
    rightIcon,
    viewStyle,
    onTextEdit,
  } = props;
  return (
    <View>
      <View
        style={[
          {
            height: 64,
            width: 343,
            backgroundColor: AppColors.lightDark,
            paddingLeft: 20,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: isAlerting ? AppColors.hotRed : undefined,
            borderRadius: 4,
            shadowColor: 'rgba(0, 0, 0, 0.05)',
            shadowOffset: {width: 0, height: 1},
            shadowRadius: 8,
          },
          viewStyle,
        ]}>
        <View style={{flex: 1}}>
          {isShowLabel ? (
            <Text style={[AppText.tinyTitle, {paddingTop: 14}]}>
              {inputLabel}
            </Text>
          ) : null}
          <TextInput
            numberOfLines={1}
            value={inputText}
            style={[
              AppText.primaryText,
              {
                paddingVertical: 0,
                paddingLeft: 0,
              },
            ]}
            onChangeText={onTextEdit}
          />
        </View>
        {isShowRightIcon && isAlerting ? (
          <View style={{marginRight: 21}}>
            <Image source={rightIcon} />
          </View>
        ) : null}
      </View>
      {isAlerting ? (
        <Text style={[AppText.errorText, {marginTop: 4, paddingLeft: 20}]}>
          {alertText}
        </Text>
      ) : null}
    </View>
  );
}
