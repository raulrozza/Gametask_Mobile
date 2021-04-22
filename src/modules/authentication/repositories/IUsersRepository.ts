import IUser from 'shared/entities/IUser';
import IUserSignupDTO from 'modules/authentication/dtos/IUserSignupDTO';
import IUserLoginDTO from 'modules/authentication/dtos/IUserLoginDTO';
import IUserAuthentication from 'modules/authentication/entities/IUserAuthentication';

export default interface IUsersRepository {
  create(values: IUserSignupDTO): Promise<IUser>;
  validate(credentials: IUserLoginDTO): Promise<IUserAuthentication>;
}
