import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import PickerComponent from '../../components/PickerComponent';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {AppImages} from '../../shared/constants/AppImages';
import {ScreenName} from '../../shared/constants/ScreenName';
const ProfileScreen = () => {
  // common hooks
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        type="large"
        title="My profile"
        customAction="search"
        rightIcon={AppIcons.search}
      />
      <View style={{flexDirection: 'row', marginHorizontal: 16, marginTop: 24}}>
        <View style={{width: 64, height: 64}}>
          <Image
            source={AppImages.man_1}
            style={{
              width: '100%',
              aspectRatio: 1,
              height: undefined,
              borderRadius: 50,
            }}
          />
        </View>
        <View style={{marginLeft: 18}}>
          <Text style={AppText.mediumTitle}>Bui Viet Hoang</Text>
          <Text
            style={[AppText.primaryText, {color: AppColors.smallTitleText}]}>
            buiviethoang12062000@gmail.com
          </Text>
        </View>
      </View>
      <DividerComponent height={28} />
      <PickerComponent
        title="My orders"
        description="Already have 12 orders"
        customStyle={{height: 72}}
        onPickerPress={() => {
          navigation.navigate(ScreenName.myOrderScreen);
        }}
      />
      <DividerComponent height={5} />
      <PickerComponent
        title="Shipping addresses"
        description="3 addresses"
        customStyle={{height: 72}}
        onPickerPress={() => {
          navigation.navigate(ScreenName.shippingAddressScreen);
        }}
      />
      <DividerComponent height={5} />
      <PickerComponent
        title="Payment methods"
        description="Visa **34"
        customStyle={{height: 72}}
        onPickerPress={() => {
          navigation.navigate(ScreenName.paymentCardScreen);
        }}
      />
      <DividerComponent height={5} />
      <PickerComponent
        title="Promocodes"
        description="You have special promcodes"
        customStyle={{height: 72}}
      />
      <DividerComponent height={5} />
      <PickerComponent
        title="My reviews"
        description="Reviews for 4 items"
        customStyle={{height: 72}}
      />
      <DividerComponent height={5} />
      <PickerComponent
        title="Settings"
        description="Notifications, password"
        customStyle={{height: 72}}
        onPickerPress={() => {
          navigation.navigate(ScreenName.settingScreen);
        }}
      />
    </View>
  );
};
export default ProfileScreen;
