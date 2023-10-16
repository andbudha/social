import axios from 'axios';
import { AuthResponseType, LoginDataType } from '../types/store-types';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'ce65347e-0874-43a4-84c8-48038b97386a',
  },
});

export const authorisationAPI = {
  getAuthData() {
    return instance
      .get<AuthResponseType>(`auth/me`)
      .then((response) => response.data);
  },
  login(loginData: LoginDataType) {
    return instance
      .post<AuthResponseType>('auth/login', {
        email: loginData.email,
        password: loginData.password,
        rememberMe: loginData.rememberMe,
      })
      .then((response) => response.data);
  },
  logout() {
    return instance
      .delete<AuthResponseType>('auth/login')
      .then((response) => response.data);
  },
};
