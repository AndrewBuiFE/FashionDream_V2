import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {PAYMENT_CARD} from '../../assets/data';
import CheckBox from '../../components/CheckBox';
import CircleButton from '../../components/CircleButton';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {AppImages} from '../../shared/constants/AppImages';
import PaymentCardModal from '../modals/PaymentCardModal';

/**
 * @author Hoang
 * @description PaymentCard
 */
const PaymentCardScreen = () => {
  // common hooks
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const [isModalVisible, showCardModal] = useState(false);
  // utitlity functions
  const dismissModal = () => {
    showCardModal(false);
  };
  // rendering functions
  const renderCardItem = useCallback(
    /**
     * @type {import('react-native').ListRenderItem<import('../../models/types/index.d').PaymentMethod>}
     */
    ({item: paymentCard, index}) => {
      return (
        <View>
          <View
            style={{
              width: '100%',
              height: 216,
              shadowColor: 'rgba(0, 0, 0, 0.008)',
              shadowOffset: {width: 0, height: 1},
              shadowRadius: 25,
              backgroundColor: AppColors.primaryRed,
              borderRadius: 8,
              paddingHorizontal: 24,
            }}>
            <View style={{marginTop: 19, alignItems: 'flex-end'}}>
              <Image source={AppImages.mastercard_white} />
            </View>
            <Text
              style={{
                fontSize: 24,
                letterSpacing: -0.41,
                color: '#F6F6F6',
                fontFamily: 'Metropolis',
                fontWeight: '100',
                marginTop: 44,
              }}>
              {paymentCard.cardNumber}
            </Text>
            <Image source={AppIcons.chip} style={{marginTop: 10}} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 17,
              }}>
              <View>
                <Text style={AppText.secondaryTextBlack}>Card Holder Name</Text>
                <Text style={[AppText.smallTitle, {marginTop: 5}]}>
                  {paymentCard.cardName}
                </Text>
              </View>
              <View>
                <Text style={AppText.secondaryTextBlack}>Expiry Date</Text>
                <Text style={[AppText.smallTitle, {marginTop: 5}]}>
                  {paymentCard.expireDate}
                </Text>
              </View>
            </View>
          </View>
          <CheckBox
            type="whiteCheckbox"
            isCheck={false}
            hasTextRight
            textRight="Use as default payment method"
            customStyle={{marginTop: 25}}
          />
        </View>
      );
    },
    [],
  );
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <PaymentCardModal
        dismissModal={dismissModal}
        isModalVisible={isModalVisible}
        onAddingCard={() => {}}
      />
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
          data={PAYMENT_CARD}
          renderItem={renderCardItem}
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
            showCardModal(true);
          }}
        />
      </View>
    </View>
  );
};
export default PaymentCardScreen;
