import {is} from 'immutable';
import {Alert, Share} from 'react-native';
import CodePush from 'react-native-code-push';
import InAppReview from 'react-native-in-app-review';
import Mailer from 'react-native-mail';
import * as RNPermission from 'react-native-permissions';
import {useSelector} from 'react-redux';
import {createSelector, createSelectorCreator, defaultMemoize} from 'reselect';
const createImmuableSelector = createSelectorCreator(defaultMemoize, is);
/**
 * @template T
 * Get iHoadon state
 * **This is a hook depends on redux**
 * @param {(state:import("../stores/slices/type").FashionDreamState)=>T=} selector
 * @return {T}
 */
export function useFashionDreamSelector(selector = state => state) {
  return useSelector(
    createSelector(
      createImmuableSelector(
        state => state.get('fashionDream'),
        state => state,
      ),
      selector,
    ),
  );
}

export const getCodePushVersion = async () => {
  var metadata = await CodePush.getUpdateMetadata();
  if (metadata) {
    return metadata.label;
  }
  return '';
};

export const sendEmailContact = () => {
  Mailer.mail(
    {
      subject: 'need help',
      recipients: ['buiviethoang12062000@gmail.com'],
      // ccRecipients: ['supportCC@gmail.com'],
      // bccRecipients: ['supportBCC@example.com'],
      body: '<b>You suck</b>',
      customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
      isHTML: true,
      // attachments: [
      //   {
      //     // Specify either `path` or `uri` to indicate where to find the file data.
      //     // The API used to create or locate the file will usually indicate which it returns.
      //     // An absolute path will look like: /cacheDir/photos/some image.jpg
      //     // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
      //     path: '', // The absolute path of the file from which to read data.
      //     uri: '', // The uri of the file from which to read the data.
      //     // Specify either `type` or `mimeType` to indicate the type of data.
      //     type: '', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
      //     mimeType: '', // - use only if you want to use custom type
      //     name: '', // Optional: Custom filename for attachment
      //   },
      // ],
    },
    (error, event) => {
      Alert.alert(
        error,
        event,
        [
          {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
          {
            text: 'Cancel',
            onPress: () => console.log('CANCEL: Email Error Response'),
          },
        ],
        {cancelable: true},
      );
    },
  );
};

export const handleShare = async () => {
  try {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};

export const reviewApp = () => {
  InAppReview.isAvailable();

  // trigger UI InAppreview
  InAppReview.RequestInAppReview()
    .then(hasFlowFinishedSuccessfully => {
      // when return true in android it means user finished or close review flow
      console.log('InAppReview in android', hasFlowFinishedSuccessfully);

      // when return true in ios it means review flow lanuched to user.
      console.log(
        'InAppReview in ios has launched successfully',
        hasFlowFinishedSuccessfully,
      );

      // 1- you have option to do something ex: (navigate Home page) (in android).
      // 2- you have option to do something,
      // ex: (save date today to lanuch InAppReview after 15 days) (in android and ios).

      // 3- another option:
      if (hasFlowFinishedSuccessfully) {
        // do something for ios
        // do something for android
      }

      // for android:
      // The flow has finished. The API does not indicate whether the user
      // reviewed or not, or even whether the review dialog was shown. Thus, no
      // matter the result, we continue our app flow.

      // for ios
      // the flow lanuched successfully, The API does not indicate whether the user
      // reviewed or not, or he/she closed flow yet as android, Thus, no
      // matter the result, we continue our app flow.
    })
    .catch(error => {
      //we continue our app flow.
      // we have some error could happen while lanuching InAppReview,
      // Check table for errors and code number that can return in catch.
      console.log(error);
    });
};
/**
 *
 * @param {RNPermission.Permission} permission
 * @returns
 */
export const requestPermission = async permission => {
  let status = await RNPermission.check(permission);
  if (status == RNPermission.RESULTS.DENIED) {
    status = await RNPermission.request(permission);
  }
  return (
    status == RNPermission.RESULTS.GRANTED ||
    status == RNPermission.RESULTS.LIMITED
  );
};
