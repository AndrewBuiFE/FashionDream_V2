import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {AppColors} from '../shared/constants/AppColors';
import {AppText} from '../shared/constants/AppGlobal';
import {AppIcons} from '../shared/constants/AppIcons';
import {AppImages} from '../shared/constants/AppImages';
import CircleButton from './CircleButton';
import LabelComponent from './LabelComponent';
import StarComponent from './StarComponent';
/**
 * @author hoang
 * @description Product component
 * @typedef Prop
 * @property {import("../models/types/index.d").Product} product
 * @property {boolean} isHorizontal
 * @property {boolean} isFavorite
 * @param {Prop} props
 * @returns {JSX.Element}
 */
export default function ProductItemComponent(props) {
  let {product, isHorizontal, isFavorite} = props;
  return isHorizontal ? (
    <View
      style={{
        flexDirection: 'row',
        width: 343,
        height: 104,
        borderRadius: 8,
        backgroundColor: AppColors.lightDark,
      }}>
      <View
        style={{
          width: 104,
          height: 104,
        }}>
        <Image
          source={product.image}
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        />
      </View>
      <View style={{marginLeft: 11, flex: 1}}>
        <Text numberOfLines={1} style={[AppText.mediumTitle, {marginTop: 11}]}>
          {product.title}
        </Text>
        <Text
          numberOfLines={1}
          style={[AppText.tinyTitle, {marginTop: 4, backgroundColor: 'red'}]}>
          {product.brand}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
          }}>
          <StarComponent quantity={product.star} size="small" />
          <Text
            numberOfLines={1}
            style={[
              {
                fontSize: 10,
                lineHeight: 14,
                color: AppColors.smallTitleText,
                fontFamily: 'Metropolis',
                marginLeft: 2,
              },
            ]}>{`(${product.comment})`}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 8}}>
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
            {`${product.originalPrice * (1 - product.discountPercent / 100)}$`}
          </Text>
        </View>
      </View>
      <CircleButton
        icon={isFavorite ? AppIcons.bag_favorite : AppIcons.heart_inactive}
        size="small"
        type={isFavorite ? 'redButton' : 'darkButton'}
        iconStyle={{width: 13, height: 12}}
        customStyle={{position: 'absolute', bottom: -18, right: 0}}
      />
    </View>
  ) : (
    <View style={{width: 150, backgroundColor: AppColors.lightDark}}>
      <View>
        <ImageBackground
          source={AppImages.man_4}
          style={{
            width: 148,
            height: 184,
            borderRadius: 8,
            backgroundColor: '#C4C4C4',
          }}>
          <LabelComponent
            label={`-${product.discountPercent}%`}
            type="redLabel"
            labelViewStyle={{marginTop: 8, marginLeft: 9}}
          />
          <CircleButton
            icon={isFavorite ? AppIcons.bag_favorite : AppIcons.heart_inactive}
            size="small"
            type={isFavorite ? 'redButton' : 'darkButton'}
            iconStyle={{width: 13, height: 12}}
            customStyle={{position: 'absolute', bottom: -18, right: 0}}
          />
        </ImageBackground>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 7,
        }}>
        <StarComponent quantity={product.star} size="small" />
        <Text
          numberOfLines={1}
          style={[
            {
              fontSize: 10,
              lineHeight: 14,
              color: AppColors.smallTitleText,
              fontFamily: 'Metropolis',
              marginLeft: 2,
            },
          ]}>{`(${product.comment})`}</Text>
      </View>
      <Text numberOfLines={1} style={[AppText.tinyTitle, {marginTop: 7}]}>
        {product.brand}
      </Text>
      <Text numberOfLines={1} style={[AppText.mediumTitle, {marginTop: 6}]}>
        {product.title}
      </Text>
      <View style={{flexDirection: 'row'}}>
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
          {`${product.originalPrice * (1 - product.discountPercent / 100)}$`}
        </Text>
      </View>
    </View>
  );
}
