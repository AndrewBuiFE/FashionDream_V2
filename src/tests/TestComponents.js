import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CheckBox from '../components/CheckBox';
import CircleButton from '../components/CircleButton';
import DividerComponent from '../components/DividerComponent';
import EditTextComponent from '../components/EditTextComponent';
import LabelComponent from '../components/LabelComponent';
import RadiusButton from '../components/RadiusButton';
import SearchBar from '../components/SearchBar';
import TagComponent from '../components/TagComponent';
import {DeviceConstant} from '../shared/constants/AppGlobal';
import {AppIcons} from '../shared/constants/AppIcons';
const TestComponent = () => {
  const [text, setText] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center'}}>
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
      <SearchBar
        placeholder="kdfjsd"
        onSearch={value => {
          console.log('search value', value);
        }}
      />
      <DividerComponent />
      <CircleButton
        icon={AppIcons.search}
        size="small"
        type="redButton"
        onButtonPress={() => {
          console.log('press!');
        }}
      />
      <DividerComponent />
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
      <TagComponent
        tag="Tag"
        type="redTag"
        size="large"
        onTagPress={() => {
          console.log('Tag press!');
        }}
      />
      <DividerComponent />
      <LabelComponent label="HOT" type="redLabel" />
    </View>
  );
};
export default TestComponent;
