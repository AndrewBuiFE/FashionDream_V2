import React from 'react';
import {Text, View} from 'react-native';
import DividerComponent from '../components/DividerComponent';
import RadiusButton from '../components/RadiusButton';
const TestComponent = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <DividerComponent />
      <Text>Radius button</Text>
      <RadiusButton
        title="VIEW ALL ITEMS"
        type="whiteButton"
        // buttonCustomStyle={{backgroundColor: 'blue'}}
        // titleCustomStyle={{color: 'blue'}}
        onButtonPress={() => {
          console.log('Press!');
        }}
      />
    </View>
  );
};
export default TestComponent;
