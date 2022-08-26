import {KeyboardTypeOptions, StyleProp, TextStyle} from 'react-native';

export interface ConfirmDialogProps {
  title: string;
  message: string;
  /**
   * @description maximum length should be 2
   */
  options?: {
    text: string;
    style?: StyleProp<TextStyle>;
    type?: 'default' | 'cancel' | 'destructive';
    onPress?: () => void;
  }[];
  onDimiss?: () => void;
}

export interface PromptDialogProps {
  title: string;
  message?: string;
  placeholder?: string;
  /**
   * @description initial text
   */
  text?: string;
  submitButtonText: string;
  cancelButtonText: string;
  /**
   * @description use as a validator, if promise return `false`, errorText will show and dialog will not hide automatically
   * @example
   * ```js
   * onSubmit: async (text) => {
   * // do something with the text
   * if(...) return false;
   * ...
   * return true;
   * }
   * ```
   */
  onSubmit?: (text: string) => Promise<boolean>;
  onDismiss?: (text: string) => void;
  errorText?: string;
  /**
   * @description style of text input's text
   */
  textStyle?: StyleProp<TextStyle>;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  /**
   * @description show indicator while submition
   */
  indicator?: boolean;
}

export interface SelectDialogProps {
  title: string;
  options?: {text: string}[];
  /**
   * initial selected
   */
  selected?: number;
  onSubmit?: (selectedIndex: number) => void;
  submitButtonText: string;
  cancelButtonText: string;
}
