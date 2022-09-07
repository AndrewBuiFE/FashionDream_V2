/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import {DELIVER_STATUS, ORDER} from '../../assets/data';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {ScreenName} from '../../shared/constants/ScreenName';
const MyOrderScreen = () => {
  // common hooks
  const navigation = useNavigation();
  // utility functions
  const keyExtractor = useCallback(item => item.id, []);
  // rendering functions
  const renderSeparator = useCallback(() => {
    return <DividerComponent height={30} width={8} />;
  }, []);
  const renderStatus = useCallback(
    /**
     * @type {import('react-native').ListRenderItem<import('../../models/types/index.d').DeliverStatus>}
     */
    ({item: deliverStatus, index}) => {
      return (
        <RadiusButton
          type="whiteButton"
          title={deliverStatus.status}
          buttonCustomStyle={{width: 100, height: 30}}
        />
      );
    },
    [],
  );
  const renderOrder = useCallback(
    /**
     * @type {import('react-native').ListRenderItem<import('../../models/types/index.d').Order>}
     */
    ({item: order, index}) => {
      return (
        <View
          style={{
            paddingHorizontal: 19,
            paddingTop: 19,
            backgroundColor: AppColors.lightDark,
            height: 164,
            width: '100%',
            borderRadius: 8,
            shadowColor: 'rgba(0, 0, 0, 0.12)',
            shadowOffset: {width: 0, height: 1},
            shadowRadius: 24,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={AppText.mediumTitle}>{`Order №${order.number}`}</Text>
            <Text
              style={[AppText.primaryText, {color: AppColors.smallTitleText}]}>
              {order.date}
            </Text>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={AppText.primaryText}>
              <Text
                style={[
                  AppText.primaryText,
                  {color: AppColors.smallTitleText},
                ]}>
                Tracking number:
              </Text>
              {order.trackingNumber}
            </Text>
          </View>
          <View
            style={{
              marginTop: 4,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={AppText.primaryText}>
              <Text
                style={[
                  AppText.primaryText,
                  {color: AppColors.smallTitleText},
                ]}>
                Quantity:
              </Text>
              {3}
            </Text>
            <Text style={AppText.primaryText}>
              <Text
                style={[
                  AppText.primaryText,
                  {color: AppColors.smallTitleText},
                ]}>
                Total amount:
              </Text>
              {3}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 14,
            }}>
            <RadiusButton
              title="Details"
              type="disabledButton"
              buttonCustomStyle={{width: 98, height: 36}}
              onButtonPress={() => {
                navigation.navigate(ScreenName.orderDetailScreen, {
                  order: order,
                });
              }}
            />
            <Text style={[AppText.primaryText, {color: AppColors.success}]}>
              {order.status}
            </Text>
          </View>
        </View>
      );
    },
    [],
  );
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        type="large"
        leftIcon={AppIcons.back_arrow}
        rightIcon={AppIcons.search}
        title="My Orders"
      />
      <View>
        <FlatList
          data={DELIVER_STATUS}
          renderItem={renderStatus}
          key={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={renderSeparator}
          contentContainerStyle={{
            marginLeft: 16,
            marginTop: 12,
            height: 30,
          }}
        />
      </View>
      <View style={{flex: 1, marginTop: 30}}>
        <FlatList
          data={ORDER}
          renderItem={renderOrder}
          key={keyExtractor}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={renderSeparator}
          contentContainerStyle={{marginHorizontal: 16}}
        />
      </View>
    </View>
  );
};
export default MyOrderScreen;
