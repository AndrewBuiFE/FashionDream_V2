import {Formik} from 'formik';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import * as Yup from 'yup';
import CheckBox from '../../components/CheckBox';
import DividerComponent from '../../components/DividerComponent';
import EditTextComponent from '../../components/EditTextComponent';
import Modalheader from '../../components/ModalHeader';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppText} from '../../shared/constants/AppGlobal';
import {AppIcons} from '../../shared/constants/AppIcons';
import {AppImages} from '../../shared/constants/AppImages';
/**
 * @author hoang
 * @description modal to use in screens
 * @typedef Prop
 * @property {boolean} isModalVisible
 * @property {Function} dismissModal
 * @property {Function} onAddingCard
 * @param {Prop} props
 */
const PaymentCardModal = props => {
  let {isModalVisible, dismissModal, onAddingCard} = props;
  // hooks
  const [isDefault, setDefault] = useState(false);
  // utility functions
  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      animationIn="slideInUp"
      avoidKeyboard
      backdropColor="rgba(0, 0, 0, 0.3)"
      hasBackdrop
      coverScreen
      swipeDirection={'down'}
      onSwipeComplete={dismissModal}
      statusBarTranslucent={true}
      backdropTransitionInTiming={200}
      onBackdropPress={dismissModal}
      style={{
        margin: 0,
        bottom: 0,
        position: 'absolute',
        width: '100%',
        height: 572,
      }}>
      <Formik
        initialValues={{
          cardHolder: '',
          cardNumber: 0,
          expireDate: '',
          cvv: 0,
        }}
        onSubmit={(value, {resetForm}) => {
          onAddingCard({...value, defaultPayment: isDefault});
          resetForm();
          dismissModal();
        }}
        validationSchema={Yup.object({
          cardHolder: Yup.string('Card name is invalid')
            .uppercase()
            .required('Name should not be left empty'),
          cardNumber: Yup.number('Card number is invalid')
            .min(
              Math.pow(10, 11),
              'Card number should contain at least 12 letters',
            )
            .required('Card number should not be empty'),
          cvv: Yup.number('Cvv is invalid')
            .min(1000, 'Cvv should contain at least 4 letters')
            .required('Cvv should not be empty'),
          expireDate: Yup.date('Expire date is invalid').required(
            'Expire date should not be empty',
          ),
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
            <View
              style={{
                backgroundColor: AppColors.tabBar,
                height: 572,
                borderTopRightRadius: 34,
                borderTopLeftRadius: 34,
                paddingHorizontal: 16,
              }}>
              <Modalheader />
              <Text
                style={[
                  AppText.mediumTitle,
                  {marginTop: 16, textAlign: 'center'},
                ]}>
                Add new card
              </Text>
              <DividerComponent height={18} />
              <EditTextComponent
                placeholder="Name on card"
                isAlerting={!!errors.cardHolder && touched.cardHolder}
                alertText={errors.cardHolder}
                onTextEdit={handleChange('cardHolder')}
              />
              <DividerComponent height={20} />
              <EditTextComponent
                isShowLabel
                inputLabel="Card number"
                isShowRightIcon
                rightIcon={AppImages.mastercard_white}
                isAlerting={!!errors.cardNumber && touched.cardNumber}
                alertText={errors.cardNumber}
                onTextEdit={handleChange('cardNumber')}
                keyboardType={'phone-pad'}
                type="credit-card"
              />
              <DividerComponent height={20} />
              <EditTextComponent
                isShowLabel
                inputLabel="Expire Date"
                isAlerting={!!errors.expireDate && touched.expireDate}
                alertText={errors.expireDate}
                onTextEdit={handleChange('expireDate')}
                type="datetime"
              />
              <DividerComponent height={20} />
              <EditTextComponent
                isShowLabel
                inputLabel="CVV"
                isShowRightIcon
                rightIcon={AppIcons.help}
                isAlerting={!!errors.cvv && touched.cvv}
                alertText={errors.cvv}
                onTextEdit={handleChange('cvv')}
                keyboardType={'phone-pad'}
              />
              <CheckBox
                type="whiteCheckbox"
                hasTextRight
                textRight="Set as default payment method"
                isCheck={isDefault}
                onCheck={() => {
                  setDefault(currState => !currState);
                }}
                customStyle={{marginTop: 29}}
              />
              <RadiusButton
                title="ADD CARD"
                type="redButton"
                buttonCustomStyle={{marginTop: 22}}
                onButtonPress={() => {
                  handleSubmit();
                }}
              />
            </View>
          );
        }}
      </Formik>
    </ReactNativeModal>
  );
};
export default PaymentCardModal;
