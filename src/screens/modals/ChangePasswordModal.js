import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import DividerComponent from '../../components/DividerComponent';
import EditTextComponent from '../../components/EditTextComponent';
import Modalheader from '../../components/ModalHeader';
import RadiusButton from '../../components/RadiusButton';
import { AppColors } from '../../shared/constants/AppColors';
import { AppText } from '../../shared/constants/AppGlobal';

/**
 * @author hoang
 * @description modal to use in screens
 * @typedef Prop
 * @property {boolean} isModalVisible
 * @property {Function} dismissModal
 * @property {Function} onAddingCard
 * @param {Prop} props
 */
const ChangePasswordModal = props => {
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
        height: 472,
      }}>
      <View
        style={{
          backgroundColor: AppColors.tabBar,
          borderTopRightRadius: 34,
          borderTopLeftRadius: 34,
          paddingHorizontal: 16,
          height: 472,
        }}>
        <Modalheader />
        <Text
          style={[AppText.mediumTitle, {marginTop: 16, textAlign: 'center'}]}>
          Password change
        </Text>
        <DividerComponent height={18} />
        <EditTextComponent placeholder="Old passwords" />
        <TouchableOpacity
          style={{
            marginTop: 14,
            alignSelf: 'flex-end',
          }}>
          <Text
            style={[
              AppText.primaryText,
              {
                color: AppColors.smallTitleText,
              },
            ]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <DividerComponent height={18} />
        <EditTextComponent placeholder="New Password" />
        <DividerComponent height={24} />
        <EditTextComponent placeholder="Repeat New Password" />
        <DividerComponent height={32} />
        <RadiusButton
          title="SAVE PASSWORD"
          type="redButton"
          onButtonPress={onAddingCard}
        />
      </View>
    </ReactNativeModal>
  );
};
export default ChangePasswordModal;
