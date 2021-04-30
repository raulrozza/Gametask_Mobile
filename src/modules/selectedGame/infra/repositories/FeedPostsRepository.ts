import IFeedPost from 'modules/selectedGame/entities/IFeedPost';
import IFeedPostsRepository from 'modules/selectedGame/repositories/IFeedPostsRepository';
import { makeHttpProvider } from 'shared/container/providers';

export default class FeedPostsRepository implements IFeedPostsRepository {
  private httpProvider = makeHttpProvider();

  public async findAll(): Promise<IFeedPost[]> {
    return this.httpProvider.get('feed');
  }
}
