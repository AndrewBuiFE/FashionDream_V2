import _ from 'lodash';
import React, {useRef} from 'react';
import {
  Animated,
  Easing,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {AppColors} from '../shared/constants/AppColors';
import {AppText, DeviceConstant} from '../shared/constants/AppGlobal';
import {AppIcons} from '../shared/constants/AppIcons';

/**
 * @author hoang
 * @description Header
 * @typedef Prop
 * @property {string=} title
 * @property {'large' | 'medium'} type
 * @property {import('react-native').StyleProp<import('react-native').ViewStyle>=} customViewStyle
 * @property {import('react-native').ImageStyle=} leftIcon
 * @property {import('react-native').ImageStyle=} rightIcon
 * @property {Function=} onLeftIconPress
 * @property {Function=} onRightIconPress
 * @property {'search'} customAction
 * @param {Prop} props
 */
export default function HeaderComponent(props) {
  let {
    title,
    type,
    leftIcon,
    rightIcon,
    onLeftIconPress,
    onRightIconPress,
    customViewStyle,
    customAction,
  } = props;
  // hooks
  const inputBoxTranslateX = useRef(
    new Animated.Value(DeviceConstant.screenWidth),
  ).current;
  const backButtonOpacity = useRef(new Animated.Value(0)).current;
  const inputRef = useRef();
  // functions
  const onFocus = () => {
    const inputBoxConfig = Animated.timing(inputBoxTranslateX, {
      toValue: 0,
      duration: 200,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    });
    const backButtonConfig = Animated.timing(backButtonOpacity, {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    });
    inputBoxConfig.start();
    backButtonConfig.start();
  };
  const onBlur = () => {
    const inputBoxConfig = Animated.timing(inputBoxTranslateX, {
      toValue: DeviceConstant.screenWidth,
      duration: 200,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    });
    const backButtonConfig = Animated.timing(backButtonOpacity, {
      duration: 200,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    });
    inputBoxConfig.start();
    backButtonConfig.start();
  };
  return type == 'medium' ? (
    <Animated.View
      style={{
        flexDirection: 'row',
        width: '100%',
        height: 44,
        // paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        ...customViewStyle,
      }}>
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={'gray'}
        onPress={_.isFunction(onLeftIconPress) ? onLeftIconPress : null}
        style={{
          width: 44,
          height: 44,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={leftIcon} style={{}} />
      </TouchableHighlight>
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <Text
          style={[AppText.mediumTitle, {textAlign: 'center'}]}
          numberOfLines={1}>
          {title}
        </Text>
      </View>
      <TouchableHighlight
        activeOpacity={1}
        underlayColor={'gray'}
        onPress={
          _.isFunction(onRightIconPress)
            ? onRightIconPress
            : _.isString(customAction) && customAction === 'search'
            ? onFocus
            : null // add other actions later
        }
        style={{
          width: 44,
          height: 44,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={rightIcon} />
      </TouchableHighlight>
      <Animated.View
        style={{
          transform: [
            {
              translateX: inputBoxTranslateX,
            },
          ],
          height: 44,
          flexDirection: 'row',
          position: 'absolute',
          alignItems: 'center',
          backgroundColor: 'gray',
          width: DeviceConstant.screenWidth,
        }}>
        <Animated.View style={{opacity: backButtonOpacity}}>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor={'#ccd0d5'}
            onPress={onBlur}
            style={{
              width: 44,
              height: 44,
              borderRadius: 50,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 5,
            }}>
            <Image source={AppIcons.back_arrow} />
          </TouchableHighlight>
        </Animated.View>
        <TextInput
          ref={inputRef}
          placeholder="Search"
          clearButtonMode="always"
          style={{
            flex: 1,
            height: 40,
            backgroundColor: AppColors.lightDark,
            borderRadius: 16,
            paddingHorizontal: 16,
            fontSize: 16,
          }}
        />
      </Animated.View>
    </Animated.View>
  ) : (
    <Animated.View
      style={{
        height: 96,
        width: '100%',
        ...customViewStyle,
      }}>
      <Animated.View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 44,
          // paddingHorizontal: 8,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableHighlight
          activeOpacity={1}
          underlayColor={'gray'}
          onPress={_.isFunction(onLeftIconPress) ? onLeftIconPress : null}
          style={{
            width: 44,
            height: 44,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={leftIcon} style={{}} />
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={1}
          underlayColor={'gray'}
          onPress={
            _.isFunction(onRightIconPress)
              ? onRightIconPress
              : _.isString(customAction) && customAction === 'search'
              ? onFocus
              : null // add other actions later
          }
          style={{
            width: 44,
            height: 44,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={rightIcon} />
        </TouchableHighlight>
        <Animated.View
          style={{
            transform: [
              {
                translateX: inputBoxTranslateX,
              },
            ],
            height: 44,
            flexDirection: 'row',
            position: 'absolute',
            alignItems: 'center',
            backgroundColor: 'gray',
            width: DeviceConstant.screenWidth,
          }}>
          <Animated.View style={{opacity: backButtonOpacity}}>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor={'#ccd0d5'}
              onPress={onBlur}
              style={{
                width: 44,
                height: 44,
                borderRadius: 50,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 5,
              }}>
              <Image source={AppIcons.back_arrow} />
            </TouchableHighlight>
          </Animated.View>
          <TextInput
            ref={inputRef}
            placeholder="Search"
            clearButtonMode="always"
            style={{
              flex: 1,
              height: 40,
              backgroundColor: AppColors.lightDark,
              borderRadius: 16,
              paddingHorizontal: 16,
              fontSize: 16,
            }}
          />
        </Animated.View>
      </Animated.View>
      <View style={{marginTop: 18, paddingLeft: 14}}>
        <Text style={[AppText.largeTitle]} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </Animated.View>
  );
}
