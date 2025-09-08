import type { IUserLoginData, IUserRegisterData } from "../../../interfaces/IUserData";
import { api } from "./axios";

export async function registerUser(data: IUserRegisterData) {
    return await api.post<string>(
        "user",
        data,
    );
}

export async function loginUser(data: IUserLoginData) {
    return await api.post(
        "auth/login",
        data,
    );
}

// export function logoutUser() {
//     return api.post("auth/logout");
// }

// export function refreshToken() {
//     return api.post<string>("auth/refresh");
// }