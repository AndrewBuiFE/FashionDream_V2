import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import CircleButton from '../../components/CircleButton';
import DividerComponent from '../../components/DividerComponent';
import Modalheader from '../../components/ModalHeader';
import RadiusButton from '../../components/RadiusButton';
import StarComponent from '../../components/StarComponent';
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
 * @property {Function} onSelect
 * @property {number} currentActiveIndex
 * @param {Prop} props
 */
const RatingModal = props => {
  // common var
  let {isModalVisible, dismissModal, onSelect, currentActiveIndex} = props;
  // hooks
  const [activeIndex, setActiveIndex] = useState(currentActiveIndex);
  // functions
  const hideModal = () => {
    onSelect(activeIndex);
    dismissModal();
  };
  // rendering
  const ImageComponent = imageSource => (
    <TouchableOpacity
      style={{
        width: 104,
        height: 104,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
      }}>
      <View style={{position: 'absolute', top: 6, right: 6}}>
        <Image source={AppIcons.grayCross} />
      </View>
      <Image
        source={AppImages.man_1}
        style={{
          width: '100%',
          aspectRatio: 1,
          height: undefined,
          borderRadius: 4,
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
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
        height: 640,
        position: 'absolute',
        bottom: 0,
      }}>
      <View
        style={{
          backgroundColor: AppColors.tabBar,
          height: 640,
          borderTopRightRadius: 34,
          borderTopLeftRadius: 34,
        }}>
        <Modalheader />
        <View style={{alignItems: 'center', marginTop: 16}}>
          <Text style={AppText.mediumTitle}>What is your rate?</Text>
        </View>
        <View
          style={{
            marginTop: 17,
            marginHorizontal: 16,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <StarComponent quantity={0} size="large" />
            <Text
              style={[
                AppText.mediumTitle,
                {width: 227, textAlign: 'center', marginTop: 34},
              ]}>
              Please share your opinion about the product
            </Text>
          </View>
          <View
            style={{
              backgroundColor: AppColors.lightDark,
              borderRadius: 8,
              width: '100%',
              height: 148,
              marginTop: 18,
              paddingLeft: 12,
            }}>
            <TextInput
              style={{flex: 1}}
              multiline
              placeholder="Your review"
              textAlignVertical="top"
            />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              marginTop: 45,
            }}>
            <ImageComponent />
            <DividerComponent height={104} width={16} />
            <ImageComponent />
            <DividerComponent height={104} width={16} />
            <ImageComponent />
            <DividerComponent height={104} width={16} />
            <View
              style={{
                width: 104,
                height: 104,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
              }}>
              <CircleButton type="redButton" icon={AppIcons.camera} />
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: 'Metropolis',
                  color: '#F6F6F6',
                  marginTop: 12,
                }}>
                Add your photos
              </Text>
            </View>
          </ScrollView>
          <RadiusButton
            title="SEND REVIEW"
            type="redButton"
            buttonCustomStyle={{marginTop: 35}}
            onButtonPress={hideModal}
          />
        </View>
      </View>
    </ReactNativeModal>
  );
};
export default RatingModal;
