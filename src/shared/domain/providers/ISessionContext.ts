interface ITheme {
  primary: string;
  secondary: string;
}

interface ISwitchGameParams {
  gameId: string;
  theme: ITheme;
  playerId: string;
}

export default interface ISessionContext {
  playerId: string;
  userToken: string | null;
  userData: { id: string; name: string; profile_url?: string };
  selectedGame: string | null;
  loading: boolean;

  login(token: string): Promise<void>;
  logout(): Promise<void>;

  switchGame(params?: ISwitchGameParams): Promise<void>;
}
