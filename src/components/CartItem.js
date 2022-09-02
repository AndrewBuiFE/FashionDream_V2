import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AppColors } from '../shared/constants/AppColors';
import { AppText } from '../shared/constants/AppGlobal';
import { AppIcons } from '../shared/constants/AppIcons';
import CircleButton from './CircleButton';

/**
 * @author hoang
 * @description Cart Item
 * @typedef Prop
 * @property {import('../models/types/index.d').Product} product
 * @param {Prop} props
 */
export default function CartItem(props) {
  let {product} = props;
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 104,
        backgroundColor: AppColors.lightDark,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: {height: 1, width: 0},
        shadowRadius: 25,
        borderRadius: 8,
        width: '100%',
      }}>
      <View
        style={{
          width: 104,
          height: 104,
        }}>
        <Image
          source={product?.image[0]}
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        />
      </View>
      <View style={{flex: 1, paddingLeft: 11, paddingTop: 11}}>
        <Text style={AppText.mediumTitle} numberOfLines={1}>
          {product?.title}
        </Text>
        <View style={{flexDirection: 'row', marginTop: 4}}>
          <Text style={[AppText.tinyTitle, {flex: 1}]}>
            Color: <Text style={{color: '#F6F6F6'}}>Blue</Text>
          </Text>
          <Text style={[AppText.tinyTitle, {flex: 1}]}>
            Size: <Text style={{color: '#F6F6F6'}}>L</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 14,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 109,
              justifyContent: 'space-between',
            }}>
            <CircleButton
              icon={AppIcons.minus}
              size="small"
              type="darkButton"
              customStyle={{
                backgroundColor: '#2A2C36',
                shadowColor: 'rgba(18, 18, 18, 0.39)',
                shadowOffset: {width: 0, height: 4},
                shadowRadius: 12,
              }}
            />
            <Text>{1234}</Text>
            <CircleButton
              icon={AppIcons.plus}
              size="small"
              type="darkButton"
              customStyle={{
                backgroundColor: '#2A2C36',
                shadowColor: 'rgba(18, 18, 18, 0.39)',
                shadowOffset: {width: 0, height: 4},
                shadowRadius: 12,
              }}
            />
          </View>
          <Text
            style={[
              AppText.primaryText,
              {marginRight: 16},
            ]}>{`${product?.originalPrice}$`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
