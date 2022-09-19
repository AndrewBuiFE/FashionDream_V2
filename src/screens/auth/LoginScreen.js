/* eslint-disable no-shadow */
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Yup from 'yup';
import CircleButton from '../../components/CircleButton';
import DividerComponent from '../../components/DividerComponent';
import EditTextComponent from '../../components/EditTextComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RadiusButton from '../../components/RadiusButton';
import {CommonApi} from '../../controllers/apis/Api';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {ScreenName} from '../../shared/constants/ScreenName';
import Utils from '../../shared/helpers/Utils';

const LoginScreen = () => {
  // hooks
  const navigation = useNavigation();
  // common vars
  const commonApi = new CommonApi();
  return (
    <View style={styles.container}>
      <HeaderComponent
        type="large"
        leftIcon={AppIcons.back_arrow}
        title="Login"
        onLeftIconPress={() => {
          Utils.goBack(navigation);
        }}
      />
      <View style={{paddingHorizontal: 16}}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={async (value, {resetForm}) => {
            console.log('Value: ', value);
            const params = {
              email: value.email,
              password: value.password,
            };
            await commonApi.logIn(params).then(res => {
              console.log('res', res);
              if (res.statusCode == 200) {
                navigation.navigate(ScreenName.homeScreen);
              }
            });

            resetForm();
          }}
          validationSchema={Yup.object({
            email: Yup.string('email is invalid')
              .email('email is not valid')
              .required('email should not be left empty'),
            password: Yup.string('password is invalid')
              .min(6)
              .max(18) // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/g,
                'password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
              )
              .required('password should not be left empty'),
          })}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            dirty,
            isValid,
            values,
            errors,
            touched,
          }) => {
            return (
              <View>
                <View style={styles.inputSection}>
                  <EditTextComponent
                    isShowLabel
                    isShowRightIcon={!!touched.email}
                    isAlerting={!!errors.email && touched.email}
                    alertText={errors.email}
                    inputLabel="Email"
                    inputText={values.email}
                    onTextEdit={handleChange('email')}
                    onTextBlur={handleBlur('email')}
                  />
                  <DividerComponent height={8} />
                  <EditTextComponent
                    placeholder="Password"
                    isShowRightIcon={!!touched.password}
                    alertText={errors.password}
                    isAlerting={!!errors.password && touched.password}
                    inputText={values.password}
                    onTextEdit={handleChange('password')}
                    onTextBlur={handleBlur('password')}
                  />
                </View>
                <TouchableOpacity
                  style={styles.suggestion}
                  onPress={() => {
                    navigation.navigate(ScreenName.forgotPassScreen);
                  }}>
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
                  type={isValid && dirty ? 'redButton' : 'disabledButton'}
                  onButtonPress={async () => {
                    if (isValid && dirty) {
                      handleSubmit();
                    }
                  }}
                  buttonCustomStyle={{marginTop: 30}}
                />
              </View>
            );
          }}
        </Formik>

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
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primaryBackground,
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
