import { IRank } from 'game';
import { IUser } from 'authorization';

export default function getUserRanks(ranks: IRank[], user: IUser) {
  return ranks
    .sort((a, b) => b.level - a.level)
    .find(info => user.level >= info.level);
}
