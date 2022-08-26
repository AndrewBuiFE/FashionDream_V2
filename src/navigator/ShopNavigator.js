import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CatalogScreen from '../screens/catalog/CatalogScreen';
import CategoriesScreen from '../screens/category/CategoriesScreen';
import PartialCategoryScreen from '../screens/category/PartialCategoryScreen';
import {ScreenName} from '../shared/constants/ScreenName';

const Stack = createNativeStackNavigator();
const ShopNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.categoriesScreen}
        component={CategoriesScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.partialCategoryScreen}
        component={PartialCategoryScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
      <Stack.Screen
        name={ScreenName.catalogScreen}
        component={CatalogScreen}
        options={{
          headerShown: false,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};
export default ShopNavigator;
