import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AppText} from '../shared/constants/AppGlobal';
import {AppIcons} from '../shared/constants/AppIcons';

/**
 * @author hoang
 * @description Filter
 * @typedef Prop
 * @property {()=> void} onFilterPress
 *  @property {()=> void} onSortPress
 *  @property {()=> void} onViewChange
 * @param {Prop} props
 */
export default function FilterComponent(props) {
  let {onFilterPress, onSortPress, onViewChange} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 343,
      }}>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={onFilterPress}>
        <Image source={AppIcons.filter} />
        <Text style={[AppText.primaryText, {marginLeft: 7}]}>Filters</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={onSortPress}>
        <Image source={AppIcons.sort} />
        <Text style={[AppText.primaryText, {marginLeft: 7}]}>
          Price: lowest to high
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onViewChange}>
        <Image source={AppIcons.view_module} />
      </TouchableOpacity>
    </View>
  );
}
