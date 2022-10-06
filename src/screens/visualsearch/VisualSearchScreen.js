import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert, ImageBackground, Text, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import HeaderComponent from '../../components/HeaderComponent';
import RadiusButton from '../../components/RadiusButton';
import {AppColors} from '../../shared/constants/AppColors';
import {AppIcons} from '../../shared/constants/AppIcons';
import {AppImages} from '../../shared/constants/AppImages';
var RNFS = require('react-native-fs');
const VisualSearchScreen = () => {
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  // functions
  const onCameraOpen = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    checkPermission();
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        Alert.alert(response.customButton);
      } else {
        if (response.assets[0].uri == null) {
          return;
        }
        let imageNameIndex = response.assets[0].uri.lastIndexOf('/') + 1;
        let imageName = response.assets[0].uri.substring(
          imageNameIndex,
          response.assets[0].uri.length,
        );
        let destPath = `file://${RNFS.DocumentDirectoryPath}/${imageName}`;
        RNFS.moveFile(response.assets[0].uri, destPath);
      }
    });
  };
  const onImageUpload = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        Alert.alert(response.customButton);
      } else {
        RNFS.exists(response.assets[0].uri).then(exists => {
          if (exists) {
            console.log('Image EXISTS');
          } else {
            console.log('Image DOES NOT EXIST');
          }
        });
        if (response.assets[0].uri == null) {
          return;
        }
        let imageNameIndex = response.assets[0].uri.lastIndexOf('/') + 1;
        let imageName = response.assets[0].uri.substring(
          imageNameIndex,
          response.assets[0].uri.length,
        );
        let destPath = `file://${RNFS.DocumentDirectoryPath}/${imageName}`;
        RNFS.exists(destPath).then(exists => {
          if (exists) {
            console.log('destPath EXISTS');
          } else {
            console.log('destPath DOES NOT EXIST');
          }
        });
        RNFS.moveFile(response.assets[0].uri, destPath);
      }
    });
  };
  const checkPermission = () => {
    check(PERMISSIONS.IOS.LOCATION_ALWAYS)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        // …
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: AppColors.primaryBackground}}>
      <HeaderComponent
        type="medium"
        title="Visual search"
        leftIcon={AppIcons.back_arrow}
        onLeftIconPress={goBack}
      />
      <ImageBackground
        source={AppImages.visual_search}
        style={{flex: 1, paddingHorizontal: 16}}>
        <Text
          style={{
            width: '87%',
            fontFamily: 'Metropolis',
            fontSize: 24,
            lineHeight: 28.8,
            color: '#f7f7f7',
            marginTop: 198,
          }}>
          Search for an outfit by taking a photo or uploading an image
        </Text>
        <RadiusButton
          type="redButton"
          title="TAKE A PHOTO"
          buttonCustomStyle={{marginTop: 28}}
          onButtonPress={() => {
            // navigation.navigate(ScreenName.takePhotoScreen);
            setTimeout(() => {
              onCameraOpen();
            }, 200);
          }}
        />
        <RadiusButton
          type="disabledButton"
          title="UPLOAD AN IMAGE"
          buttonCustomStyle={{marginTop: 16}}
          onButtonPress={() => {}}
        />
      </ImageBackground>
    </View>
  );
};
export default VisualSearchScreen;
