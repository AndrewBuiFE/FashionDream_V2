import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import RnRangeSlider from 'rn-range-slider';
import {FILTER_CATEGORY, FILTER_COLOR, FILTER_SIZE} from '../../assets/data';
import ColorComponent from '../../components/ColorComponent';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import PickerComponent from '../../components/PickerComponent';
import RadiusButton from '../../components/RadiusButton';
import TagComponent from '../../components/TagComponent';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {ScreenName} from '../../shared/constants/ScreenName';

// https://github.com/githuboftigran/rn-widgets-demo/tree/master/src/Slider
const THUMB_RADIUS = 11;

const Thumb = () => <View style={styles.thumb} />;
const Rail = () => <View style={styles.rail} />;
const RailSelected = () => <View style={styles.railSelected} />;
const Label = ({text, ...restProps}) => {
  return (
    <View style={styles.label} {...restProps}>
      <Text style={styles.labelText}>{text}</Text>
    </View>
  );
};
const Notch = props => <View style={styles.notch} {...props} />;
/**
 * @param {{title: string, customStyle: import('react-native').StyleProp<import('react-native').ViewStyle>}} param0
 * @return {JSX.Element}
 */
const FilterTitle = ({title, customStyle}) => (
  <View
    style={{
      marginTop: 24,
      height: 42,
      justifyContent: 'center',
      ...customStyle,
    }}>
    <Text style={AppText.smallTitle}>{title}</Text>
  </View>
);
/**
 * @author hoang
 * @description filter screen
 * @returns {JSX.Element}
 */
const FilterModals = () => {
  // common hooks
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(1000);
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const [generalFilter, setFilter] = useState({
    colorIndex: 0,
    sizeIndex: 0,
    categoryIndex: 0,
    brandIndex: 0,
  });
  // render function
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={`$${value}`} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const renderColor = useCallback(
    ({item, index}) => {
      return (
        <ColorComponent
          backgroundColor={item}
          isCheck={generalFilter.colorIndex === index ? true : false}
          onColorPress={() => {
            setFilter({...generalFilter, colorIndex: index});
          }}
        />
      );
    },
    [generalFilter],
  );
  const renderSeperator = useCallback(() => {
    return <DividerComponent width={20} />;
  }, []);

  // utility function
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: AppColors.primaryBackground,
      }}>
      <HeaderComponent
        type="medium"
        leftIcon={AppIcons.back_arrow}
        title="Filters"
        onLeftIconPress={goBack}
      />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 16}}
        showsVerticalScrollIndicator={false}>
        <FilterTitle title="Price range" customStyle={{marginTop: 0}} />
        <View
          style={{
            height: 40,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={AppText.primaryText}>{`$${low}`}</Text>
            <Text style={AppText.primaryText}>{`$${high}`}</Text>
          </View>
          <RnRangeSlider
            min={0}
            max={1000}
            step={1}
            floatingLabel
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            // renderLabel={renderLabel}
            // renderNotch={renderNotch}
            onValueChanged={handleValueChange}
          />
        </View>
        <FilterTitle title="Colors" customStyle={{}} />
        <View style={{height: 44, marginTop: 24}}>
          <FlatList
            data={FILTER_COLOR}
            renderItem={renderColor}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={renderSeperator}
          />
        </View>
        <FilterTitle title="Sizes" customStyle={{}} />
        <View style={{height: 40, marginTop: 24, flexDirection: 'row'}}>
          {FILTER_SIZE.map((size, index) => {
            let isActive = generalFilter.sizeIndex === index;
            return (
              <TagComponent
                key={index}
                size="medium"
                tag={size}
                shape="square"
                type={isActive ? 'redTag' : 'blackTag'}
                hasBorder={!isActive}
                tagViewStyle={{
                  marginLeft: index == 0 ? 0 : 16,
                }}
                onTagPress={() => {
                  setFilter({...generalFilter, sizeIndex: index});
                }}
              />
            );
          })}
        </View>
        <FilterTitle title="Categories" customStyle={{}} />
        <View
          style={{
            marginTop: 24,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {FILTER_CATEGORY.map((cate, index) => {
            let isActive = generalFilter.categoryIndex === index;
            return (
              <TagComponent
                key={index}
                size="large"
                tag={cate}
                shape="round"
                type={isActive ? 'redTag' : 'blackTag'}
                hasBorder={!isActive}
                tagViewStyle={{
                  marginLeft: index == 0 || index == 3 ? 0 : 22,
                  marginTop: index < 3 ? 0 : 12,
                }}
                onTagPress={() => {
                  setFilter({...generalFilter, categoryIndex: index});
                }}
              />
            );
          })}
        </View>
        <PickerComponent
          description="adidas Originals, Jack & Jones, s.Oliver"
          title="Brand"
          onPickerPress={() => {
            navigation.navigate(ScreenName.brandModals);
          }}
          customStyle={{
            marginTop: 24,
            backgroundColor: AppColors.primaryBackground,
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <RadiusButton
            type="disabledButton"
            title="Discard"
            buttonCustomStyle={{width: 160, height: 36}}
          />
          <RadiusButton
            type="redButton"
            title="Apply"
            buttonCustomStyle={{width: 160, height: 36}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  thumb: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 2,
    // borderColor: '#7f7f7f',
    backgroundColor: AppColors.primaryRed,
  },
  rail: {
    // flex: 1,
    width: '100%',
    height: 4,
    borderRadius: 2,
    backgroundColor: AppColors.smallTitleText,
  },
  railSelected: {
    height: 4,
    backgroundColor: AppColors.primaryRed,
    borderRadius: 2,
  },
  notch: {
    width: 8,
    height: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#4499ff',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
  label: {
    alignItems: 'space-between',
    padding: 8,
    backgroundColor: '#4499ff',
    borderRadius: 4,
  },
  labelText: {
    fontSize: 16,
    color: '#fff',
  },
});
export default FilterModals;
