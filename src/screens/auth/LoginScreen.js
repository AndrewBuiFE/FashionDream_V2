import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../../shared/constants/AppColors';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>asdfdf</Text>
      <TouchableOpacity
        style={{
          width: 45,
          height: 45,
          borderRadius: 50,
          backgroundColor: 'red',
        }}
        onPress={() => console.log('Herre!')}>
        <Text>Here</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryBackground,
    flex: 1,
  },
});
