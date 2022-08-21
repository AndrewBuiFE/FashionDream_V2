import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import RadiusButton from '../../components/RadiusButton';
import ParallaxScrollView from '../../libs/ParallaxScrollView';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppImages} from '../../shared/constants/AppImages';
const PARALLAX_HEADER_HEIGHT = 536;
const STICKY_HEADER_HEIGHT = 196;

const HomeScreen = () => {
  return (
    <ParallaxScrollView
      backgroundColor="black"
      contentBackgroundColor="pink"
      parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
      stickyHeaderHeight={STICKY_HEADER_HEIGHT}
      contentContainerStyle={{
        backgroundColor: 'black',
        flex: 1,
      }}
      renderForeground={() => (
        <View
          style={{
            height: 536,
            width: '100%',
            backgroundColor: 'yellow',
          }}>
          <ImageBackground
            source={AppImages.big_banner}
            style={{width: '100%', height: '100%'}}>
            <Text
              style={{
                fontSize: 48,
                fontFamily: 'Metropolis',
                color: AppColors.primaryText,
                fontWeight: 'bold',
                width: 190,
                marginTop: 354,
                lineHeight: 48,
                marginLeft: 15,
              }}>
              Fashion sale
            </Text>
            <RadiusButton
              title="Check"
              type="redButton"
              buttonCustomStyle={{width: 160, marginLeft: 15, marginTop: 18}}
              onButtonPress={() => {
                console.log('Press');
              }}
            />
          </ImageBackground>
        </View>
      )}
      renderStickyHeader={() => (
        <View
          style={{
            height: 196,
            width: '100%',
            backgroundColor: 'yellow',
          }}>
          <ImageBackground
            source={AppImages.small_banner}
            style={{width: '100%', height: '100%'}}>
            <Text
              style={[AppText.largeTitle, {marginTop: 136, marginLeft: 16}]}>
              Street clothes
            </Text>
          </ImageBackground>
        </View>
      )}>
      <View>
        <View style={{height: 500}}>
          <Text>Scroll me</Text>
        </View>
        <View style={{height: 500}}>
          <Text>End part</Text>
        </View>
        <View style={{height: 500}}>
          <Text>End part</Text>
        </View>
      </View>
    </ParallaxScrollView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({});
