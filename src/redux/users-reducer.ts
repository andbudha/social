import { type } from 'os';
import { UserType, UsersInitialStateType } from '../types/store-types';

const initialState: UsersInitialStateType = {
  users: [],
  usersPerPage: 6,
  amountOfUsers: 75,
  selectedPage: 1,
  isFetchingData: false,
};

type UsersReducerType =
  | followUserACType
  | unfollowUserACType
  | setUsersACType
  | selectUserPageACType
  | fetchDataACType;
export const UsersReducer = (
  state: UsersInitialStateType = initialState,
  action: UsersReducerType
): UsersInitialStateType => {
  switch (action.type) {
    case 'SET-USERS': {
      return { ...state, users: action.payload.users };
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
    case 'SELECT-USER-PAGE': {
      return { ...state, selectedPage: action.payload.page };
    }
    case 'SET-LOADER': {
      return { ...state, isFetchingData: action.payload.isFetchingData };
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
type selectUserPageACType = ReturnType<typeof selectUserPageAC>;
export const selectUserPageAC = (page: number) => {
  return { type: 'SELECT-USER-PAGE', payload: { page } } as const;
};
type fetchDataACType = ReturnType<typeof fetchDataAC>;
export const fetchDataAC = (isFetchingData: boolean) => {
  return { type: 'SET-LOADER', payload: { isFetchingData } } as const;
};
