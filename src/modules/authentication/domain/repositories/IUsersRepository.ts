import IUserLoginDTO from 'modules/authentication/domain/dtos/IUserLoginDTO';
import IUserSignupDTO from 'modules/authentication/domain/dtos/IUserSignupDTO';
import IUserAuthentication from 'modules/authentication/domain/entities/IUserAuthentication';
import IUser from 'shared/domain/entities/IUser';

export default interface IUsersRepository {
  create(values: IUserSignupDTO): Promise<IUser>;
  validate(credentials: IUserLoginDTO): Promise<IUserAuthentication>;
}
