/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  Keyboard,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import {PRODUCT} from '../../assets/data';
import CartItem from '../../components/CartItem';
import CircleButton from '../../components/CircleButton';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText, DeviceConstant} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
const CartScreen = () => {
  // common var
  let inputVerticalPos = 0;
  // common hooks
  const shift = useRef(new Animated.Value(0)).current;
  const [isPromoVisible, showPromoModal] = useState(false);
  // used functions
  const handleKeyboardDidHide = event => {
    Animated.timing(shift, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const handleKeyboardDidShow = event => {
    const keyboardHeight = event.endCoordinates.height;
    const shiftOffset =
      DeviceConstant.screenHeight - keyboardHeight - inputVerticalPos;
    Animated.timing(shift, {
      toValue: -shiftOffset,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  // rendering functions
  const renderCartItem = ({item, index}) => {
    return <CartItem product={item} />;
  };
  const renderSeparator = () => {
    return <DividerComponent height={24} />;
  };
  // effect hooks
  useEffect(() => {
    const showKeyboard = Keyboard.addListener('keyboardDidShow', event => {
      handleKeyboardDidShow(event);
    });
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', event => {
      handleKeyboardDidHide(event);
    });
    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        type="large"
        title="My Bag"
        rightIcon={AppIcons.search}
      />
      <View style={{marginHorizontal: 16}}>
        <FlatList
          data={PRODUCT}
          renderItem={renderCartItem}
          ItemSeparatorComponent={renderSeparator}
          showsVerticalScrollIndicator={true}
          style={{
            marginTop: 24,
            height: 360,
            flexGrow: 0,
          }}
        />
        <Animated.View
          style={{
            transform: [
              {
                translateY: shift,
              },
            ],
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 25,
              backgroundColor: AppColors.lightDark,
              shadowOffset: {width: 0, height: 1},
              shadowRadius: 8,
              shadowColor: 'rgba(0, 0, 0, 0.05)',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 35,
              borderBottomRightRadius: 35,
              borderBottomLeftRadius: 8,
              height: 36,
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Enter your promo code"
              placeholderTextColor={AppColors.smallTitleText}
              style={{paddingLeft: 20, width: 307}}
              onSubmitEditing={Keyboard.dismiss}
              onLayout={event => {
                event.target.measure((x, y, width, height, pageX, pageY) => {
                  console.log(x, y, width, height, pageX, pageY);
                  inputVerticalPos = pageY + height;
                });
              }}
            />
            <CircleButton
              icon={AppIcons.arrow_forward}
              size="small"
              customStyle={{position: 'absolute', right: 0}}
              onButtonPress={showPromoModal}
            />
          </View>
        </Animated.View>
        <View
          style={{
            marginTop: 28,
            height: 22,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={[AppText.primaryText, {color: AppColors.smallTitleText}]}>
            Total amount:
          </Text>
          <Text style={AppText.mediumTitle}>123$</Text>
        </View>
        <DividerComponent height={28} />
        <RadiusButton title="CHECK OUT" type="redButton" />
      </View>
    </KeyboardAvoidingView>
  );
};
export default CartScreen;
