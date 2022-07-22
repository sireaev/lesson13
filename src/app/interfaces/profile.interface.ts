export interface Profile {
  name: string | null;
  surname: string | null;
  age: number | null;
  password: string | null;
  isActivated: boolean | null;
  settings: ProfileSettings;
  token?: string;
}

interface ProfileSettings {
  isDarkTheme: boolean | null;
}
