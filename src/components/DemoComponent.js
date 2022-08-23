import React, {useRef, useState} from 'react';
import {Animated, Easing, Image, TouchableOpacity, View} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {AppColors} from '../shared/constants/AppColors';
import {AppIcons} from '../shared/constants/AppIcons';
export default function DemoComponent() {
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const [on, setOn] = useState(false);
  const toggleButton = () => {
    Animated.timing(buttonAnim, {
      toValue: on ? 0 : 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    setOn(state => !state);
  };
  const imageArray = [AppIcons.facebook, AppIcons.google];
  const scaleIntepolation = buttonAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 30],
  });
  const opacityInterpolation = buttonAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  });
  const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);

  return (
    <View style={{height: 500, width: '100%'}}>
      {/* <AnimatedTouchable
        style={{
          height: 60,
          position: 'absolute',
          width: 60,
          borderRadius: 50,
          bottom: 20,
          right: 20,
          backgroundColor: AppColors.lightDark,
          transform: [
            {
              scale: scaleIntepolation,
            },
          ],
        }}
        onPress={toggleButton}
      /> */}
      <Animated.View
        style={{
          height: 60,
          position: 'absolute',
          width: 60,
          borderRadius: 50,
          bottom: 20,
          right: 20,
          backgroundColor: AppColors.lightDark,
          transform: [
            {
              scale: scaleIntepolation,
            },
          ],
        }}
      />
      {imageArray.map((item, index) => {
        let itemTranslateY = buttonAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80 * (index + 1)],
        });
        return (
          <Animated.View
            key={index}
            style={{
              position: 'absolute',
              height: 60,
              width: 60,
              borderRadius: 50,
              backgroundColor: AppColors.whiteBackground,
              bottom: 20,
              right: 20,
              transform: [{translateY: itemTranslateY}],
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{}} onPress={toggleButton}>
              <Image source={item} />
            </TouchableOpacity>
          </Animated.View>
        );
      })}
      <Animated.View
        style={{
          position: 'absolute',
          height: 60,
          width: 60,
          borderRadius: 50,
          backgroundColor: AppColors.hotRed,
          bottom: 20,
          right: 20,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: opacityInterpolation,
        }}>
        <TouchableOpacity onPress={toggleButton}>
          <Image
            source={AppIcons.bag_favorite}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
