import { UsersInitialStateType } from '../types/store-types';

const initialState: UsersInitialStateType = {
  users: [
    {
      id: 1,
      followed: true,
      firstName: 'Andrei',
      secondName: 'Bartov',
      position: 'unemployed',
      location: { country: 'Germany', city: 'Berlin' },
    },
    {
      id: 2,
      followed: false,
      firstName: 'Delia',
      secondName: 'Bartov',
      position: 'pupil',
      location: { country: 'Germany', city: 'Dresden' },
    },
    {
      id: 3,
      followed: true,
      firstName: 'Natalia',
      secondName: 'Bartov',
      position: 'teacher',
      location: { country: 'Germany', city: 'Berlin' },
    },
    {
      id: 4,
      followed: false,
      firstName: 'Dorian',
      secondName: 'Bartov',
      position: 'student',
      location: { country: 'Germany', city: 'Frankfurt' },
    },
  ],
};
type UsersReducerType = followUserACType | unfollowUserACType;
export const UsersReducer = (
  state: UsersInitialStateType = initialState,
  action: UsersReducerType
): UsersInitialStateType => {
  switch (action.type) {
    case 'FOLLOW-USER': {
      return state;
    }
    case 'UNFOLLOW-USER': {
      return state;
    }
    default: {
      return state;
    }
  }
};
//action creators and types

type followUserACType = ReturnType<typeof followUserAC>;
export const followUserAC = (followedStatus: boolean, userID: number) => {
  return { type: 'FOLLOW-USER', payload: { followedStatus, userID } } as const;
};
type unfollowUserACType = ReturnType<typeof unfollowUserAC>;
export const unfollowUserAC = (followedStatus: boolean, userID: number) => {
  return {
    type: 'UNFOLLOW-USER',
    payload: { followedStatus, userID },
  } as const;
};
