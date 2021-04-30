import IFeedPost from 'modules/selectedGame/entities/IFeedPost';

export default interface IFeedPostsRepository {
  findAll(): Promise<IFeedPost[]>;
}
