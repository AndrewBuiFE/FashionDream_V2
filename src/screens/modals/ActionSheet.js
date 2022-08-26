/* eslint-disable no-unused-vars */
import RNActionSheet, {
  ActionSheetCustom,
  ActionSheetProps,
} from '@alessiocancian/react-native-actionsheet';
import _ from 'lodash';
import React, {useEffect, useRef, useState} from 'react';
import {ActionSheetIOS, ActionSheetIOSOptions, Platform} from 'react-native';

/**
 * @author hoang
 *
 * @description Place this component inside root stack so it can be access anywhere
 * @returns
 */
export default function ActionSheet() {
  /**
   * @type {[ActionSheetProps & ActionSheetIOSOptions,React.Dispatch<React.SetStateAction<ActionSheetProps & ActionSheetIOSOptions>>]}
   */
  const [props, setProps] = useState({options: [], onPress: undefined});
  /**
   * @type {React.MutableRefObject<ActionSheetCustom>}
   */
  const rnActionSheetRef = useRef(undefined);

  useEffect(() => {
    ActionSheetRef.current = {
      /**
       *
       * @param {ActionSheetProps & ActionSheetIOSOptions} props
       */
      show: props => {
        if (Platform.OS == 'android') {
          setProps(props);

          setTimeout(rnActionSheetRef.current?.show);
        } else if (Platform.OS == 'ios') {
          ActionSheetIOS.showActionSheetWithOptions(props, props.onPress);
        }
      },
    };
  }, []);

  return (
    <RNActionSheet
      ref={rnActionSheetRef}
      userInterfaceStyle="dark"
      tintColor="#F6F6F6"
      styles={
        {
          // titleText,
        }
      }
      // theme="ios"

      // userInterfaceStyle=""
      //   cancelButtonIndex={}
      {...props}
      onPress={index => _.isFunction(props.onPress) && props.onPress(index)}
    />
  );
}

/**
 *
 * @type {React.RefObject<{show:(props:ActionSheetProps|ActionSheetIOSOptions)=>void}>}
 */
export const ActionSheetRef = React.createRef();
