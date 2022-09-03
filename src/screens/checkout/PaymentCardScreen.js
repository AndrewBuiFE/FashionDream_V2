import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {PAYMENT_CARD} from '../../assets/data';
import CheckBox from '../../components/CheckBox';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {AppImages} from '../../shared/constants/AppImages';
const PaymentCardScreen = () => {
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  // rendering
  const renderCardItem = ({item, index}) => {
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
          <Image source={AppImages.mastercard} style={{marginTop: 19}} />
          <Text
            style={{
              fontSize: 24,
              letterSpacing: -0.41,
              color: '#F6F6F6',
              fontFamily: 'Metropolis',
              fontWeight: '100',
              marginTop: 44,
            }}>
            * * * * * * * * * * * * 4546
          </Text>
          <Image source={AppImages.mastercard} style={{marginTop: 10}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 17,
            }}>
            <View>
              <Text>Card Holder Name</Text>
              <Text>dkjfjfd</Text>
            </View>
            <View>
              <Text>Expiry Date</Text>
              <Text>11/22</Text>
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
  };
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
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
      </View>
    </View>
  );
};
export default PaymentCardScreen;
