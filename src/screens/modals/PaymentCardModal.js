import React from 'react';
import {Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import CheckBox from '../../components/CheckBox';
import DividerComponent from '../../components/DividerComponent';
import EditTextComponent from '../../components/EditTextComponent';
import Modalheader from '../../components/ModalHeader';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {AppImages} from '../../shared/constants/AppImages';

/**
 * @author hoang
 * @description modal to use in screens
 * @typedef Prop
 * @property {boolean} isModalVisible
 * @property {Function} dismissModal
 * @property {Function} onAddingCard
 * @param {Prop} props
 */
const PaymentCardModal = props => {
  let {isModalVisible, dismissModal, onAddingCard} = props;
  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      animationIn="slideInUp"
      avoidKeyboard
      backdropColor="rgba(0, 0, 0, 0.3)"
      hasBackdrop
      coverScreen
      swipeDirection={'down'}
      onSwipeComplete={dismissModal}
      statusBarTranslucent={true}
      backdropTransitionInTiming={200}
      onBackdropPress={dismissModal}
      style={{
        margin: 0,
        bottom: 0,
        position: 'absolute',
        width: '100%',
        height: 572,
      }}>
      <View
        style={{
          backgroundColor: AppColors.tabBar,
          height: 572,
          borderTopRightRadius: 34,
          borderTopLeftRadius: 34,
          paddingHorizontal: 16,
        }}>
        <Modalheader />
        <Text
          style={[AppText.mediumTitle, {marginTop: 16, textAlign: 'center'}]}>
          Add new card
        </Text>
        <DividerComponent height={18} />
        <EditTextComponent placeholder="Name on card" />
        <DividerComponent height={20} />
        <EditTextComponent
          isShowLabel
          inputLabel="Card number"
          isShowRightIcon
          rightIcon={AppImages.mastercard_white}
        />
        <DividerComponent height={20} />
        <EditTextComponent isShowLabel inputLabel="Expire Date" />
        <DividerComponent height={20} />
        <EditTextComponent
          isShowLabel
          inputLabel="CVV"
          isShowRightIcon
          rightIcon={AppIcons.help}
        />
        <CheckBox
          type="whiteCheckbox"
          hasTextRight
          textRight="Set as default payment method"
          customStyle={{marginTop: 29}}
        />
        <RadiusButton
          title="ADD CARD"
          type="redButton"
          buttonCustomStyle={{marginTop: 22}}
          onButtonPress={onAddingCard}
        />
      </View>
    </ReactNativeModal>
  );
};
export default PaymentCardModal;
