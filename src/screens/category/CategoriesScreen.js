/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {TABVIEWLIST} from '../../assets/data';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText, DeviceConstant} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {ScreenName} from '../../shared/constants/ScreenName';

const CategoriesScreen = () => {
  // common hooks
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const [index, setIndex] = useState(0);
  const swiperRef = useRef();

  // render functions
  const renderTabView = useCallback(({item, index}) => {
    let category = item?.title.map((i, categoryIndex) => {
      return {title: i, image: item.image[categoryIndex]};
    });
    return (
      <ScrollView
        key={index}
        showsVerticalScrollIndicator={false}
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
        {category.map((c, index1) => (
          <TouchableOpacity
            key={index1}
            onPress={() => {
              navigation.navigate(ScreenName.partialCategoryScreen);
            }}
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
          </TouchableOpacity>
        ))}
        <DividerComponent height={20} />
      </ScrollView>
    );
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        type="medium"
        leftIcon={AppIcons.back_arrow}
        rightIcon={AppIcons.search}
        title="Categories"
        onLeftIconPress={goBack}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 44,
          alignItems: 'center',
        }}>
        {['Women', 'Men', 'Kids'].map((cate, i) => {
          return (
            <TouchableOpacity style={{}} key={i}>
              <Text
                style={[
                  AppText.smallTitle,
                  {
                    color:
                      index == i
                        ? AppColors.primaryText
                        : AppColors.smallTitleText,
                    textAlign: 'center',
                  },
                ]}>
                {cate}
              </Text>
              <View
                style={{
                  height: 3,
                  width: 125,
                  backgroundColor:
                    index == i ? AppColors.primaryRed : 'transparent',
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <Carousel
        ref={swiperRef}
        firstItem={index}
        data={TABVIEWLIST}
        renderItem={renderTabView}
        sliderWidth={DeviceConstant.screenWidth}
        itemWidth={DeviceConstant.screenWidth}
        onSnapToItem={index => setIndex(index)}
        enableSnap
        loop={false}
      />
    </View>
  );
};
export default CategoriesScreen;
const styles = StyleSheet.create({});
