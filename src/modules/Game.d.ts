declare module 'game' {
  import { ElementType } from 'react';
  import { colorPallete } from 'authorization';

  export interface GameProps {
    children: ElementType | Element;
  }

  export interface GameObject {
    id: string;
    theme: colorPallete;
  }

  export interface GameHook {
    game: GameObject;
    loading: boolean;
  }
}
