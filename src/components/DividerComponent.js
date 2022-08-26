import React from 'react';
import {View} from 'react-native';
/**
 * @author hoang
 * @description View for separate components
 * @typedef Prop
 * @property {number=} height
 * @property {number=} width
 * @param {Prop} props
 * @return {JSX.Element}
 */
export default function DividerComponent(props) {
  let {height, width} = props;
  return (
    <View style={{height: height ? height : 20, width: width ? width : 0}} />
  );
}
