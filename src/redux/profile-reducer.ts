import { type } from 'os';
import { profileAPI } from '../rest-api/profile_api';
import { ProfilePageType, UserProfileType } from '../types/store-types';
import { AppDispatchType } from './redux-store';

const initialState: ProfilePageType = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 15 },
    { id: 2, message: 'It is my first post!', likeCount: 25 },
  ],
  newPostText: '',
  userProfile: null,
  profileStatus: '',
  isUpdatingStatus: false,
};

export type ProfileReducerActionTypes =
  | addPostACType
  | updatePostACType
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
      const stateCopy = {
        ...state,
        posts: [...state.posts.map((post) => ({ ...post }))],
        newPostText: state.newPostText,
      };
      stateCopy.posts.push({
        id: 999,
        message: state.newPostText,
        likeCount: 6,
      });
      return stateCopy;
    }
    case 'UPDATE-POST': {
      const stateCopy = {
        ...state,
        posts: [...state.posts.map((post) => ({ ...post }))],
        newPostText: state.newPostText,
      };
      stateCopy.newPostText = action.payload.newText;
      return stateCopy;
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
export const addPostAC = () => {
  return { type: 'ADD-NEW-POST' } as const;
};

type updatePostACType = ReturnType<typeof updatePostAC>;
export const updatePostAC = (newPost: string) => {
  return {
    type: 'UPDATE-POST',
    payload: { newText: newPost },
  } as const;
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
