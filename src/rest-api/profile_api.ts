import axios, { AxiosResponse } from 'axios';
import { CommonUserProfileType, UserProfileType } from '../types/store-types';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'ce65347e-0874-43a4-84c8-48038b97386a',
  },
});

export const profileAPI = {
  settingUserProfile(userProfileID: string) {
    return instance
      .get<UserProfileType>(`profile/${userProfileID}`)
      .then((response) => {
        return response.data;
      });
  },
  getProfileStatus(userID: string) {
    return instance
      .get<string, AxiosResponse<string>>(`profile/status/${userID}`)
      .then((response) => response.data);
  },

  setProfileStatus(status: string) {
    return instance
      .put<CommonUserProfileType>(`profile/status`, {
        status: status,
      })
      .then((response) => response.data);
  },
};
