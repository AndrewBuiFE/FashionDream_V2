import { Record } from 'immutable';
import { Language } from '../../types/system';

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const LOAD_LANGUAGE = 'LOAD_LANGUAGE';
export const LOAD_LANGUAGE_START = 'LOAD_LANGUAGE_START';
export const LOAD_LANGUAGE_SUCCESS = 'LOAD_LANGUAGE_SUCCESS';

export const InitialI18nStateRecord = Record<I18nState>(
  {
    language: Language.vn,
    loadingLanguage: false,
  },
  'InitialI18nStateRecord',
);
export interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  language: Language;
}

export interface LoadLanguageAction {
  type: typeof LOAD_LANGUAGE;
}

export interface LoadLanguageStartAction {
  type: typeof LOAD_LANGUAGE_START;
}

export interface LoadLanguageSuccessAction {
  type: typeof LOAD_LANGUAGE_SUCCESS;
  language: Language;
}
export interface I18nState {
  language: Language;
  loadingLanguage: boolean;
}

export class LanguageState
  extends InitialI18nStateRecord
  implements I18nState {}

export type I18nActionTypes =
  | ChangeLanguageAction
  | LoadLanguageAction
  | LoadLanguageStartAction
  | LoadLanguageSuccessAction;
