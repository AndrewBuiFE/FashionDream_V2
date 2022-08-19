import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../shared/constants/AppColors';
import {AppText} from '../shared/constants/AppGlobal';
import {AppIcons} from '../shared/constants/AppIcons';

/**
 * @author hoang
 * @description Search bar
 * @typedef Prop
 * @property {string=} placeholder
 * @property {(string) => string } onSearch
 * @param {Prop} props
 */
export default function SearchBar(props) {
  let {placeholder, onSearch} = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: AppColors.lightDark,
        width: 343,
        height: 40,
        borderRadius: 23,
        shadowColor: ' rgba(0, 0, 0, 0.05)',
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{marginLeft: 15}}>
        <Image source={AppIcons.search} />
      </View>
      <View>
        <TextInput
          style={[AppText.primaryText]}
          placeholder={placeholder}
          placeholderTextColor={AppColors.smallTitleText}
          onChangeText={onSearch}
        />
      </View>
    </TouchableOpacity>
  );
}
