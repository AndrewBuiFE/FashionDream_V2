import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import {FILTER_SIZE} from '../../assets/data';
import Modalheader from '../../components/ModalHeader';
import PickerComponent from '../../components/PickerComponent';
import RadiusButton from '../../components/RadiusButton';
import TagComponent from '../../components/TagComponent';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';

/**
 * @author hoang
 * @description modal to use in screens
 * @typedef Prop
 * @property {boolean} isModalVisible
 * @property {Function} dismissModal
 * @property {Function} onSelect
 * @property {number} currentActiveIndex
 * @param {Prop} props
 */
const SelectSizeModal = props => {
  // common var
  let {isModalVisible, dismissModal, onSelect, currentActiveIndex} = props;
  // hooks
  const [activeIndex, setActiveIndex] = useState(currentActiveIndex);
  // functions
  const hideModal = () => {
    onSelect(activeIndex);
    dismissModal();
  };
  // side effect
  useEffect(() => {
    setActiveIndex(currentActiveIndex);
  }, [currentActiveIndex, isModalVisible]);
  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      animationIn="slideInUp"
      avoidKeyboard
      backdropColor="rgba(0, 0, 0, 0.3)"
      hasBackdrop
      swipeDirection={'down'}
      onSwipeComplete={dismissModal}
      statusBarTranslucent={false}
      backdropTransitionInTiming={200}
      onBackdropPress={dismissModal}
      style={{
        margin: 0,
        width: '100%',
        height: 368,
        position: 'absolute',
        bottom: 0,
      }}>
      <View
        style={{
          backgroundColor: AppColors.tabBar,
          height: 368,
          borderTopRightRadius: 34,
          borderTopLeftRadius: 34,
        }}>
        <Modalheader />
        <View style={{alignItems: 'center', marginTop: 16}}>
          <Text style={AppText.mediumTitle}>Select size</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 24,
            marginHorizontal: 16,
          }}>
          {FILTER_SIZE.map((cate, index) => {
            let active = activeIndex === index;
            return (
              <TagComponent
                key={index}
                size="large"
                tag={cate}
                shape="round"
                type={active ? 'redTag' : 'blackTag'}
                hasBorder={!active}
                tagViewStyle={{
                  marginLeft: index == 0 || index == 3 ? 0 : 30.3,
                  marginTop: index < 3 ? 0 : 16,
                  backgroundColor: active
                    ? AppColors.primaryRed
                    : AppColors.primaryBackground,
                }}
                onTagPress={() => {
                  setActiveIndex(index);
                }}
              />
            );
          })}
        </View>
        <PickerComponent
          title="Size info"
          customStyle={{
            marginTop: 24,
            borderWidth: 0.4,
            backgroundColor: AppColors.lightDark,
            borderColor: AppColors.smallTitleText,
          }}
        />
        <View style={{marginHorizontal: 16}}>
          <RadiusButton
            title="ADD TO CART"
            type="redButton"
            buttonCustomStyle={{marginTop: 28}}
            onButtonPress={hideModal}
          />
        </View>
      </View>
    </ReactNativeModal>
  );
};
export default SelectSizeModal;
