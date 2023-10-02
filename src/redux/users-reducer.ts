import { UserType, UsersInitialStateType } from '../types/store-types';
import andeiProfileImg from '../images/avatars/ava1.png';
import dorianProfileImg from '../images/avatars/ava2.png';
import deliaProfileImg from '../images/avatars/ava3.png';
import nataliaProfileImg from '../images/avatars/ava4.png';

const initialState: UsersInitialStateType = {
  users: [
    {
      id: 1,
      followed: true,
      profileImg: andeiProfileImg,
      firstName: 'Andrei',
      secondName: 'Bartov',
      position: 'unemployed',
      location: { country: 'Germany', city: 'Berlin' },
    },
    {
      id: 2,
      followed: false,
      profileImg: deliaProfileImg,
      firstName: 'Delia',
      secondName: 'Bartov',
      position: 'pupil',
      location: { country: 'Germany', city: 'Dresden' },
    },
    {
      id: 3,
      followed: true,
      profileImg: nataliaProfileImg,
      firstName: 'Natalia',
      secondName: 'Bartov',
      position: 'teacher',
      location: { country: 'Germany', city: 'Berlin' },
    },
    {
      id: 4,
      followed: false,
      profileImg: dorianProfileImg,
      firstName: 'Dorian',
      secondName: 'Bartov',
      position: 'student',
      location: { country: 'Germany', city: 'Frankfurt' },
    },
  ],
};

type UsersReducerType = followUserACType | unfollowUserACType | setUsersACType;
export const UsersReducer = (
  state: UsersInitialStateType = initialState,
  action: UsersReducerType
): UsersInitialStateType => {
  switch (action.type) {
    case 'SET-USERS': {
      return { ...state, users: [...state.users, ...action.payload.users] };
    }
    case 'FOLLOW-USER': {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.userID
            ? { ...user, followed: true }
            : { ...user }
        ),
      };
    }
    case 'UNFOLLOW-USER': {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.userID
            ? { ...user, followed: false }
            : { ...user }
        ),
      };
    }
    default: {
      return state;
    }
  }
};
//action creators and types
type setUsersACType = ReturnType<typeof setUsersAC>;
export const setUsersAC = (users: UserType[]) => {
  return { type: 'SET-USERS', payload: { users } } as const;
};
type followUserACType = ReturnType<typeof followUserAC>;
export const followUserAC = (userID: number) => {
  return { type: 'FOLLOW-USER', payload: { userID } } as const;
};
type unfollowUserACType = ReturnType<typeof unfollowUserAC>;
export const unfollowUserAC = (userID: number) => {
  return {
    type: 'UNFOLLOW-USER',
    payload: { userID },
  } as const;
};
