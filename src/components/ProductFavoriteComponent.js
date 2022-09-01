import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { AppColors } from '../shared/constants/AppColors';
import { AppText } from '../shared/constants/AppGlobal';
import { AppIcons } from '../shared/constants/AppIcons';
import CircleButton from './CircleButton';
import LabelComponent from './LabelComponent';
import StarComponent from './StarComponent';
/**
 * @author hoang
 * @description Product favorite component
 * @typedef Prop
 * @property {import("../models/types/index.d").Product} product
 * @property {'medium' | 'large'} size
 * @property {boolean} isHorizontal
 * @property {boolean} isFavorite
 * @property {boolean} isBottomRightButtonActive
 * @property {boolean} isProductSoldOut
 * @property {()=> void} onButtomRightButtonPress
 * @property {()=>void} onProductPress
 * @param {Prop} props
 * @returns {JSX.Element}
 */
export default function ProductFavoriteComponent(props) {
  let {
    product,
    isHorizontal,
    isProductSoldOut,
    onButtomRightButtonPress,
    onProductPress,
    size,
  } = props;
  return isHorizontal ? (
    <View style={{}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 104,
          borderRadius: 8,
          backgroundColor: AppColors.lightDark,
          opacity: isProductSoldOut ? 0.5 : 1,
        }}
        disabled={isProductSoldOut}
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
          <Text numberOfLines={1} style={[AppText.tinyTitle, {marginTop: 15}]}>
            {product.brand}
          </Text>
          <Text numberOfLines={1} style={[AppText.smallTitle, {marginTop: 3}]}>
            {product.title}
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
        </View>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={AppIcons.grayCross} style={{}} />
        </TouchableOpacity>
        {!isProductSoldOut && (
          <CircleButton
            icon={AppIcons.bag_favorite}
            size="small"
            type={'redButton'}
            iconStyle={{width: 13, height: 12}}
            onButtonPress={onButtomRightButtonPress}
            customStyle={{position: 'absolute', bottom: -18, right: 0}}
          />
        )}
      </TouchableOpacity>
      {isProductSoldOut && (
        <Text style={[AppText.tinyTitle, {marginTop: 7}]}>
          Sorry, this item is currently sold out
        </Text>
      )}
    </View>
  ) : (
    <TouchableOpacity
      style={{
        width: 164,
        height: 281,
        backgroundColor: AppColors.lightDark,
        borderRadius: 8,
        opacity: isProductSoldOut ? 0.5 : 1,
      }}
      onPress={onProductPress}>
      <View
        style={{
          borderRadius: 8,
          width: size == 'large' ? 162 : 148,
          height: 184,
          backgroundColor: '#C4C4C4',
        }}>
        <ImageBackground
          source={product.image[0]}
          imageStyle={{borderRadius: 8}}
          style={{
            width: '100%',
            height: '100%',
          }}>
          <LabelComponent
            label={`-${product.discountPercent}%`}
            type="redLabel"
            labelViewStyle={{marginTop: 8, marginLeft: 9}}
          />
          <TouchableOpacity
            style={{
              width: 24,
              height: 24,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              right: 3,
              // backgroundColor: 'red',
            }}>
            <Image source={AppIcons.grayCross} style={{}} />
          </TouchableOpacity>
          {isProductSoldOut && (
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                borderBottomRightRadius: 8,
                height: 36,
                borderBottomLeftRadius: 8,
                width: '100%',
                alignItems: 'center',
                paddingHorizontal: 9,
                backgroundColor: '#2A2C36',
              }}>
              <Text
                style={[AppText.tinyTitle, {marginTop: 7, color: '#F6F6F6'}]}>
                Sorry, this item is currently sold out
              </Text>
            </View>
          )}
          {!isProductSoldOut && (
            <CircleButton
              icon={AppIcons.bag_favorite}
              size="small"
              type={'redButton'}
              iconStyle={{width: 13, height: 12}}
              onButtonPress={onButtomRightButtonPress}
              customStyle={{position: 'absolute', bottom: -18, right: 0}}
            />
          )}
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
      <Text numberOfLines={1} style={[AppText.tinyTitle, {marginTop: 8}]}>
        {product.brand}
      </Text>
      <Text numberOfLines={1} style={[AppText.smallTitle, {marginTop: 3}]}>
        {product.title}
      </Text>
      <View style={{flexDirection: 'row', marginTop: 4}}>
        <Text style={[AppText.tinyTitle, {flex: 1}]}>
          Color: <Text style={{color: '#F6F6F6'}}>Blue</Text>
        </Text>
        <Text style={[AppText.tinyTitle, {flex: 1}]}>
          Size: <Text style={{color: '#F6F6F6'}}>L</Text>
        </Text>
      </View>
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
    </TouchableOpacity>
  );
}
