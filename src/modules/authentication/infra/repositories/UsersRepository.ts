import IUser from 'shared/entities/IUser';
import IUserLoginDTO from 'modules/authentication/dtos/IUserLoginDTO';
import IUserSignupDTO from 'modules/authentication/dtos/IUserSignupDTO';
import IUserAuthentication from 'modules/authentication/entities/IUserAuthentication';
import IUsersRepository from 'modules/authentication/repositories/IUsersRepository';
import { makeHttpProvider } from 'shared/container/providers';

export default class UsersRepository implements IUsersRepository {
  private httpProvider = makeHttpProvider();

  public async create({
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
  }: IUserSignupDTO): Promise<IUser> {
    const response = await this.httpProvider.post<IUser>('users/signup', {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    });

    return response;
  }

  public async validate({
    email,
    password,
  }: IUserLoginDTO): Promise<IUserAuthentication> {
    const response = await this.httpProvider.post<IUserAuthentication>(
      'users/login',
      { email, password },
    );

    return response;
  }
}
