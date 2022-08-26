import React, {useCallback, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import RnRangeSlider from 'rn-range-slider';
import ColorComponent from '../../components/ColorComponent';
import DividerComponent from '../../components/DividerComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';

const COLORS = [
  '#020202',
  '#F6F6F6',
  '#F48117',
  '#BEA9A9',
  '#91BA4F',
  '#2CB1B1',
];
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
 *
 * @param {string} title
 * @param {import('react-native').StyleProp<import('react-native').ViewStyle>} customStyle
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
  // render function
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={`$${value}`} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const renderColor = ({item, index}) => {
    return <ColorComponent backgroundColor={item} isCheck />;
  };
  const renderSeperator = () => <DividerComponent width={20} />;
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
        customViewStyle={{backgroundColor: 'red'}}
      />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 16}}
        showsVerticalScrollIndicator={false}>
        <FilterTitle title="Price range" customStyle={{marginTop: 0}} />
        <View
          style={{
            height: 40,
            backgroundColor: 'red',
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
        <FilterTitle title="Colors" />
        <View style={{height: 44, marginTop: 24}}>
          <FlatList
            data={COLORS}
            renderItem={renderColor}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={renderSeperator}
          />
        </View>
        <FilterTitle title="Sizes" />
        <View style={{height: 40, backgroundColor: 'red', marginTop: 24}} />
        <FilterTitle title="Categories" />
        <View style={{height: 92, backgroundColor: 'red', marginTop: 24}} />
        <View style={{height: 58, marginTop: 24}}>
          <Text>Brands</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 6,
          }}>
          <RadiusButton
            type="disabledButton"
            title="Discard"
            buttonCustomStyle={{width: 160}}
          />
          <RadiusButton
            type="redButton"
            title="Apply"
            buttonCustomStyle={{width: 160}}
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
