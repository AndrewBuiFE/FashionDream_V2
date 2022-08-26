import _ from 'lodash';
import React, {createRef, useEffect, useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';

/**
 * @type {React.RefObject<{show:(msg:string)=>void}>}
 */
export const ScaleToastRef = createRef();

export const ToastDuration = {
  SHORT: 2500,
  LONG: 4000,
};

/**
 * @author sonnh
 *
 * @description Place this component inside root stack so it can be access anywhere
 * @returns
 */
export default function ScaleToast() {
  const [showing, setShowing] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    ScaleToastRef.current = {
      /**
       * @param {string} param
       */
      show(param) {
        _.isString(param) && setMsg(param);

        setTimeout(() => setShowing(true));
        setTimeout(() => setShowing(false), ToastDuration.LONG);
      },
    };
  }, []);

  return (
    <Modal
      animationType="fade"
      visible={showing}
      transparent={false}
      focusable={false}
      onRequestClose={() => false}
      statusBarTranslucent
      presentationStyle={'overFullScreen'}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setShowing(false)}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={[
            {
              bottom: '10%',
              position: 'absolute',
              borderRadius: 20,
              backgroundColor: 'rgba(0,0,0,0.8)',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 1,
            },
            {paddingVertical: 12},
            {paddingHorizontal: 16},
            {marginHorizontal: 48},
          ]}>
          <Text
            style={[
              AppText.primaryText,
              {
                textAlign: 'center',
                lineHeight: 20,
                color: AppColors.whiteBackground,
              },
            ]}>
            {msg}
          </Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
