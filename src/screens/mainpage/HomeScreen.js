import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ParallaxScrollView from '../../libs/ParallaxScrollView';
import {AppImages} from '../../shared/constants/AppImages';
const PARALLAX_HEADER_HEIGHT = 150;
const STICKY_HEADER_HEIGHT = 44;
const HomeScreen = () => {
  return (
    <ParallaxScrollView
      backgroundColor="transparent"
      contentBackgroundColor="pink"
      parallaxHeaderHeight={536}
      stickyHeaderHeight={196}
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
          <Image
            source={AppImages.big_banner}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      )}
      renderBackground={() => (
        <View
          style={{
            height: 196,
            width: '100%',
            backgroundColor: 'yellow',
          }}>
          <Image
            source={AppImages.small_banner}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      )}
      // renderContentBackground={() => (
      //   <View style={{backgroundColor: 'orange', height: 200}}>
      //     <Text>Content background</Text>
      //   </View>
      // )}
      // renderFixedHeader={() => (
      //   <View style={{backgroundColor: 'green', height: 50}}>
      //     <Text>Fixed header</Text>
      //   </View>
      // )}
      // renderStickyHeader
      // renderStickyHeader={() => (
      //   <View
      //     style={{
      //       height: 196,
      //       width: '100%',
      //       backgroundColor: 'yellow',
      //     }}>
      //     <Image
      //       source={AppImages.small_banner}
      //       style={{width: '100%', height: '100%'}}
      //     />
      //   </View>
      // )}
    >
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
