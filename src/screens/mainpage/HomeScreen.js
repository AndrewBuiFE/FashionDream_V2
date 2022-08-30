import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PRODUCT, SECTION} from '../../assets/data';
import DividerComponent from '../../components/DividerComponent';
import ProductItemComponent from '../../components/ProductItemComponent';
import RadiusButton from '../../components/RadiusButton';
import ParallaxScrollView from '../../libs/ParallaxScrollView';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppImages} from '../../shared/constants/AppImages';
import {ScreenName} from '../../shared/constants/ScreenName';
import Utils from '../../shared/helpers/Utils';
const PARALLAX_HEADER_HEIGHT = 536;
const STICKY_HEADER_HEIGHT = 196;

const HomeScreen = () => {
  // common hooks
  const [productsFavorite, setProductsFavorite] = useState(
    PRODUCT.map(product => {
      return product.isFavorited;
    }),
  );
  console.log('productFavorites', productsFavorite);
  const [refresh, setRefresh] = useState(true);
  const navigation = useNavigation();
  // rendering function for FlatList
  const renderItem = ({item, index}) => {
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
      />
    );
  };
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
      renderForeground={() => (
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
                navigation.navigate(ScreenName.categoriesScreen);
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
              <TouchableOpacity
                style={{marginRight: 14}}
                onPress={() => {
                  Utils.showActionSheet({
                    options: ['hoang', 'bui', 'viet'],
                    cancelButtonIndex: 2,
                    destructiveButtonIndex: 1,
                    onPress: console.log,
                  });
                }}>
                <Text
                  style={[AppText.tinyTitle, {color: AppColors.primaryText}]}>
                  View all
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 22}}>
              <FlatList
                data={PRODUCT}
                renderItem={renderItem}
                horizontal
                refreshControl={
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
                }
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View style={{height: 260, width: 16}} />
                )}
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
