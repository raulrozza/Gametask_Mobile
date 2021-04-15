interface ITheme {
  primary: string;
  secondary: string;
}

export default interface ISessionContext {
  userToken: string | null;
  userData: { id: string; name: string };
  selectedGame: string | null;
  loading: boolean;

  login(token: string): Promise<void>;
  logout(): Promise<void>;

  switchGame(gameId?: string, theme?: ITheme): Promise<void>;
}
