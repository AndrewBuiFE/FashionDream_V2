import React from 'react';
import {Image, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import DividerComponent from '../../components/DividerComponent';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppImages} from '../../shared/constants/AppImages';

/**
 * @author hoang
 * @description modal to use in screens
 * @typedef Prop
 * @property {boolean} isModalVisible
 * @property {Function} dismissModal
 * @property {Function} onContinuePress
 * @param {Prop} props
 */
const SuccessModal = props => {
  let {isModalVisible, dismissModal, onContinuePress} = props;
  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      animationIn="slideInUp"
      avoidKeyboard
      backdropColor="rgba(0, 0, 0, 0.3)"
      hasBackdrop
      swipeDirection={'down'}
      onSwipeComplete={dismissModal}
      statusBarTranslucent={true}
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
          alignItems: 'center',
        }}>
        <Image
          source={AppImages.bags}
          style={{marginTop: 148, width: 208, height: 213}}
        />
        <Text
          style={[AppText.largeTitle, {marginTop: 49, textAlign: 'center'}]}>
          Success!
        </Text>
        <Text
          style={[
            AppText.primaryText,
            {
              width: 225,
              textAlign: 'center',
              color: '#F5F5F5',
              marginTop: 12,
            },
          ]}>
          Your order will be delivered soon. Thank you for choosing our app!
        </Text>
        <DividerComponent height={163} />
        <RadiusButton
          type="redButton"
          title="CONTINUE SHOPPING"
          onButtonPress={onContinuePress}
        />
      </View>
    </ReactNativeModal>
  );
};
export default SuccessModal;
