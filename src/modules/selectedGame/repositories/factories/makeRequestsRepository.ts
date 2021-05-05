import RequestsRepository from 'modules/selectedGame/infra/repositories/RequestsRepository';
import IRequestsRepository from 'modules/selectedGame/repositories/IRequestsRepository';

export default function makeRequestsRepository(): IRequestsRepository {
  return new RequestsRepository();
}
