import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppColors} from '../shared/constants/AppColors';
import {AppText} from '../shared/constants/AppGlobal';
import {AppIcons} from '../shared/constants/AppIcons';
import CircleButton from './CircleButton';
import LabelComponent from './LabelComponent';
import StarComponent from './StarComponent';
/**
 * @author hoang
 * @description Product component
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
export default function ProductItemComponent(props) {
  let {
    product,
    isHorizontal,
    isFavorite,
    isBottomRightButtonActive,
    isProductSoldOut,
    onButtomRightButtonPress,
    onProductPress,
    size,
  } = props;
  let rightButtonIcon;
  if (isFavorite && isBottomRightButtonActive) {
    rightButtonIcon = AppIcons.bag_favorite;
  } else if (isFavorite) {
    rightButtonIcon = AppIcons.bag_inactive;
  } else if (isBottomRightButtonActive) {
    rightButtonIcon = AppIcons.heart_active;
  } else {
    rightButtonIcon = AppIcons.heart_inactive;
  }
  return isHorizontal ? (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        width: '100%',
        height: 104,
        borderRadius: 8,
        backgroundColor: AppColors.lightDark,
        opacity: isProductSoldOut ? 0.5 : 1,
      }}
      onPress={onProductPress}>
      <View
        style={{
          width: 104,
          height: 104,
        }}>
        <Image
          source={{uri: product?.image[0]?.imageURL}}
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
          {product?.title}
        </Text>
        <Text numberOfLines={1} style={[AppText.tinyTitle, {marginTop: 4}]}>
          {product?.brand}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
          }}>
          <StarComponent quantity={product?.review[0]?.rating} size="small" />
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
            ]}>{`(${product.review ? product.review.length : 0})`}</Text>
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
            {`${product?.price}$`}
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
            {`${product?.price * (1 - product?.discount / 100)}$`}
          </Text>
        </View>
      </View>
      <CircleButton
        icon={rightButtonIcon}
        size="small"
        type={
          isBottomRightButtonActive && isFavorite ? 'redButton' : 'darkButton'
        }
        iconStyle={{width: 13, height: 12}}
        onButtonPress={onButtomRightButtonPress}
        customStyle={{position: 'absolute', bottom: -18, right: 0}}
      />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={{
        width: size == 'large' ? 164 : 150,
        backgroundColor: AppColors.lightDark,
        borderRadius: 8,
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
          source={{uri: product?.image[0]?.imageURL}}
          imageStyle={{borderRadius: 8}}
          style={{
            width: '100%',
            height: '100%',
          }}>
          <LabelComponent
            label={`-${product?.discount}%`}
            type="redLabel"
            labelViewStyle={{marginTop: 8, marginLeft: 9}}
          />
          <CircleButton
            icon={rightButtonIcon}
            size="small"
            type={
              isBottomRightButtonActive && isFavorite
                ? 'redButton'
                : 'darkButton'
            }
            iconStyle={{width: 13, height: 12}}
            onButtonPress={onButtomRightButtonPress}
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
        <StarComponent quantity={product?.review[0]?.rating} size="small" />
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
          ]}>{`(${product.review ? product.review.length : 0})`}</Text>
      </View>
      <Text numberOfLines={1} style={[AppText.tinyTitle, {marginTop: 7}]}>
        {product?.brand}
      </Text>
      <Text numberOfLines={1} style={[AppText.mediumTitle, {marginTop: 6}]}>
        {product?.title}
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
          {`${product?.price}$`}
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
          {`${Math.ceil(product?.price * (1 - product?.discount / 100))}$`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
