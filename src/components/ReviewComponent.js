import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AppColors } from '../shared/constants/AppColors';
import { AppText } from '../shared/constants/AppGlobal';
import { AppIcons } from '../shared/constants/AppIcons';
import { AppImages } from '../shared/constants/AppImages';
import StarComponent from './StarComponent';
/**
 * @author Hoang
 * @description Uk thi co ti comment
 * @typedef Prop
 * @property {import('../models/types/index.d').Review} review
 * @param {Prop} props
 */
export default function ReviewComponent(props) {
  let {review} = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: AppColors.lightDark,
        flex: 1,
        paddingHorizontal: 20,
        borderRadius: 8,
        shadowColor: 'rgba(0, 0, 0, 0.05)',
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 25,
        width: '100%',
      }}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: -16,
          left: -16,
          width: 32,
          height: 32,
          borderRadius: 50,
          backgroundColor: '#C4C4C4',
        }}>
        <Image
          source={AppImages.man_1}
          style={{
            width: '100%',
            aspectRatio: 1,
            height: undefined,
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>
      <Text
        style={[
          AppText.primaryText,
          {
            fontWeight: '700',
            marginTop: 23.75,
            lineHeight: 14,
          },
        ]}>
        {review?.reviewer}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 9,
        }}>
        <StarComponent size="small" quantity={4} />
        <Text style={AppText.tinyTitle}>{review?.publishedAt}</Text>
      </View>
      <View
        style={{
          marginTop: 11,
        }}>
        <Text
          style={{
            fontFamily: 'Metropolis',
            fontSize: 14,
            lineHeight: 21,
            letterSpacing: -0.15,
            color: '#F5F5F5',
            opacity: 0.9,
            textAlign: 'left',
          }}>
          {review?.content}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 16,
          marginTop: 10,
        }}>
        <Text>Helpful</Text>
        <Image source={AppIcons.thumb_up} style={{marginLeft: 9}} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
