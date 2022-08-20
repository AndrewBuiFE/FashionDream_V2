import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CircleButton from '../../components/CircleButton';
import DividerComponent from '../../components/DividerComponent';
import EditTextComponent from '../../components/EditTextComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent
        type="large"
        leftIcon={AppIcons.back_arrow}
        title="Login"
      />
      <View style={styles.inputSection}>
        <EditTextComponent
          isShowLabel
          isAlerting
          alertText="Wrong email"
          inputLabel="Email"
          onTextEdit={value => {
            console.log('Value: ', value);
          }}
        />
        <DividerComponent height={8} />
        <EditTextComponent
          placeholder="Password"
          alertText="Wrong password"
          isAlerting
          onTextEdit={value => {
            console.log('Value: ', value);
          }}
        />
      </View>
      <TouchableOpacity style={styles.suggestion}>
        <Text style={AppText.primaryText}>Forgot your password?</Text>
        <View
          style={{
            marginLeft: 3,
            width: 24,
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={AppIcons.right_arrow}
            // style={{width: '100%', height: '100%'}}
          />
        </View>
      </TouchableOpacity>
      <RadiusButton
        title="LOGIN"
        type="redButton"
        onButtonPress={() => {
          console.log('Login!');
        }}
        buttonCustomStyle={{marginTop: 30}}
      />
      <View style={{marginTop: 194, alignItems: 'center'}}>
        <Text style={AppText.primaryText}>Or login with social account</Text>
      </View>
      <View style={styles.socialSection}>
        <CircleButton isSocialButton icon={AppIcons.google} />
        <CircleButton
          isSocialButton
          icon={AppIcons.facebook}
          customStyle={{marginLeft: 16}}
        />
      </View>
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryBackground,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputSection: {
    marginTop: 73,
  },
  suggestion: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 14,
    height: 24,
    alignItems: 'center',
  },
  socialSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
});
