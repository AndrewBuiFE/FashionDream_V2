import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import DividerComponent from '../../components/DividerComponent';
import FilterComponent from '../../components/FilterComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppIcons} from '../../shared/constants/AppIcons';
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
  let headerTitle = props.route.params.title;
  const keyExtractor = useCallback(item => item.id, []);
  const renderSeperator = () => {
    return <DividerComponent height={30} width={8} />;
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
  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        title={headerTitle}
        type="large"
        leftIcon={AppIcons.back_arrow}
        rightIcon={AppIcons.search}
      />
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
      <FilterComponent
        customFilterView={{marginTop: 18, backgroundColor: 'red'}}
      />
    </View>
  );
};
export default CatalogScreen;
