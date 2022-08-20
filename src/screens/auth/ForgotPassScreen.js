import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EditTextComponent from '../../components/EditTextComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';

const ForgotPassScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent
        type="large"
        leftIcon={AppIcons.back_arrow}
        title="Forgot password"
      />
      <View style={{marginTop: 87}}>
        <Text style={AppText.primaryText}>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>
      </View>
      <View style={styles.inputSection}>
        <EditTextComponent
          isShowLabel
          // isAlerting
          // isShowRightIcon
          alertText="Wrong email"
          inputLabel="Email"
          onTextEdit={value => {
            console.log('Value: ', value);
          }}
        />
      </View>
      <RadiusButton
        title="SEND"
        type="redButton"
        onButtonPress={() => {
          console.log('Send!');
        }}
        buttonCustomStyle={{marginTop: 55}}
      />
    </View>
  );
};
export default ForgotPassScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryBackground,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputSection: {
    marginTop: 16,
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
