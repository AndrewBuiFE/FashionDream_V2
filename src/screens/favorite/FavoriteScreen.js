import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {PRODUCT, SORT_TITLE, TYPE} from '../../assets/data';
import DividerComponent from '../../components/DividerComponent';
import FilterComponent from '../../components/FilterComponent';
import HeaderComponent from '../../components/HeaderComponent';
import ProductFavoriteComponent from '../../components/ProductFavoriteComponent';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppIcons} from '../../shared/constants/AppIcons';
import {ScreenName} from '../../shared/constants/ScreenName';
import SortModal from '../modals/SortModal';

/**
 * @author Hoang
 * @description FavoriteScreen
 */
const FavoriteScreen = props => {
  // used variables
  /**
   * @type {Array<import('../../models/types/index.d').Product>}
   */
  const favoritedProduct = PRODUCT.filter(product => product.isFavorited);
  // hook
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const [layout, changeLayout] = useState(true); // true - horizontal, false - vertical
  const [isModalVisible, showModal] = useState(false);
  const [modalActiveIndex, setActiveIndex] = useState(0);
  // utility function
  const dismissModal = () => {
    showModal(false);
  };
  const keyExtractor = useCallback(item => item.id, []);
  // rendering functions
  const renderSeperator = useCallback(() => {
    return <DividerComponent height={30} width={8} />;
  }, []);
  const renderProductSeperator = useCallback(() => {
    return <DividerComponent height={26} />;
  }, []);
  const renderType = useCallback(
    /**
     * @type {import('react-native').ListRenderItem<object>}
     */
    ({item, index}) => {
      return (
        <RadiusButton
          type="whiteButton"
          title={item.type}
          buttonCustomStyle={{width: 100, height: 30}}
        />
      );
    },
    [],
  );
  const renderFooter = useCallback(() => <DividerComponent height={30} />, []);
  /**
   * @type {import('react-native').ListRenderItem<import('../../models/types/index.d').Product>}
   */
  const renderProduct = useCallback(
    /**
     * @type {import('react-native').ListRenderItem<import('../../models/types/index.d').Product>}
     */
    ({item}) => {
      return (
        <ProductFavoriteComponent
          isHorizontal={layout}
          product={item}
          size={'large'}
          isBottomRightButtonActive={item.isFavorited}
          isFavorite={true}
          isProductSoldOut={!item.isAvailable}
        />
      );
    },
    [layout],
  );
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <SortModal
        dismissModal={dismissModal}
        isModalVisible={isModalVisible}
        activeIndex={modalActiveIndex}
        onSortPress={sortIndex => {
          switch (sortIndex) {
            case 0: {
              console.log('0');
              setActiveIndex(0);
              break;
            }
            case 1: {
              console.log('1');
              setActiveIndex(1);
              break;
            }
            case 2: {
              console.log('2');
              setActiveIndex(2);

              break;
            }
            case 3: {
              console.log('3');
              setActiveIndex(3);
              break;
            }
            case 4: {
              console.log('4');
              setActiveIndex(4);
              break;
            }
            default:
              console.log('0');
              break;
          }
        }}
      />
      <HeaderComponent
        title={'Favorites'}
        type={layout ? 'large' : 'medium'}
        // leftIcon={AppIcons.back_arrow}
        rightIcon={AppIcons.search}
        customAction="search"
        onLeftIconPress={goBack}
      />
      <View>
        <FlatList
          data={TYPE}
          renderItem={renderType}
          key={keyExtractor}
          ItemSeparatorComponent={renderSeperator}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginLeft: 16,
            marginTop: 12,
            height: 30,
          }}
        />
      </View>
      <View style={{marginHorizontal: 16, marginTop: 18}}>
        <FilterComponent
          sortTitle={SORT_TITLE[modalActiveIndex]?.title}
          isHorizontal={layout}
          customFilterView={{}}
          onFilterPress={() => {
            navigation.navigate(ScreenName.filterModals);
          }}
          onViewChange={() => {
            changeLayout(currState => !currState);
          }}
          onSortPress={() => {
            showModal(true);
          }}
        />
      </View>

      <View style={{marginTop: 26, flex: 1}}>
        {/* mount flatlist when view change (specify distint key for each view) */}
        {layout ? (
          <FlatList
            data={favoritedProduct}
            renderItem={renderProduct}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={() => {
                  console.log('Refreshinsg...');
                }}
                title="Refresh control"
                progressBackgroundColor={AppColors.lightDark}
                progressViewOffset={3}
                titleColor={AppColors.hotRed}
                tintColor={AppColors.hotRed}
              />
            }
            contentContainerStyle={{
              marginHorizontal: 16,
            }}
            key={'#'}
            keyExtractor={item => '#' + item.id}
            numColumns={1}
            // ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={renderProductSeperator}
          />
        ) : (
          <FlatList
            data={PRODUCT}
            renderItem={renderProduct}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={() => {
                  console.log('Refreshinsg...');
                }}
                title="Refresh control"
                progressBackgroundColor={AppColors.lightDark}
                progressViewOffset={3}
                titleColor={AppColors.hotRed}
                tintColor={AppColors.hotRed}
              />
            }
            contentContainerStyle={{
              marginHorizontal: 16,
            }}
            key={'_'}
            keyExtractor={item => '_' + item.id}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-around',
            }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={renderFooter}
            ItemSeparatorComponent={renderProductSeperator}
          />
        )}
      </View>
    </View>
  );
};
export default FavoriteScreen;
