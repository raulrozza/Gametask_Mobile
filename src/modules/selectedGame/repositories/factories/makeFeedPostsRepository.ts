import FeedPostsRepository from 'modules/selectedGame/infra/repositories/FeedPostsRepository';
import IFeedPostsRepository from 'modules/selectedGame/repositories/IFeedPostsRepository';

export default function makeFeedPostsRepository(): IFeedPostsRepository {
  return new FeedPostsRepository();
}
