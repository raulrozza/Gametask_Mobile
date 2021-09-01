import IUserLoginDTO from 'modules/authentication/dtos/IUserLoginDTO';
import IUserSignupDTO from 'modules/authentication/dtos/IUserSignupDTO';
import IUserAuthentication from 'modules/authentication/entities/IUserAuthentication';
import IUser from 'shared/domain/entities/IUser';

export default interface IUsersRepository {
  create(values: IUserSignupDTO): Promise<IUser>;
  validate(credentials: IUserLoginDTO): Promise<IUserAuthentication>;
}
