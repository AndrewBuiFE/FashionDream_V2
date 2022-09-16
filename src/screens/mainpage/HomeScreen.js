/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  FlatList,
  ImageBackground,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {PRODUCT, SECTION} from '../../assets/data';
import DividerComponent from '../../components/DividerComponent';
import ProductItemComponent from '../../components/ProductItemComponent';
import RadiusButton from '../../components/RadiusButton';
import ParallaxScrollView from '../../libs/ParallaxScrollView';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppImages} from '../../shared/constants/AppImages';
import {ScreenName} from '../../shared/constants/ScreenName';
import {setAppFirstRun} from '../../stores/slices/SystemSlice';
const PARALLAX_HEADER_HEIGHT = 536;
const STICKY_HEADER_HEIGHT = 196;

/**
 * @author Hoang
 * @decription Main screen. Display after logging in
 */
const HomeScreen = () => {
  // common hooks
  const [productsFavorite, setProductsFavorite] = useState(
    PRODUCT.map(product => {
      return product.isFavorited;
    }),
  );
  const [refresh, setRefresh] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // rendering functions
  const renderItem = useCallback(
    /**
     * @type {import('react-native').ListRenderItem<import('../../models/types/index.d').Product>}
     */
    ({item, index}) => {
      return (
        <ProductItemComponent
          product={item}
          key={index}
          isBottomRightButtonActive={productsFavorite[index]}
          onButtomRightButtonPress={() => {
            let tempState = [...productsFavorite];
            tempState[index] = !tempState[index];
            setProductsFavorite(tempState);
          }}
          onProductPress={() => {
            navigation.navigate(ScreenName.productCardScreen, {product: item});
          }}
        />
      );
    },
    [],
  );
  const renderSeparator = useCallback(
    () => <View style={{height: 260, width: 16}} />,
    [],
  );
  const renderFooter = useCallback(() => {
    return <DividerComponent height={260} width={16} />;
  }, []);
  const renderRefresh = useCallback(() => {
    return (
      <RefreshControl
        // refreshing
        onRefresh={() => {
          console.log('Refreshing...');
        }}
        title="Refresh control"
        progressBackgroundColor={AppColors.lightDark}
        progressViewOffset={3}
        titleColor={AppColors.hotRed}
        tintColor={AppColors.hotRed}
      />
    );
  }, []);

  const renderStickyForeGround = useCallback(() => {
    return (
      <View
        style={{
          width: '100%',
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
              dispatch(setAppFirstRun(true));
              navigation.navigate(ScreenName.shopNavigator);
            }}
          />
        </ImageBackground>
      </View>
    );
  }, []);
  const renderStickHeader = useCallback(() => {
    return (
      <View
        style={{
          width: '100%',
        }}>
        <ImageBackground
          source={AppImages.small_banner}
          style={{width: '100%', height: '100%'}}>
          <Text style={[AppText.largeTitle, {marginTop: 136, marginLeft: 16}]}>
            Street clothes
          </Text>
        </ImageBackground>
      </View>
    );
  }, []);

  // effect
  const backAction = () => {
    Alert.alert('Exit App?', 'Do you want to exit this app?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Exit',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
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
      renderStickyHeader={renderStickHeader}>
      {SECTION.map((section, index) => {
        return (
          <View style={{marginTop: 40, marginLeft: 16}} key={index}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1}}>
                <Text style={AppText.largeTitle}>{section.title}</Text>
                <Text style={[AppText.tinyTitle, {marginTop: 4}]}>
                  {section.description}
                </Text>
              </View>
              <TouchableOpacity style={{marginRight: 14}}>
                <Text
                  style={[AppText.tinyTitle, {color: AppColors.primaryText}]}>
                  View all
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 22}}>
              <FlatList
                data={PRODUCT}
                horizontal
                // refreshControl={renderRefresh}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={renderFooter}
              />
            </View>
          </View>
        );
      })}
      <DividerComponent height={40} />
    </ParallaxScrollView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({});
