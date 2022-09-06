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
import ReactNativeModal from 'react-native-modal';
import {SHIPPING_ADDRESS} from '../../assets/data';
import CheckBox from '../../components/CheckBox';
import CircleButton from '../../components/CircleButton';
import DividerComponent from '../../components/DividerComponent';
import EditTextComponent from '../../components/EditTextComponent';
import HeaderComponent from '../../components/HeaderComponent';
import Modalheader from '../../components/ModalHeader';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';

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
      <ReactNativeModal
        isVisible={isModalVisible}
        animationIn="slideInUp"
        avoidKeyboard
        backdropColor="rgba(0, 0, 0, 0.3)"
        hasBackdrop
        coverScreen
        swipeDirection={'down'}
        onSwipeComplete={dismissModal}
        deviceHeight={deviceHeight}
        statusBarTranslucent={true}
        backdropTransitionInTiming={200}
        onBackdropPress={dismissModal}
        style={{
          margin: 0,
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}>
        <View
          style={{
            backgroundColor: AppColors.tabBar,
            borderTopRightRadius: 34,
            borderTopLeftRadius: 34,
            paddingHorizontal: 16,
            height: '90%',
          }}>
          <Modalheader />
          <Text
            style={[AppText.mediumTitle, {marginTop: 26, textAlign: 'center'}]}>
            Adding shipping address
          </Text>
          <DividerComponent height={14} />
          <EditTextComponent placeholder="Full name" />
          <DividerComponent height={20} />
          <EditTextComponent isShowLabel inputLabel="Address" />
          <DividerComponent height={20} />
          <EditTextComponent isShowLabel inputLabel="City" />
          <DividerComponent height={20} />
          <EditTextComponent isShowLabel inputLabel="State" />
          <DividerComponent height={20} />
          <EditTextComponent isShowLabel inputLabel="Zip Code (Postal Code)" />
          <DividerComponent height={20} />
          <EditTextComponent
            isShowLabel
            inputLabel="Country"
            rightIcon={AppIcons.right_arrow_normal}
            isShowRightIcon
          />
          <RadiusButton
            title="SAVE ADDRESS"
            type="redButton"
            buttonCustomStyle={{marginTop: 40}}
          />
        </View>
      </ReactNativeModal>
      <HeaderComponent
        type="medium"
        leftIcon={AppIcons.back_arrow}
        onLeftIconPress={goBack}
        title="Payment method"
      />
      <View style={{paddingHorizontal: 16, flex: 1}}>
        <DividerComponent height={31} />
        <Text style={AppText.mediumTitle}>Your payment cards</Text>
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
          style={{marginTop: 29}}
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
