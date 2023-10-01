import { UserType, UsersInitialStateType } from '../types/store-types';

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
