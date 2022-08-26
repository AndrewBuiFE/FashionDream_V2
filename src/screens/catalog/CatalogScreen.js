import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {PRODUCT} from '../../assets/data';
import DividerComponent from '../../components/DividerComponent';
import FilterComponent from '../../components/FilterComponent';
import HeaderComponent from '../../components/HeaderComponent';
import ProductItemComponent from '../../components/ProductItemComponent';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppIcons} from '../../shared/constants/AppIcons';
import Utils from '../../shared/helpers/Utils';
const TYPE = [
  {
    id: 1,
    type: 'T-shirts',
  },
  {
    id: 2,
    type: 'Crop-tops',
  },
  {
    id: 3,
    type: 'Sleeveless',
  },
  {
    id: 4,
    type: 'Crop-tops',
  },
  {
    id: 5,
    type: 'Sleeveless',
  },
];

const CatalogScreen = props => {
  // used variables
  const sortOptions = [
    'Popular',
    'Newest',
    'Customer review',
    'Price: lowest to high',
    'Price: highest to low',
  ];
  // hook
  let headerTitle = props.route.params.title;
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const [layout, changeLayout] = useState(true); // true - horizontal, false - vertical

  // utility function
  const keyExtractor = useCallback(item => item.id, []);
  // rendering functions
  const renderSeperator = () => {
    return <DividerComponent height={30} width={8} />;
  };
  const renderProductSeperator = () => {
    return <DividerComponent height={26} />;
  };
  const renderType = ({item, index}) => {
    return (
      <RadiusButton
        type="whiteButton"
        title={item.type}
        buttonCustomStyle={{width: 100, height: 30}}
      />
    );
  };
  const renderHeader = () => <DividerComponent height={26} />;
  const renderFooter = () => <DividerComponent height={30} />;
  const renderProduct = ({item, index}) => {
    return (
      <ProductItemComponent
        isHorizontal={layout}
        product={item}
        size={'large'}
        // isFavorite
        isBottomRightButtonActive
      />
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        title={headerTitle}
        type="large"
        leftIcon={AppIcons.back_arrow}
        rightIcon={AppIcons.search}
        onLeftIconPress={goBack}
      />
      <View>
        <FlatList
          data={TYPE}
          renderItem={renderType}
          key={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={renderSeperator}
          contentContainerStyle={{
            marginLeft: 16,
            marginTop: 12,
            height: 30,
          }}
        />
      </View>
      <View style={{marginHorizontal: 16, marginTop: 18}}>
        <FilterComponent
          customFilterView={{}}
          onViewChange={() => {
            changeLayout(currState => !currState);
          }}
          onSortPress={() => {
            Utils.showActionSheet({
              options: sortOptions,
              title: 'Sort by',
            });
          }}
        />
      </View>

      <View style={{marginTop: 26, flex: 1}}>
        {/* mount flatlist when view change (specify distint key for each view) */}
        {layout ? (
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
            // ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
            ItemSeparatorComponent={renderProductSeperator}
          />
        )}
      </View>
    </View>
  );
};
export default CatalogScreen;
