import {ConfirmDialogRef} from '../../components/dialog/ConfirmDialog';
import {ScaleToastRef} from '../../components/toast/ScaleToast';

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
  // /**
  //  * @description show confirm dialog
  //  * @param {import('react-native').ActionSheetIOSOptions | import('@alessiocancian/react-native-actionsheet').ActionSheetProps} props
  //  */
};
