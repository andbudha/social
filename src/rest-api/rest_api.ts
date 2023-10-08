import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'ce65347e-0874-43a4-84c8-48038b97386a',
  },
});

export const usersAPI = {
  getUsers(selectedPage: number, usersPerPage: number) {
    return instance
      .get(`users?page=${selectedPage}&count=${usersPerPage}`)
      .then((response) => {
        return response.data.items;
      });
  },
  accessUserPage(page: number, usersPerPage: number) {
    return instance
      .get(`users?page=${page}&count=${usersPerPage}`)
      .then((response) => {
        return response.data.items;
      });
  },
  followingUser(userID: number) {
    return instance.post(`follow/${userID}`);
  },
  unfollowingUser(userID: number) {
    return instance.delete(`follow/${userID}`);
  },
  settingUserProfile(userProfileID: string) {
    return instance.get(`profile/${userProfileID}`).then((response) => {
      return response.data;
    });
  },
};

export const authorisationAPI = {
  getAuthData() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};