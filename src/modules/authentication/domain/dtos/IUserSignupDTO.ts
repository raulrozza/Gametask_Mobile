export default interface IUserSignupDTO {
  firstname: string;
  lastname?: string;
  email: string;
  password: string;
  confirmPassword: string;
}
