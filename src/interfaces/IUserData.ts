export interface IUserLoginData {
    email: string;
    password: string;
}

export interface IUserRegisterData {
  email: string;
  password: string;
}

export interface IAuthData {
  user: string | null;
  status: string;
  error: string | null;
}
