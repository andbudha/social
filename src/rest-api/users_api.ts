import axios from 'axios';
import { CommonUserProfileType, UsersResponseType } from '../types/store-types';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'ce65347e-0874-43a4-84c8-48038b97386a',
  },
});

export const usersAPI = {
  getUsers(selectedPage: number, usersPerPage: number) {
    return instance.get<UsersResponseType>(
      `users?page=${selectedPage}&count=${usersPerPage}`
    );
  },
  accessUserPage(page: number, usersPerPage: number) {
    return instance.get<UsersResponseType>(
      `users?page=${page}&count=${usersPerPage}`
    );
  },
  followingUser(userID: number) {
    return instance.post<CommonUserProfileType>(`follow/${userID}`);
  },
  unfollowingUser(userID: number) {
    return instance.delete<CommonUserProfileType>(`follow/${userID}`);
  },
};
