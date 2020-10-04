import { atom } from 'recoil';

// Types
import { ITitle } from '../interfaces/api/Title';

const playerTitle = atom<ITitle | null>({
  key: 'playerTitle',
  default: null,
});

export default playerTitle;
