export enum Language {
  vn = 'vi',
  en = 'en',
}
export interface UserInfo {
  provideId: string;
  profile: {
    email_everified: boolean;
    picture: string;
    name: string;
    sub: string;
    iss: string;
    email: string;
    iat: number;
    exp: number;
    azp: string;
    aud: string;
    family_name: string;
    locale: string;
    given_name: string;
  };
  isNewUser: boolean;
}
