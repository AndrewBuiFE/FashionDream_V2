/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Text, View} from 'react-native';
import {RATING, REVIEW} from '../../assets/data';
import CheckBox from '../../components/CheckBox';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RadiusButton from '../../components/RadiusButton';
import ReviewComponent from '../../components/ReviewComponent';
import StarComponent from '../../components/StarComponent';
import ParallaxScrollView from '../../libs/ParallaxScrollView';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import RatingModal from '../modals/RatingModal';
const PARALLAX_HEADER_HEIGHT = 276;
const STICKY_HEADER_HEIGHT = 44;
const TOTAL_REVIEW = RATING.reduce((pre, cur) => pre + cur.reviewCount, 0);

/**
 * @author Hoang
 * @description ReviewScreen
 */
const ReviewScreen = () => {
  // common hooks
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const [isModalVisible, showCardModal] = useState(false);
  // utitlity functions
  const dismissModal = () => {
    showCardModal(false);
  };
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
          onLeftIconPress={goBack}
        />
      </View>
    );
  }, [navigation]);
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
          onLeftIconPress={goBack}
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
          <View style={{flex: 1, marginLeft: 26}}>
            {RATING.map(
              /**
               * @type {{rate: number, reviewCount: number}}
               */
              (rating, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      marginTop: index == 0 ? 0 : 6,
                      alignItems: 'center',
                    }}>
                    <StarComponent quantity={rating?.rate} hideInactiveStar />
                    <View
                      style={{
                        backgroundColor: AppColors.hotRed,
                        width: `${(rating.reviewCount / TOTAL_REVIEW) * 100}%`,
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
          <View style={{marginLeft: 20}}>
            {RATING.map(
              /**
               * @type {{rate: number, reviewCount: number}}
               */
              (rating, index) => {
                return (
                  <View
                    key={index}
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
  const renderReview = useCallback(
    /**
     * @type {review: import('../../models/types/index.d').Review[], index: number}
     */
    (review, index) => {
      return (
        <View
          key={index}
          style={{marginTop: index == 0 ? 0 : 31, marginHorizontal: 16}}>
          <ReviewComponent review={review} />
        </View>
      );
    },
    [],
  );
  return (
    <View style={{flex: 1}}>
      <RatingModal
        dismissModal={dismissModal}
        isModalVisible={isModalVisible}
      />
      <ParallaxScrollView
        backgroundColor="black"
        contentBackgroundColor="black"
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        contentContainerStyle={{
          flex: 1,
        }}
        renderForeground={renderStickyForeGround}
        renderStickyHeader={renderStickHeader}>
        <View style={{flex: 1, marginHorizontal: 16}}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 28,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: 'Metropolis',
                fontSize: 24,
                lineHeight: 24,
                letterSpacing: -0.41,
                color: '#F7F7F7',
                fontWeight: '700',
              }}>{`${TOTAL_REVIEW} review${TOTAL_REVIEW > 1 ? 's' : ''}`}</Text>
            <CheckBox hasTextRight textRight="With photo" />
          </View>
          {REVIEW.map((review, index) => {
            return renderReview(review, index);
          })}
        </View>
        <DividerComponent height={20} />
      </ParallaxScrollView>
      <RadiusButton
        icon={AppIcons.pen}
        title="Write a review"
        buttonCustomStyle={{
          height: 36,
          width: 128,
          position: 'absolute',
          bottom: 10,
          right: 17,
        }}
        titleCustomStyle={{fontSize: 11}}
        onButtonPress={() => {
          showCardModal(true);
        }}
      />
    </View>
  );
};
export default ReviewScreen;
