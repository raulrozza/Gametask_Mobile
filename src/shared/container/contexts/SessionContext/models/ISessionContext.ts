interface ITheme {
  primary: string;
  secondary: string;
}

export default interface ISessionContext {
  playerId: string;
  userToken: string | null;
  userData: { id: string; name: string; profile_img?: string };
  selectedGame: string | null;
  loading: boolean;

  login(token: string): Promise<void>;
  logout(): Promise<void>;

  switchGame(gameId?: string, theme?: ITheme, playerId?: string): Promise<void>;
}
