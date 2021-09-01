import IRequestsRepository from 'modules/selectedGame/domain/repositories/IRequestsRepository';
import RequestsRepository from 'modules/selectedGame/infra/repositories/RequestsRepository';

export default function makeRequestsRepository(): IRequestsRepository {
  return new RequestsRepository();
}
