import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { SORT_TITLE } from '../../assets/data';
import DividerComponent from '../../components/DividerComponent';
import Modalheader from '../../components/ModalHeader';
import { AppColors } from '../../shared/constants/AppColors';
import { AppText } from '../../shared/constants/AppGlobal';

/**
 * @author hoang
 * @description modal to use in screens
 * @typedef Prop
 * @property {boolean} isModalVisible
 * @property {Function} dismissModal
 * @property {Function} onSortPress
 * @property {number} activeIndex
 * @param {Prop} props
 */
const SortModal = props => {
  let {isModalVisible, dismissModal, onSortPress, activeIndex} = props;
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
        height: 352,
      }}>
      <View
        style={{
          backgroundColor: AppColors.tabBar,
          height: 352,
          borderTopRightRadius: 34,
          borderTopLeftRadius: 34,
        }}>
        <Modalheader />
        <Text
          style={[AppText.mediumTitle, {marginTop: 16, textAlign: 'center'}]}>
          Sort By
        </Text>
        <DividerComponent height={17} />
        {SORT_TITLE.map((sort, index) => (
          <TouchableOpacity
            key={index}
            style={{
              height: 48,
              paddingHorizontal: 16,
              justifyContent: 'center',
              backgroundColor:
                activeIndex === index ? AppColors.primaryRed : null,
            }}
            onPress={() => {
              onSortPress(index);
              dismissModal();
            }}>
            <Text
              style={[
                AppText.mediumTitle,
                {color: activeIndex === index ? AppColors.lightDark : null},
              ]}>
              {sort.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ReactNativeModal>
  );
};
export default SortModal;
