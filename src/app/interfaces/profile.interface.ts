export interface Profile {
  name: string | null;
  surname: string | null;
  age: number | null;
  password: string | null;
  isActivated: boolean | null;
  settings: ProfileSettings;
}

interface ProfileSettings {
  isDarkTheme: boolean | null;
}
