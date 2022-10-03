import axios from 'axios';
import React from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import Api from '../controllers/apis/Api';
import {AppColors} from '../shared/constants/AppColors';
const TestApiScreen = () => {
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
          Api.logIn({
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
          Api.getAllProduct();
        }}
        children={
          <Text style={{color: 'white', fontSize: 20}}>GET ALL PRODUCT</Text>
        }
      />
      <TouchableOpacity
        title="Get all payment cards"
        style={{
          width: 375,
          height: 50,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={async () => {
          Api.createPaymentCard();
        }}
        children={
          <Text style={{color: 'white', fontSize: 20}}>
            GET ALL PAYMENT CARDS
          </Text>
        }
      />
      <TouchableOpacity
        title="Create a payment card"
        style={{
          width: 375,
          height: 50,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={async () => {
          // Api.createPaymentCard({
          //   cardHolder: 'DFJKDJFD',
          //   cardNumber: 1234453243532438,
          //   cvv: 12839,
          //   defaultPayment: false,
          //   expireDate: '2000-06-12',
          // });
          await axios({
            method: 'post',
            url: 'http://192.168.0.103:3000/payment-method/create',
            data: {
              cardHolder: 'DFJKDJFD',
              cardNumber: 1234453243532438,
              cvv: 12839,
              defaultPayment: false,
              expireDate: '2000-06-12',
            },
          }).then(result => console.log(result));
        }}
        children={
          <Text style={{color: 'white', fontSize: 20}}>
            CREATE A PAYMENT CARD
          </Text>
        }
      />
    </ScrollView>
  );
};
export default TestApiScreen;
