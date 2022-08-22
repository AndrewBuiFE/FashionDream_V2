import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ScreenName} from '../shared/constants/ScreenName';
import TestComponent from '../tests/TestComponents';

const Stack = createNativeStackNavigator();
const ShopNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.testComponent}
        component={TestComponent}
        options={{
          headerShown: false,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};
export default ShopNavigator;
