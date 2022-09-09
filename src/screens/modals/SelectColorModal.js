import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { FILTER_COLOR } from '../../assets/data';
import ColorComponent from '../../components/ColorComponent';
import DividerComponent from '../../components/DividerComponent';
import Modalheader from '../../components/ModalHeader';
import PickerComponent from '../../components/PickerComponent';
import RadiusButton from '../../components/RadiusButton';
import { AppColors } from '../../shared/constants/AppColors';
import { AppText } from '../../shared/constants/AppGlobal';

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
const SelectColorModal = props => {
  // var
  let {isModalVisible, dismissModal, currentActiveIndex, onSelect} = props;
  // hooks
  const [activeIndex, setActiveIndex] = useState(currentActiveIndex);
  const hideModal = () => {
    onSelect(activeIndex);
    dismissModal();
  };
  // rendering
  const renderColor = useCallback(
    ({item, index}) => {
      return (
        <ColorComponent
          backgroundColor={item}
          isCheck={activeIndex === index ? true : false}
          onColorPress={() => {
            setActiveIndex(index);
          }}
        />
      );
    },
    // [generalFilter],
    [activeIndex],
  );
  const renderSeperator = useCallback(() => {
    return <DividerComponent width={20} />;
  }, []);
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
        height: 300,
        position: 'absolute',
        bottom: 0,
      }}>
      <View
        style={{
          backgroundColor: AppColors.tabBar,
          height: 300,
          borderTopRightRadius: 34,
          borderTopLeftRadius: 34,
        }}>
        <Modalheader />
        <View style={{alignItems: 'center', marginTop: 16}}>
          <Text style={AppText.mediumTitle}>Select color</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 24,
            marginHorizontal: 16,
          }}>
          <FlatList
            data={FILTER_COLOR}
            renderItem={renderColor}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={renderSeperator}
          />
        </View>
        <PickerComponent
          title="Color info"
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
export default SelectColorModal;
