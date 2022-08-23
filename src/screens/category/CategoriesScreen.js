/* eslint-disable no-shadow */
import React, {useRef, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import HeaderComponent from '../../components/HeaderComponent';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText, DeviceConstant} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {AppImages} from '../../shared/constants/AppImages';

const TabViewList = [
  {
    title: ['New', 'Clothes', 'Shoes', 'Accesories'],
    image: [AppImages.man_1, AppImages.man_2, AppImages.man_3, AppImages.man_4],
  },
  {
    title: ['1', '2', '3', '4'],
    image: [AppImages.man_1, AppImages.man_2, AppImages.man_3, AppImages.man_4],
    sale: {
      title: 'SUMMER SALES',
      content: 'Up to 50% off',
      backgroundColor: AppColors.hotRed,
    },
  },
  {
    title: ['1', '2', '3', '4', '5', '6'],
    image: [
      AppImages.man_1,
      AppImages.man_2,
      AppImages.man_3,
      AppImages.man_4,
      AppImages.big_banner,
      AppImages.small_banner,
    ],
    sale: {
      title: 'SUMMER SALES',
      content: 'Up to 50% off',
      backgroundColor: AppColors.hotRed,
    },
  },
];
const CategoriesScreen = () => {
  const [index, setIndex] = useState(0);
  const renderTabView = ({item, index}) => {
    let category = item?.title.map((i, categoryIndex) => {
      return {title: i, image: item.image[categoryIndex]};
    });
    return (
      <ScrollView
        key={index}
        contentContainerStyle={{alignItems: 'center', marginTop: 16}}>
        {item.sale ? (
          <View
            style={{
              width: 343,
              height: 100,
              borderRadius: 8,
              backgroundColor: item?.sale?.backgroundColor,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
            }}>
            <Text style={[AppText.largeTitle]}>{item?.sale?.title}</Text>
            <Text style={[AppText.primaryText]}>{item?.sale?.content}</Text>
          </View>
        ) : null}
        {category.map(c => (
          <View
            style={{
              width: 343,
              height: 100,
              borderRadius: 8,
              backgroundColor: AppColors.lightDark,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 16,
            }}>
            <View style={{flex: 1, marginLeft: 23, justifyContent: 'center'}}>
              <Text style={[AppText.mediumTitle]}>{c.title}</Text>
            </View>
            <View style={{flex: 1}}>
              <Image
                source={c.image}
                style={{
                  width: '100%',
                  height: '100%',
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    );
  };
  const swiperRef = useRef();
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        type="medium"
        leftIcon={AppIcons.back_arrow}
        rightIcon={AppIcons.search}
        title="Categories"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 44,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            setIndex(0);
          }}>
          <Text
            style={[
              AppText.smallTitle,
              {
                color:
                  index == 0 ? AppColors.primaryText : AppColors.smallTitleText,
              },
            ]}>
            Women
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={[
              AppText.smallTitle,
              {
                color:
                  index == 1 ? AppColors.primaryText : AppColors.smallTitleText,
              },
            ]}>
            Men
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={[
              AppText.smallTitle,
              {
                color:
                  index == 2 ? AppColors.primaryText : AppColors.smallTitleText,
              },
            ]}>
            Kids
          </Text>
        </TouchableOpacity>
      </View>
      <Carousel
        ref={swiperRef}
        firstItem={index}
        data={TabViewList}
        renderItem={renderTabView}
        sliderWidth={DeviceConstant.screenWidth}
        itemWidth={DeviceConstant.screenWidth}
        onSnapToItem={index => setIndex(index)}
        enableSnap
        loop={false}
        contentContainerCustomStyle={{
          backgroundColor: 'blue',
        }}
      />
    </View>
  );
};
export default CategoriesScreen;
