import IFeedPost from 'modules/selectedGame/entities/IFeedPost';
import IFeedPostsRepository from 'modules/selectedGame/repositories/IFeedPostsRepository';
import makeHttpProvider from 'shared/infra/providers/factories/makeHttpProvider';

export default class FeedPostsRepository implements IFeedPostsRepository {
  private httpProvider = makeHttpProvider();

  public async findAll(): Promise<IFeedPost[]> {
    return this.httpProvider.get('feed');
  }
}
