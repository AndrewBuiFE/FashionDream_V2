import React, {useCallback} from 'react';
import {FlatList, Keyboard, Text, TextInput, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {PROMO_CODE} from '../../assets/data';
import CircleButton from '../../components/CircleButton';
import DividerComponent from '../../components/DividerComponent';
import Modalheader from '../../components/ModalHeader';
import PromoCode from '../../components/PromoCode';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';

/**
 * @author hoang
 * @description modal to use in screens
 * @typedef Prop
 * @property {boolean} isModalVisible
 * @property {Function} dismissModal
 * @property {Function} onAddingCard
 * @param {Prop} props
 */
const PromoCodeModal = props => {
  let {isModalVisible, dismissModal, onAddingCard} = props;

  // rendering functions
  const renderSeparator = useCallback(() => {
    return <DividerComponent height={24} />;
  }, []);
  const renderPromoCode = useCallback(
    /**
     * @type {import('react-native').ListRenderItem<import('../../models/types/index.d').PromoCode>}
     */
    ({item: promoCode, index}) => {
      return (
        <PromoCode
          promo={promoCode}
          onApply={code => {
            // setFinalCode(code);
            // showPromoModal(false);
          }}
        />
      );
    },
    [],
  );
  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      animationIn="slideInUp"
      avoidKeyboard
      backdropColor="rgba(0, 0, 0, 0.3)"
      hasBackdrop
      coverScreen
      statusBarTranslucent={true}
      swipeDirection="down"
      onSwipeComplete={dismissModal}
      backdropTransitionInTiming={200}
      onBackdropPress={dismissModal}
      style={{
        margin: 0,
        height: 464,
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}>
      <View
        style={{
          backgroundColor: AppColors.tabBar,
          height: 464,
          borderTopRightRadius: 34,
          borderTopLeftRadius: 34,
          paddingHorizontal: 16,
        }}>
        <Modalheader />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: AppColors.lightDark,
            shadowOffset: {width: 0, height: 1},
            shadowRadius: 8,
            marginTop: 32,
            shadowColor: 'rgba(0, 0, 0, 0.05)',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 35,
            borderBottomRightRadius: 35,
            borderBottomLeftRadius: 8,
            height: 36,
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Enter your promo code"
            placeholderTextColor={AppColors.smallTitleText}
            style={{paddingLeft: 20, width: 307}}
            onSubmitEditing={Keyboard.dismiss}
          />
          <CircleButton
            icon={AppIcons.arrow_forward}
            size="small"
            customStyle={{position: 'absolute', right: 0}}
            onButtonPress={() => {
              // showPromoModal(false);
            }}
          />
        </View>
        <Text style={[AppText.mediumTitle, {marginTop: 32}]}>
          Your Promo Codes
        </Text>
        <View style={{marginTop: 18}}>
          <FlatList
            data={PROMO_CODE}
            renderItem={renderPromoCode}
            ItemSeparatorComponent={renderSeparator}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </ReactNativeModal>
  );
};
export default PromoCodeModal;
