import makeRequestsRepository from 'modules/selectedGame/infra/repositories/factories/makeRequestsRepository';
import RequestActivityService from 'modules/selectedGame/services/RequestActivityService';

export default function makeRequestActivityService(): RequestActivityService {
  const repository = makeRequestsRepository();

  return new RequestActivityService(repository);
}
