import React from 'react';
import {Image, View} from 'react-native';
import {AppIcons} from '../shared/constants/AppIcons';
/**
 * @author hoang
 * @description star
 * @typedef Prop
 * @property {'large' | 'small'} size
 * @property {number} quantity
 * @param {Prop} props
 * @return {JSX.Element}
 */
export default function StarComponent(props) {
  let {quantity, size} = props;
  let starView = [0, 0, 0, 0, 0];
  for (let i = 0; i < quantity; i++) {
    starView[i] = 1;
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: size == 'large' ? 276 : 74,
      }}>
      {starView.map((id, index) => {
        if (id === 0) {
          return (
            <Image
              source={
                size === 'large'
                  ? AppIcons.star_big_inactive
                  : AppIcons.star_inactive
              }
              key={index}
            />
          );
        } else {
          return (
            <Image
              source={
                size === 'large'
                  ? AppIcons.star_big_active
                  : AppIcons.star_active
              }
              key={index}
            />
          );
        }
      })}
    </View>
  );
}
