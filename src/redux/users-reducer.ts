import { UserType, UsersInitialStateType } from '../types/store-types';
import { usersAPI } from '../rest-api/users_api';
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
    case 'users-reducer/SET-USERS': {
      return { ...state, users: action.payload.users };
    }
    case 'users-reducer/FOLLOW-USER': {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.userID
            ? { ...user, followed: true }
            : { ...user }
        ),
      };
    }
    case 'users-reducer/UNFOLLOW-USER': {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.userID
            ? { ...user, followed: false }
            : { ...user }
        ),
      };
    }
    case 'users-reducer/SELECT-USER-PAGE': {
      return { ...state, selectedPage: action.payload.page };
    }
    case 'users-reducer/SET-LOADER': {
      return { ...state, isFetchingData: action.payload.isFetchingData };
    }
    case 'users-reducer/TOGGLE-FOLLOW-BTN': {
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
  return { type: 'users-reducer/SET-USERS', payload: { users } } as const;
};
type followUserACType = ReturnType<typeof followUserAC>;
export const followUserAC = (userID: number) => {
  return { type: 'users-reducer/FOLLOW-USER', payload: { userID } } as const;
};
type unfollowUserACType = ReturnType<typeof unfollowUserAC>;
export const unfollowUserAC = (userID: number) => {
  return {
    type: 'users-reducer/UNFOLLOW-USER',
    payload: { userID },
  } as const;
};
type selectUserPageACType = ReturnType<typeof selectUserPageAC>;
export const selectUserPageAC = (page: number) => {
  return { type: 'users-reducer/SELECT-USER-PAGE', payload: { page } } as const;
};
type fetchDataACType = ReturnType<typeof fetchDataAC>;
export const fetchDataAC = (isFetchingData: boolean) => {
  return {
    type: 'users-reducer/SET-LOADER',
    payload: { isFetchingData },
  } as const;
};

type isFollowingToggleACType = ReturnType<typeof isFollowingToggleAC>;
export const isFollowingToggleAC = (userID: number, btnStatus: boolean) => {
  return {
    type: 'users-reducer/TOGGLE-FOLLOW-BTN',
    payload: { userID, btnStatus },
  } as const;
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

export const followUserTC = (userID: number) => {
  return (dispatch: AppDispatchType) => {
    dispatch(isFollowingToggleAC(userID, true));
    usersAPI.followingUser(userID).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followUserAC(userID));
      }
      dispatch(isFollowingToggleAC(userID, false));
    });
  };
};

export const unfollowUserTC = (userID: number) => {
  return (dispatch: AppDispatchType) => {
    dispatch(isFollowingToggleAC(userID, true));
    usersAPI.unfollowingUser(userID).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowUserAC(userID));
      }
      dispatch(isFollowingToggleAC(userID, false));
    });
  };
};
