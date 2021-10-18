import IFeedPostsRepository from 'modules/selectedGame/domain/repositories/IFeedPostsRepository';
import FeedPostsRepository from 'modules/selectedGame/infra/repositories/FeedPostsRepository';

export default function makeFeedPostsRepository(): IFeedPostsRepository {
  return new FeedPostsRepository();
}
