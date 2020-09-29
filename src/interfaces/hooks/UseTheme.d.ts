export interface ChangeThemeProps {
  primary?: string;
  secondary?: string;
}

export interface ITheme {
  changeTheme: (theme: ChangeThemeProps) => void;
}
