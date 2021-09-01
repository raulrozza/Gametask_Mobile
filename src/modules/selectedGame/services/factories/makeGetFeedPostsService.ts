import makeFeedPostsRepository from 'modules/selectedGame/infra/repositories/factories/makeFeedPostsRepository';
import GetFeedPostsService from 'modules/selectedGame/services/GetFeedPostsService';

export default function makeGetFeedPostsService(): GetFeedPostsService {
  const repository = makeFeedPostsRepository();

  return new GetFeedPostsService(repository);
}
