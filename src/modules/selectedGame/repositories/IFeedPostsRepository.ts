import IFeedPost from 'modules/selectedGame/domain/entities/IFeedPost';

export default interface IFeedPostsRepository {
  findAll(): Promise<IFeedPost[]>;
}
