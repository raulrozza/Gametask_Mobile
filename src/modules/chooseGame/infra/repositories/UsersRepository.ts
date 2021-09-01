import IUsersRepository, {
  IUpdateParams,
} from 'modules/chooseGame/repositories/IUsersRepository';
import IUser from 'shared/domain/entities/IUser';
import makeHttpProvider from 'shared/infra/providers/factories/makeHttpProvider';

const FILETYPE_REGEX = /\.(\w+)$/;

export default class UsersRepository implements IUsersRepository {
  private httpProvider = makeHttpProvider();

  public async findById(id: string): Promise<IUser> {
    return this.httpProvider.get(`users/${id}`);
  }

  public async update({
    firstname,
    lastname,
    image,
  }: IUpdateParams): Promise<void> {
    await this.httpProvider.put('users', { firstname, lastname });

    if (!image) return;

    const imageData = this.getImageFormData(image);

    await this.httpProvider.patch('users/avatar', imageData);
  }

  private getImageFormData(uri: string): FormData {
    const pathAsArray = uri.split('/');

    const filename = pathAsArray.pop() || '';

    // Infer the type of the image
    const match = FILETYPE_REGEX.exec(filename);
    const type = match ? `image/${match[1]}` : 'image';

    const imageData = { uri, name: filename, type } as unknown;

    const formData = new FormData();
    formData.append('avatar', imageData as Blob);

    return formData;
  }
}
