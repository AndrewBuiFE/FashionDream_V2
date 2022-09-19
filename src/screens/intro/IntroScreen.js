import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Image, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useDispatch} from 'react-redux';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppImages} from '../../shared/constants/AppImages';
import {ScreenName} from '../../shared/constants/ScreenName';
import {setAppFirstRun} from '../../stores/slices/SystemSlice';

const INTRO_DATA = [
  {
    key: 1,
    title: 'Filling in the void of automation in your home',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: AppImages.first_intro,
  },
  {
    key: 2,
    title: 'Multi Voice Over The World',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: AppImages.second_intro,
  },
  {
    key: 3,
    title: 'A technological foundation for your home',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: AppImages.third_intro,
  },
];
const IntroScreen = () => {
  // hooks
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // function
  const onDone = () => {
    dispatch(setAppFirstRun(false));
    navigation.navigate(ScreenName.homeScreen);
  };
  // rendering
  const renderItem = useCallback(
    /**
     * @typedef Item
     * @property {string} title
     * @property {string} text
     * @property {ImageStyle} image
     *
     * @param {{item: Item, index: number}} param
     */
    ({item, index}) => {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: AppColors.primaryBackground,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: 375, height: 390}}>
            <Image
              source={item.image}
              // style={{width: '100%', height: '100%'}}
              resizeMode={'center'}
            />
          </View>
          <Text
            style={[AppText.mediumTitle, {width: 265, textAlign: 'center'}]}>
            {item.title}
          </Text>
          <Text
            style={[
              AppText.tinyTitle,
              {width: 265, marginTop: 4, textAlign: 'center'},
            ]}>
            {item.text}
          </Text>
        </View>
      );
    },
    [],
  );
  return (
    <AppIntroSlider
      data={INTRO_DATA}
      renderItem={renderItem}
      doneLabel={'Explore'}
      showSkipButton
      showPrevButton
      dotStyle={{backgroundColor: AppColors.lightDark}}
      onDone={onDone}
    />
  );
};
export default IntroScreen;
