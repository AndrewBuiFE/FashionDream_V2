import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {PRODUCT} from '../assets/data';
import CheckBox from '../components/CheckBox';
import CircleButton from '../components/CircleButton';
import ColorComponent from '../components/ColorComponent';
import DemoComponent from '../components/DemoComponent';
import ConfirmDialog, {
  ConfirmDialogRef,
} from '../components/dialog/ConfirmDialog';
import DividerComponent from '../components/DividerComponent';
import EditTextComponent from '../components/EditTextComponent';
import FilterComponent from '../components/FilterComponent';
import HeaderComponent from '../components/HeaderComponent';
import LabelComponent from '../components/LabelComponent';
import ProductItemComponent from '../components/ProductItemComponent';
import RadiusButton from '../components/RadiusButton';
import SearchBar from '../components/SearchBar';
import StarComponent from '../components/StarComponent';
import TagComponent from '../components/TagComponent';
import ScaleToast from '../components/toast/ScaleToast';
import ActionSheet from '../screens/modals/ActionSheet';
import {AppColors} from '../shared/constants/AppColors';
import {DeviceConstant} from '../shared/constants/AppGlobal';
import {AppIcons} from '../shared/constants/AppIcons';
const TestComponent = () => {
  const [text, setText] = useState('');
  return (
    <ScrollView
      contentContainerStyle={{
        // flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
      }}>
      <DividerComponent />
      <Text>Radius button</Text>
      <RadiusButton
        title="Write a reviews"
        type="redButton"
        // icon={AppIcons.pen}
        buttonCustomStyle={{width: 0.3413 * DeviceConstant.screenWidth}}
        // titleCustomStyle={{color: 'blue'}}
        onButtonPress={() => {
          console.log('Press!');
        }}
      />
      <DividerComponent />
      <Text>Edit Text</Text>
      <EditTextComponent
        inputLabel="Label"
        inputText={text}
        // isShowLabel
        alertText="Error message"
        isAlerting
        onTextEdit={value => {
          console.log(value);
          setText(value);
        }}
        isShowRightIcon
        rightIcon={AppIcons.redCross}
        viewStyle={{height: 36, borderRadius: 8}}
      />
      <DividerComponent />
      <Text>Search Bar</Text>
      <SearchBar
        placeholder="kdfjsd"
        onSearch={value => {
          console.log('search value', value);
        }}
      />
      <DividerComponent />
      <Text>Circle Button</Text>
      <CircleButton
        icon={AppIcons.search}
        size="small"
        type="redButton"
        onButtonPress={() => {
          console.log('press!');
        }}
      />
      <DividerComponent />
      <Text>Check Box</Text>
      <CheckBox
        hasText
        content="asfdsf"
        type="redCheckbox"
        isCheck
        onCheck={() => {
          console.log('Check!');
        }}
      />
      <DividerComponent />
      <Text>Tag</Text>
      <TagComponent
        tag="Tag"
        type="redTag"
        size="large"
        onTagPress={() => {
          console.log('Tag press!');
        }}
      />
      <DividerComponent />
      <Text>Label</Text>
      <LabelComponent label="HOT" type="redLabel" />
      <DividerComponent />
      <Text>Filter</Text>
      <FilterComponent
        onFilterPress={() => {
          console.log('Filter');
        }}
        onSortPress={() => {
          console.log('Sort');
        }}
        onViewChange={() => {
          console.log('View changed!');
        }}
      />
      <DividerComponent />
      <Text>Color</Text>
      <ColorComponent
        backgroundColor={AppColors.hotRed}
        isCheck
        onColorPress={() => {
          console.log('Color!');
        }}
      />
      <DividerComponent />
      <Text>Header</Text>
      <HeaderComponent
        leftIcon={AppIcons.back_arrow}
        // rightIcon={AppIcons.checkbox_inactive}
        type="medium"
        title="Headline"
        onLeftIconPress={() => {
          console.log('back!');
        }}
      />
      <DividerComponent />
      <Text>Color</Text>
      <ProductItemComponent product={PRODUCT[0]} isHorizontal />
      <DividerComponent />
      <Text>Color</Text>
      <StarComponent quantity={5} size="small" />
      <DividerComponent />
      <Text>Color</Text>
      <ScaleToast />
      <ConfirmDialog dialogRef={ConfirmDialogRef} />
      <Text>Demo</Text>
      <DividerComponent />
      <DemoComponent />
      <ActionSheet />
    </ScrollView>
  );
};
export default TestComponent;
