import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DELIVERY_METHOD} from '../../assets/data';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {AppImages} from '../../shared/constants/AppImages';

/**
 * @author hoang
 * @description Checkout Screen
 * @returns {JSX.Element}
 */
const CheckoutScreen = () => {
  // common hooks
  const navigation = useNavigation();
  const goBack = navigation.goBack;

  // rendering functions
  const renderDelivery = useCallback(
    /**
     * @type {import('react-native').ListRenderItem<import('../../models/types/index.d').Delivery>}
     */
    ({item: delivery, index}) => {
      return (
        <TouchableOpacity
          style={{
            width: 100,
            height: 72,
            backgroundColor: AppColors.whiteBackground,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={delivery.image} style={{}} />
          <Text style={[AppText.tinyTitle, {marginTop: 11}]}>
            {delivery.deliveryTime}
          </Text>
        </TouchableOpacity>
      );
    },
    [],
  );
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        type="medium"
        title="Checkout"
        leftIcon={AppIcons.back_arrow}
        onLeftIconPress={goBack}
      />
      <ScrollView
        style={{paddingHorizontal: 16}}
        showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 31}}>
          <Text style={AppText.mediumTitle}>Shipping address</Text>
          <View
            style={{
              marginTop: 21,
              backgroundColor: AppColors.lightDark,
              paddingLeft: 28,
              paddingRight: 23,
              height: 108,
              borderRadius: 8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 18,
                justifyContent: 'space-between',
              }}>
              <Text style={AppText.primaryText}>name</Text>
              <TouchableOpacity>
                <Text
                  style={[AppText.primaryText, {color: AppColors.primaryRed}]}>
                  Change
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 7}}>
              <Text>
                3 Newbridge Court Chino Hills, CA 91709, United States
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 56}}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 18,
              justifyContent: 'space-between',
            }}>
            <Text style={AppText.mediumTitle}>Payment</Text>
            <TouchableOpacity>
              <Text
                style={[AppText.primaryText, {color: AppColors.primaryRed}]}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{marginTop: 17, alignItems: 'center', flexDirection: 'row'}}>
            <View
              style={{
                borderRadius: 8,
                backgroundColor: AppColors.whiteBackground,
                width: 64,
                height: 38,
                shadowColor: 'rgba(0, 0, 0, 0.08)',
                shadowOffset: {width: 0, height: 1},
                shadowRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={AppImages.mastercard} />
            </View>
            <Text style={[AppText.primaryText, {marginLeft: 17}]}>
              123 182738 2384 23
            </Text>
          </View>
        </View>
        <View style={{marginTop: 51}}>
          <Text style={AppText.mediumTitle}>Delivery method</Text>
          <FlatList
            data={DELIVERY_METHOD}
            renderItem={renderDelivery}
            horizontal
            ItemSeparatorComponent={() => {
              return <DividerComponent width={22} />;
            }}
            style={{marginTop: 21}}
          />
        </View>
        <View style={{marginTop: 52}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={[AppText.primaryText, {color: AppColors.smallTitleText}]}>
              Order:{' '}
            </Text>
            <Text style={AppText.primaryText}>18273</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 14,
            }}>
            <Text
              style={[AppText.primaryText, {color: AppColors.smallTitleText}]}>
              Delivery:{' '}
            </Text>
            <Text style={AppText.primaryText}>18273</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 14,
              alignItems: 'center',
            }}>
            <Text
              style={[AppText.smallTitle, {color: AppColors.smallTitleText}]}>
              Summary:
            </Text>
            <Text style={AppText.mediumTitle}>18273</Text>
          </View>
        </View>
        <DividerComponent height={23} />
        <RadiusButton title="SUBMIT ORDER" type="redButton" />
        <DividerComponent height={20} />
      </ScrollView>
    </View>
  );
};
export default CheckoutScreen;
