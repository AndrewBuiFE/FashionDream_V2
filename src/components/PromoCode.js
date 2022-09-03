import React from 'react';
import { Image, Text, View } from 'react-native';
import { AppColors } from '../shared/constants/AppColors';
import { AppText } from '../shared/constants/AppGlobal';
import RadiusButton from './RadiusButton';
/**
 * @author hoang
 * @description Promotion code
 * @typedef Prop
 * @property {import('../models/types/index.d').PromoCode} promo
 * @property {()=> void} onApply
 * @param {Prop} props
 */
export default function PromoCode(props) {
  let {promo, onApply} = props;
  let {dayRemaining, percent, promoCode, promoImage, promoName} = promo;
  return (
    <View
      style={{
        height: 80,
        width: '100%',
        borderRadius: 8,
        backgroundColor: AppColors.lightDark,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 25,
        flexDirection: 'row',
      }}>
      <View style={{width: 80, height: 80}}>
        <Image
          source={promoImage}
          style={{
            aspectRatio: 1,
            width: '100%',
            height: undefined,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        />
      </View>
      <View style={{flex: 1, paddingLeft: 14, justifyContent: 'center'}}>
        <Text style={AppText.primaryText}>{promoName}</Text>
        <Text style={[AppText.secondaryTextBlack, {marginTop: 4}]}>
          {promoCode}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          paddingRight: 14,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Text style={AppText.tinyTitle}>{`${dayRemaining} day${
          dayRemaining > 1 ? 's' : ''
        } remaining`}</Text>
        <RadiusButton
          title="Apply"
          type="redButton"
          buttonCustomStyle={{
            width: 93,
            height: 36,
            marginTop: 10,
          }}
          onButtonPress={() => {
            onApply(promoCode);
          }}
        />
      </View>
    </View>
  );
}
