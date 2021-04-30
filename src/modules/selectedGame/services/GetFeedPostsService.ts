import IFeedPost from 'modules/selectedGame/entities/IFeedPost';
import IFeedPostsRepository from 'modules/selectedGame/repositories/IFeedPostsRepository';

interface IExecute {
  posts?: IFeedPost[];
  shouldLogout?: boolean;
  error?: string;
}

export default class GetFeedPostsService {
  constructor(private feedPostsRepository: IFeedPostsRepository) {}

  public async execute(): Promise<IExecute> {
    try {
      const posts = await this.feedPostsRepository.findAll();

      return { posts };
    } catch (error) {
      return {
        error: error.message,
        shouldLogout: error.shouldLogout,
      };
    }
  }
}
