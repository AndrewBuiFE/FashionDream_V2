import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {CommonApi} from '../controllers/apis/Api';
import {AppColors} from '../shared/constants/AppColors';
const TestApiScreen = () => {
  const api = new CommonApi();
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: AppColors.primaryBackground,
      }}
      contentContainerStyle={{
        alignItems: 'center',
      }}>
      <TouchableOpacity
        title="Log in"
        onPress={async () => {
          api.logIn({
            email: 'buiviethoang12062000@gmail.com',
            password: 'Rbfatman123',
          });
        }}
        style={{
          width: 375,
          height: 50,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        children={<Text style={{color: 'white', fontSize: 20}}>LOG IN</Text>}
      />
      <TouchableOpacity
        title="Get all product"
        style={{
          width: 375,
          height: 50,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={async () => {
          api.getAllProduct();
        }}
        children={
          <Text style={{color: 'white', fontSize: 20}}>GET ALL PRODUCT</Text>
        }
      />
    </ScrollView>
  );
};
export default TestApiScreen;
