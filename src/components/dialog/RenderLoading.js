import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AppColors } from '../../shared/constants/AppColors';

/** @param {Object} props
 * @param {string=} props.color
 * @param {import('react-native').StyleProp<import('react-native').ViewStyle>} props.style
 * @param {import('react-native').ActivityIndicatorProps} props.activityProps
 *
 * @returns
 */
export default function RenderLoading(props) {
  let {color, style, activityProps} = props;
  return (
    <View
      style={[
        {
          flex: 1,
          flexGrow: 1,
          width: '100%',
          height: '100%',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,.2)',
        },
        style,
      ]}>
      <ActivityIndicator
        size={'large'}
        color={color ? color : AppColors.hotRed}
        {...activityProps}
      />
    </View>
  );
}
