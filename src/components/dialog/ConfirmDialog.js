/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import _ from 'lodash';
import React, {createRef, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText, DeviceConstant} from '../../shared/constants/AppGlobal';
import DividerComponent from '../DividerComponent';

/**
 * @type {React.RefObject<{show:(props:ConfirmDialogProps)=>void}>}
 */
export const ConfirmDialogRef = createRef();
/**
 * @author hoang
 * @description Confirm Dialog
 * @param {object} param
 * @param {React.MutableRefObject<{show:(props:ConfirmDialogProps)=>void,hide?:()=>void}>} param.dialogRef
 */
export default function ConfirmDialog({dialogRef}) {
  const animHeight = useRef(
    new Animated.Value(DeviceConstant.screenHeight),
  ).current;
  const [visible, setVisible] = useState(false);
  const [props, setProps] = useState({
    title: '',
    message: '',
    options: [],
    onDismiss: undefined,
  });

  // animation function
  const slideInFromBottom = () => {
    if (Platform.OS == 'ios') {
      Animated.spring(animHeight, {
        toValue: DeviceConstant.screenHeight / 2 - 150,
        velocity: 23,
        tension: 40,
        friction: 18,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    } else if (Platform.OS == 'android') {
      Animated.timing(animHeight, {
        toValue: DeviceConstant.screenHeight / 2 - 150,
        duration: 225,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }).start();
    }
  };

  const hide = callback => {
    Animated.spring(animHeight, {
      toValue: DeviceConstant.screenHeight,
      velocity: 13,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start(callback);
  };
  // utility function
  const onDismiss = () => {
    _.isFunction(props.onDismiss) && props.onDismiss();
    setVisible(false);
  };
  useEffect(() => {
    if (!!visible) {
      slideInFromBottom();
    } else if (!visible) {
      hide();
    }
  }, [visible]);
  useEffect(() => {
    dialogRef.current = {
      /**
       *
       * @param {import('./index.d').ConfirmDialogProps} props
       */
      show(props) {
        setProps({
          message: '',
          title: '',
          options: [],
          onDismiss: undefined,
          ...props,
        });
        setTimeout(() => setVisible(true));
      },
      hide() {
        onDismiss();
      },
    };
  }, []);
  return (
    <Modal
      animationType="none"
      statusBarTranslucent
      visible={visible}
      onDismiss={onDismiss}
      onRequestClose={onDismiss}
      transparent
      presentationStyle="overFullScreen">
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}>
        <TouchableWithoutFeedback
          onPress={onDismiss}
          style={{flex: 1, width: '100%', height: '100%'}}>
          <View
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
              paddingHorizontal: 47,
            }}>
            <TouchableWithoutFeedback>
              <Animated.View
                style={{
                  width: '100%',
                  maxHeight: DeviceConstant.screenHeight / 3,
                  transform: [
                    {
                      translateY: animHeight,
                    },
                  ],
                }}>
                <View
                  style={[
                    {
                      backgroundColor: AppColors.whiteBackground,
                      borderRadius: 10,
                      alignItems: 'center',
                      paddingTop: 14,
                    },
                    {
                      width: '100%',
                    },
                  ]}>
                  <Text
                    style={[
                      AppText.mediumTitle,
                      {
                        color: AppColors.blackText,
                        fontSize: 17,
                        lineHeight: 20,
                        paddingHorizontal: 18,
                        textAlign: 'center',
                      },
                    ]}>
                    {props.title}
                  </Text>
                  <View
                    style={[
                      {
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 16,
                        paddingVertical: 16,
                        flexShrink: 1,
                      },
                    ]}>
                    <Text
                      style={[
                        AppText.mediumTitle,
                        {
                          color: AppColors.blackText,
                          textAlignVertical: 'center',
                          flexShrink: 1,
                          flexWrap: 'wrap',
                        },
                      ]}>
                      {props.message}
                    </Text>
                  </View>
                  <DividerComponent />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    {_.isArray(props.options) &&
                      props.options.slice(0, 2).map((option, index, arr) => (
                        <TouchableOpacity
                          key={index}
                          onPress={() => {
                            _.isFunction(option.onPress) && option.onPress();
                            onDismiss();
                          }}
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1 / arr.length,
                            borderLeftWidth: index != 0 ? 1 : 0,
                            borderLeftColor: AppColors.smallTitleText,
                            paddingVertical: 16,
                          }}>
                          <Text
                            style={[
                              AppText.primaryText,
                              {
                                color: AppColors.hotRed,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                lineHeight: 20,
                              },
                              !option.type || option.type == 'default'
                                ? {fontWeight: 'bold'}
                                : undefined,
                              option.type == 'cancel'
                                ? {fontWeight: 'normal'}
                                : undefined,
                              option.type == 'destructive'
                                ? {color: AppColors.hotRed}
                                : undefined,
                              option.style,
                            ]}>
                            {option.text}
                          </Text>
                        </TouchableOpacity>
                      ))}
                  </View>
                </View>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
}
