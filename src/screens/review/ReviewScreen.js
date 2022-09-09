import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {RATING} from '../../assets/data';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import StarComponent from '../../components/StarComponent';
import ParallaxScrollView from '../../libs/ParallaxScrollView';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
const PARALLAX_HEADER_HEIGHT = 300;
const STICKY_HEADER_HEIGHT = 109;
const TOTAL_REVIEW = RATING.reduce(
  (pre, cur) => pre.reviewCount + cur.reviewCount,
  0,
);
const ReviewScreen = () => {
  console.log('Total review: ', TOTAL_REVIEW);
  // rendering
  const renderStickHeader = useCallback(() => {
    return (
      <View
        style={{
          width: '100%',
        }}>
        <HeaderComponent
          type="medium"
          leftIcon={AppIcons.back_arrow}
          title="Rating and reviews"
        />
      </View>
    );
  }, []);
  const renderStickyForeGround = useCallback(() => {
    return (
      <View
        style={{
          width: '100%',
        }}>
        <HeaderComponent
          type="large"
          leftIcon={AppIcons.back_arrow}
          title="Rating&Reviews"
        />
        <DividerComponent height={41} />
        <View style={{paddingHorizontal: 16, flexDirection: 'row'}}>
          <View style={{alignContent: 'center', justifyContent: 'flex-start'}}>
            <Text
              style={{
                fontSize: 44,
                fontFamily: 'Metropolis',
                fontWeight: 'bold',
                color: '#F6F6F6',
                letterSpacing: -0.41,
              }}>
              4.3
            </Text>
            <Text
              style={[
                AppText.primaryText,
                {color: AppColors.smallTitleText, lineHeight: 14},
              ]}>
              23 ratings
            </Text>
          </View>
          <View style={{flex: 1, marginLeft: 26, backgroundColor: 'red'}}>
            {RATING.map(
              /**
               * @type {{rate: number, reviewCount: number}}
               */
              (rating, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: index == 0 ? 0 : 6,
                      alignItems: 'center',
                    }}>
                    <StarComponent quantity={rating?.rate} hideInactiveStar />
                    <View
                      style={{
                        backgroundColor: AppColors.hotRed,
                        width: rating.reviewCount,
                        borderRadius: 4,
                        height: 8,
                        marginLeft: 9,
                      }}
                    />
                  </View>
                );
              },
            )}
          </View>
          <View style={{marginLeft: 20, backgroundColor: 'blue'}}>
            {RATING.map(
              /**
               * @type {{rate: number, reviewCount: number}}
               */
              (rating, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: index == 0 ? 0 : 6,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={[
                        AppText.primaryText,
                        {color: AppColors.smallTitleText, lineHeight: 14},
                      ]}>
                      {rating.reviewCount}
                    </Text>
                  </View>
                );
              },
            )}
          </View>
        </View>
      </View>
    );
  }, []);
  return (
    <ParallaxScrollView
      backgroundColor="black"
      contentBackgroundColor="black"
      parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
      stickyHeaderHeight={STICKY_HEADER_HEIGHT}
      contentContainerStyle={{
        backgroundColor: 'black',
        flex: 1,
      }}
      renderForeground={renderStickyForeGround}
      renderBac
      renderStickyHeader={renderStickHeader}>
      <View style={{backgroundColor: 'red', height: 400}}>
        <Text>dkjf</Text>
      </View>
    </ParallaxScrollView>
  );
};
export default ReviewScreen;
