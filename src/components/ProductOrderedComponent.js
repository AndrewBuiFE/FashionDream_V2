import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AppColors } from '../shared/constants/AppColors';
import { AppText } from '../shared/constants/AppGlobal';
/**
 * @author hoang
 * @description Product favorite component
 * @typedef Prop
 * @property {import("../models/types/index.d").Product} product
 * @property {()=>void} onProductPress
 * @param {Prop} props
 * @returns {JSX.Element}
 */
export default function ProductOrderedComponent(props) {
  let {product, onProductPress} = props;
  return (
    <View style={{}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 104,
          borderRadius: 8,
          backgroundColor: AppColors.lightDark,
        }}
        onPress={onProductPress}>
        <View
          style={{
            width: 104,
            height: 104,
          }}>
          <Image
            source={product.image[0]}
            style={{
              width: '100%',
              height: '100%',
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          />
        </View>
        <View style={{marginLeft: 11, flex: 1}}>
          <Text numberOfLines={1} style={[AppText.smallTitle, {marginTop: 11}]}>
            {product.title}
          </Text>
          <Text numberOfLines={1} style={[AppText.tinyTitle, {marginTop: 4}]}>
            {product.brand}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 6}}>
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
              marginTop: 12,
            }}>
            <View style={{flexDirection: 'row', flex: 1}}>
              <Text
                numberOfLines={1}
                style={[
                  AppText.smallTitle,
                  {
                    textDecorationLine: 'line-through',
                    fontSize: 14,
                    lineHeight: 20,
                    fontFamily: 'Metropolis',
                    color: AppColors.smallTitleText,
                  },
                ]}>
                {`${product.originalPrice}$`}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 14,
                  lineHeight: 20,
                  fontFamily: 'Metropolis',
                  color: AppColors.hotRed,
                  marginLeft: 4,
                }}>
                {`${
                  product.originalPrice * (1 - product.discountPercent / 100)
                }$`}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
