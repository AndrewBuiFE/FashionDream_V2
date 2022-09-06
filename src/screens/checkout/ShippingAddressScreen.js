import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SHIPPING_ADDRESS} from '../../assets/data';
import CheckBox from '../../components/CheckBox';
import CircleButton from '../../components/CircleButton';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import ShippingAddressModal from '../modals/ShippingAddressModal';

/**
 * @author hoang
 * @description Shipping Address
 */
const ShippingAddressScreen = () => {
  // common var
  const deviceHeight =
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : require('react-native-extra-dimensions-android').get(
          'REAL_WINDOW_HEIGHT',
        );

  // common hooks
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const [isModalVisible, showShipModal] = useState(false);
  // utitlity functions
  const dismissModal = () => {
    showShipModal(false);
  };
  // rendering functions
  const renderShipItem = useCallback(
    /**
     * @type {import('react-native').ListRenderItem<import('../../models/types/index.d').ShippingAddress>}
     */
    ({item: ship, index}) => {
      return (
        <View
          style={{
            marginTop: 21,
            backgroundColor: AppColors.lightDark,
            paddingLeft: 28,
            paddingRight: 23,
            height: 140,
            borderRadius: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 18,
              justifyContent: 'space-between',
            }}>
            <Text style={AppText.primaryText}>{ship.fullName}</Text>
            <TouchableOpacity>
              <Text
                style={[AppText.primaryText, {color: AppColors.primaryRed}]}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 7}}>
            <Text>{`${ship.address}, ${ship.state}, ${ship.city}, ${ship.country}`}</Text>
          </View>
          <CheckBox
            type="whiteCheckbox"
            hasTextRight
            textRight="Use as the shipping address"
            customStyle={{marginTop: 14}}
          />
        </View>
      );
    },
    [],
  );
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <ShippingAddressModal
        dismissModal={dismissModal}
        isModalVisible={isModalVisible}
      />
      <HeaderComponent
        type="medium"
        leftIcon={AppIcons.back_arrow}
        onLeftIconPress={goBack}
        title="Shipping Addresses"
      />
      <View
        style={{
          paddingHorizontal: 16,
          flex: 1,
          marginTop: 15,
        }}>
        <FlatList
          data={SHIPPING_ADDRESS}
          renderItem={renderShipItem}
          ItemSeparatorComponent={() => {
            return <DividerComponent height={39} />;
          }}
          ListFooterComponent={() => {
            return <DividerComponent height={20} />;
          }}
          showsVerticalScrollIndicator={false}
        />
        <CircleButton
          icon={AppIcons.plus}
          size="small"
          type="whiteButton"
          customStyle={{
            position: 'absolute',
            bottom: 13,
            right: 16,
            shadowOffset: {width: 0, height: 4},
            shadowRadius: 4,
            shadowColor: 'rgba(0, 0, 0, 0.22)',
          }}
          onButtonPress={() => {
            showShipModal(true);
          }}
        />
      </View>
    </View>
  );
};
export default ShippingAddressScreen;
