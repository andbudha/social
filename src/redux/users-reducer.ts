import { UserType, UsersInitialStateType } from '../types/store-types';
import { usersAPI } from '../rest-api/rest_api';
import { AppDispatchType } from './redux-store';

const initialState: UsersInitialStateType = {
  users: [],
  usersPerPage: 5,
  amountOfUsers: 75,
  selectedPage: 1,
  isFetchingData: false,
  followingBTNToggle: [],
};

export type UsersReducerType =
  | followUserACType
  | unfollowUserACType
  | setUsersACType
  | selectUserPageACType
  | fetchDataACType
  | isFollowingToggleACType;
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
    case 'TOGGLE-FOLLOW-BTN': {
      return {
        ...state,
        followingBTNToggle: action.payload.btnStatus
          ? [...state.followingBTNToggle, action.payload.userID]
          : state.followingBTNToggle.filter(
              (id) => id != action.payload.userID
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
type selectUserPageACType = ReturnType<typeof selectUserPageAC>;
export const selectUserPageAC = (page: number) => {
  return { type: 'SELECT-USER-PAGE', payload: { page } } as const;
};
type fetchDataACType = ReturnType<typeof fetchDataAC>;
export const fetchDataAC = (isFetchingData: boolean) => {
  return { type: 'SET-LOADER', payload: { isFetchingData } } as const;
};

type isFollowingToggleACType = ReturnType<typeof isFollowingToggleAC>;
export const isFollowingToggleAC = (userID: number, btnStatus: boolean) => {
  return { type: 'TOGGLE-FOLLOW-BTN', payload: { userID, btnStatus } } as const;
};

//thunks

export const setUsersTC = (selectedPage: number, usersPerPage: number) => {
  return (dispatch: AppDispatchType) => {
    dispatch(fetchDataAC(true));
    usersAPI.getUsers(selectedPage, usersPerPage).then((data) => {
      dispatch(fetchDataAC(false));
      dispatch(setUsersAC(data));
    });
  };
};

export const selectUserPageTC = (page: number, usersPerPage: number) => {
  return (dispatch: AppDispatchType) => {
    dispatch(selectUserPageAC(page));
    dispatch(fetchDataAC(true));
    usersAPI.accessUserPage(page, usersPerPage).then((data) => {
      dispatch(fetchDataAC(false));
      dispatch(setUsersAC(data));
    });
  };
};
