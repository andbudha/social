import { profileAPI } from '../rest-api/profile_api';
import { ProfilePageType, UserProfileType } from '../types/store-types';
import { AppDispatchType } from './redux-store';

const initialState: ProfilePageType = {
  posts: [
    { id: 1, message: 'Per aspera ad astra!', likeCount: 15 },
    { id: 2, message: 'Dum spiro spero!', likeCount: 25 },
  ],
  userProfile: null,
  profileStatus: '',
  isUpdatingStatus: false,
};

export type ProfileReducerActionTypes =
  | addPostACType
  | setUserProfileACType
  | getProfileStatusACType
  | setProfileStatusACType
  | isUpdatingStatusACType;

export const ProfileReducer = (
  state: ProfilePageType = initialState,
  action: ProfileReducerActionTypes
): ProfilePageType => {
  switch (action.type) {
    case 'ADD-NEW-POST': {
      const newPost = {
        id: 999,
        message: action.payload.newPost,
        likeCount: 6,
      };
      return {
        ...state,
        posts: [...state.posts.map((post) => ({ ...post })), newPost],
      };
    }

    case 'SET-USER-PROFILE': {
      return { ...state, userProfile: action.payload.userProfile };
    }
    case 'GET-PROFILE-STATUS': {
      return { ...state, profileStatus: action.payload.status };
    }
    case 'SET-STATUS': {
      return { ...state, profileStatus: action.payload.status };
    }
    case 'SET-STATUS-UPDATE-LOADER': {
      return { ...state, isUpdatingStatus: action.payload.updating };
    }
    default: {
      return state;
    }
  }
};

type addPostACType = ReturnType<typeof addPostAC>;
export const addPostAC = (newPost: string) => {
  return { type: 'ADD-NEW-POST', payload: { newPost } } as const;
};

type setUserProfileACType = ReturnType<typeof setUserProfileAC>;
export const setUserProfileAC = (userProfile: UserProfileType) => {
  return { type: 'SET-USER-PROFILE', payload: { userProfile } } as const;
};

type getProfileStatusACType = ReturnType<typeof getProfileStatusAC>;
export const getProfileStatusAC = (status: string) => {
  return { type: 'GET-PROFILE-STATUS', payload: { status } } as const;
};

type setProfileStatusACType = ReturnType<typeof setProfileStatusAC>;
export const setProfileStatusAC = (status: string) => {
  return { type: 'SET-STATUS', payload: { status: status } } as const;
};

type isUpdatingStatusACType = ReturnType<typeof isUpdatingStatusAC>;
export const isUpdatingStatusAC = (updating: boolean) => {
  return { type: 'SET-STATUS-UPDATE-LOADER', payload: { updating } } as const;
};

//thunks
export const setUserProfileTC = (userProfileID: string) => {
  return (dispatch: AppDispatchType) => {
    profileAPI
      .settingUserProfile(userProfileID)
      .then((data) => dispatch(setUserProfileAC(data)));
  };
};

export const getProfileStatusTC = (userID: string) => {
  return (dispatch: AppDispatchType) => {
    profileAPI.getProfileStatus(userID).then((status) => {
      dispatch(getProfileStatusAC(status));
    });
  };
};

export const setProfileStatusTC = (status: string) => {
  return (dispatch: AppDispatchType) => {
    dispatch(isUpdatingStatusAC(true));
    profileAPI.setProfileStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(isUpdatingStatusAC(false));
        dispatch(setProfileStatusAC(status));
      }
    });
  };
};
