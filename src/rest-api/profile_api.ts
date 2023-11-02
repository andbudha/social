import { CommonUserProfileType, UserProfileType } from '../types/store-types';
import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'ce65347e-0874-43a4-84c8-48038b97386a',
  },
});

export const profileAPI = {
  settingUserProfile(userProfileID: string) {
    return instance.get<UserProfileType>(`profile/${userProfileID}`);
  },
  getProfileStatus(userID: string) {
    return instance.get<string, AxiosResponse<string>>(
      `profile/status/${userID}`
    );
  },

  setProfileStatus(status: string) {
    return instance.put<CommonUserProfileType>(`profile/status`, {
      status: status,
    });
  },
  uloadProfileImg(profileImg: File) {
    const formData = new FormData();
    formData.append('image', profileImg);
    return instance.put<CommonUserProfileType<UserProfileType>>(
      `profile/photos`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  },
  updateProfile(newProfileData: UserProfileType) {
    return instance.put<CommonUserProfileType<UserProfileType>>(
      'profile',
      newProfileData
    );
  },
};
