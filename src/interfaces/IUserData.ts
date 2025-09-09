import type { UserRole } from "../enums/UserRole";

export interface IUserLoginData {
    email: string;
    password: string;
}

export interface IUserRegisterData {
  email: string;
  password: string;
}

export interface IUserData {
  id: string;
  email: string;
  roles: UserRole[];
  profile: UserProfile | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  name: string;
  bio: string;
  phone: string;
  avatarUrl: string;
}
