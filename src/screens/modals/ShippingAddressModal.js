import React from 'react';
import {Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import DividerComponent from '../../components/DividerComponent';
import EditTextComponent from '../../components/EditTextComponent';
import Modalheader from '../../components/ModalHeader';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';

/**
 * @author hoang
 * @description modal to use in screens
 * @typedef Prop
 * @property {boolean} isModalVisible
 * @property {Function} dismissModal
 * @property {Function} onSavingAddress
 * @param {Prop} props
 */
const ShippingAddressModal = props => {
  let {isModalVisible, dismissModal, onSavingAddress} = props;
  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      animationIn="slideInUp"
      avoidKeyboard
      backdropColor="rgba(0, 0, 0, 0.3)"
      hasBackdrop
      swipeDirection={'down'}
      onSwipeComplete={dismissModal}
      // deviceHeight={deviceHeight}
      statusBarTranslucent={false}
      backdropTransitionInTiming={200}
      onBackdropPress={dismissModal}
      style={{
        margin: 0,
        width: '100%',
      }}>
      <View
        style={{
          backgroundColor: AppColors.tabBar,
          borderTopRightRadius: 34,
          borderTopLeftRadius: 34,
          paddingHorizontal: 16,
          height: '100%',
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
          onButtonPress={onSavingAddress}
        />
      </View>
    </ReactNativeModal>
  );
};
export default ShippingAddressModal;
