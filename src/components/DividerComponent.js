import React from 'react';
import {View} from 'react-native';
/**
 * @author hoang
 * @description View for separate components
 * @typedef Prop
 * @property {number} height
 * @param {Prop} props
 * @return {JSX.Element}
 */
export default function DividerComponent(props) {
  let {height} = props;
  return <View style={{height: height ? height : 20}} />;
}
