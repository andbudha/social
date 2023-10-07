import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'ce65347e-0874-43a4-84c8-48038b97386a',
  },
});

export const getUsers = (selectedPage: number, usersPerPage: number) => {
  return instance.get(`users?page=${selectedPage}&count=${usersPerPage}`);
};
