export interface Profile {
  name: string;
  surname: string;
  age: number;
  password: string;
  settings: ProfileSettings;
}

interface ProfileSettings {
  isDarkTheme: boolean;
}
