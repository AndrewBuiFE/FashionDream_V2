import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import EditTextComponent from '../../components/EditTextComponent';
import HeaderComponent from '../../components/HeaderComponent';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppIcons} from '../../shared/constants/AppIcons';
import {ScreenName} from '../../shared/constants/ScreenName';

const ForgotPassScreen = () => {
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  return (
    <View style={styles.container}>
      <HeaderComponent
        type="large"
        leftIcon={AppIcons.back_arrow}
        title="Forgot password"
        onLeftIconPress={goBack}
      />
      <Formik
        initialValues={{email: ''}}
        onSubmit={(value, {resetForm}) => {
          console.log('Value: ', value);
          resetForm();
        }}
        validationSchema={Yup.object({
          email: Yup.string('email is invalid')
            .email('email is not valid')
            .required('email should not be left empty'),
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
              <RadiusButton
                title="SEND"
                type={isValid && dirty ? 'redButton' : 'disabledButton'}
                onButtonPress={() => {
                  if (isValid && dirty) {
                    handleSubmit();
                    navigation.navigate(ScreenName.loginScreen);
                  }
                }}
                buttonCustomStyle={{marginTop: 30}}
              />
            </View>
          );
        }}
      </Formik>
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
