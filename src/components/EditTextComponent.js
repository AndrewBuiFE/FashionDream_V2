import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {AppColors} from '../shared/constants/AppColors';
import {AppText} from '../shared/constants/AppGlobal';
import {AppIcons} from '../shared/constants/AppIcons';

/**
 * @author hoang
 * @description Text field
 * @typedef Prop
 * @property {string=} inputLabel
 * @property {string} inputText
 * @property {string=} alertText
 * @property {'normal' | 'credit-card' | 'datetime' | 'other'} type
 * @property {import('react-native').StyleProp<import('react-native').ImageStyle>} rightIcon
 * @property {import('react-native').KeyboardTypeOptions} keyboardType
 * @property {boolean=} isAlerting
 * @property {boolean=} isShowRightIcon
 * @property {boolean} isShowLabel
 * @property {string} placeholder
 * @property {import('react-native').StyleProp<import('react-native').ViewStyle>} viewStyle
 * @property {(string)=>string} onTextEdit
 * @property {()=>void} onTextBlur
 * @param {Prop} props
 */
export default function EditTextComponent(props) {
  let {
    inputText,
    inputLabel,
    alertText,
    keyboardType,
    placeholder,
    isAlerting,
    type = 'normal',
    isShowRightIcon,
    rightIcon,
    isShowLabel,
    viewStyle,
    onTextBlur,
    onTextEdit,
  } = props;
  const [text, setText] = useState('');
  return (
    <View>
      <View
        style={[
          {
            height: 64,
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
          {type === 'normal' ? (
            <TextInput
              numberOfLines={1}
              value={inputText}
              placeholder={placeholder}
              style={[
                AppText.primaryText,
                {
                  paddingVertical: 0,
                  paddingLeft: 0,
                },
              ]}
              onChangeText={onTextEdit}
              onBlur={onTextBlur}
              keyboardType={keyboardType}
            />
          ) : (
            <TextInputMask
              type={type}
              options={{
                format: 'DD/MM/YYYY',
              }}
              value={inputText}
              onChangeText={onTextEdit}
              style={[
                AppText.primaryText,
                {
                  paddingVertical: 0,
                  paddingLeft: 0,
                },
              ]}
            />
          )}
        </View>
        {isShowRightIcon ? (
          <View style={{marginRight: 21}}>
            <Image
              source={
                rightIcon
                  ? rightIcon
                  : isAlerting
                  ? AppIcons.redCross
                  : AppIcons.check
              }
            />
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
