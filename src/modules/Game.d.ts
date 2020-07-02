declare module 'game' {
  import { colorPallete } from '../contexts/Theme';

  export interface GameObject {
    id: string;
    theme: colorPallete;
  }

  export interface GameHook {
    game: GameObject;
    loading: boolean;
  }
}
