import type { IUserData } from "./IUserData";

export interface IAuthState {
    user: IUserData | null;
    token: string | null;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    isAuthenticated: boolean;
}