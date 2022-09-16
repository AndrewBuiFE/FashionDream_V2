import {ConfirmDialogRef} from '../../components/dialog/ConfirmDialog';
import {ScaleToastRef} from '../../components/toast/ScaleToast';
import {ActionSheetRef} from '../../screens/modals/ActionSheet';

export default {
  /**
   * @description show toast
   * @param {string} msg
   */
  toast(msg) {
    ScaleToastRef.current?.show(msg);
  },
  /**
   * @description show confirm dialog
   * @param {import('../../components/dialog/index.d').ConfirmDialogProps} props
   */
  showConfirmDialog(props) {
    ConfirmDialogRef.current?.show(props);
  },
  /**
   * @description show confirm dialog
   * @param {import('react-native').ActionSheetIOSOptions | import('@alessiocancian/react-native-actionsheet').ActionSheetProps} props
   */
  showActionSheet(props) {
    ActionSheetRef.current?.show(props);
  },

  goBack(navigation) {
    // kiểm tra có thể  goBack không trước khi thực hiện
    if (!navigation.canGoBack()) {
      ScaleToastRef.current?.show("You can't go back anymore");
    }
    if (navigation.canGoBack()) {
      return navigation.goBack();
    }
  },
};
