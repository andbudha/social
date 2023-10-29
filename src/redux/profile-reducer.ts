import { profileAPI } from '../rest-api/profile_api';
import {
  ProfilePageType,
  ProfilePhotoType,
  UserProfileType,
} from '../types/store-types';
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
  | isUpdatingStatusACType
  | uploadProfileImgACType
  | updateProfileACType;

export const ProfileReducer = (
  state: ProfilePageType = initialState,
  action: ProfileReducerActionTypes
): ProfilePageType => {
  switch (action.type) {
    case 'profile-reducer/ADD-NEW-POST': {
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

    case 'profile-reducer/SET-USER-PROFILE': {
      return { ...state, userProfile: action.payload.userProfile };
    }
    case 'profile-reducer/GET-PROFILE-STATUS': {
      return { ...state, profileStatus: action.payload.status };
    }
    case 'profile-reducer/SET-STATUS': {
      return { ...state, profileStatus: action.payload.status };
    }
    case 'profile-reducer/SET-STATUS-UPDATE-LOADER': {
      return { ...state, isUpdatingStatus: action.payload.updating };
    }
    case 'profile-reducer/UPLOAD-PROFILE-IMAGE': {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          photos: action.payload.profileImgs,
        },
      };
    }
    case 'profile-reducer/UPDATE-PROFILE': {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          ...action.payload.newProfileData,
        },
      };
    }
    default: {
      return state;
    }
  }
};

type addPostACType = ReturnType<typeof addPostAC>;
export const addPostAC = (newPost: string) => {
  return {
    type: 'profile-reducer/ADD-NEW-POST',
    payload: { newPost },
  } as const;
};

type setUserProfileACType = ReturnType<typeof setUserProfileAC>;
export const setUserProfileAC = (userProfile: UserProfileType) => {
  return {
    type: 'profile-reducer/SET-USER-PROFILE',
    payload: { userProfile },
  } as const;
};

type getProfileStatusACType = ReturnType<typeof getProfileStatusAC>;
export const getProfileStatusAC = (status: string) => {
  return {
    type: 'profile-reducer/GET-PROFILE-STATUS',
    payload: { status },
  } as const;
};

type setProfileStatusACType = ReturnType<typeof setProfileStatusAC>;
export const setProfileStatusAC = (status: string) => {
  return {
    type: 'profile-reducer/SET-STATUS',
    payload: { status: status },
  } as const;
};

type isUpdatingStatusACType = ReturnType<typeof isUpdatingStatusAC>;
export const isUpdatingStatusAC = (updating: boolean) => {
  return {
    type: 'profile-reducer/SET-STATUS-UPDATE-LOADER',
    payload: { updating },
  } as const;
};

type uploadProfileImgACType = ReturnType<typeof uploadProfileImgAC>;
export const uploadProfileImgAC = (profileImgs: ProfilePhotoType) => {
  return {
    type: 'profile-reducer/UPLOAD-PROFILE-IMAGE',
    payload: { profileImgs },
  } as const;
};

type updateProfileACType = ReturnType<typeof updateProfileAC>;
export const updateProfileAC = (newProfileData: UserProfileType) => {
  return {
    type: 'profile-reducer/UPDATE-PROFILE',
    payload: { newProfileData },
  } as const;
};
//thunks
export const setUserProfileTC = (userProfileID: string) => {
  return async (dispatch: AppDispatchType) => {
    const response = await profileAPI.settingUserProfile(userProfileID);
    dispatch(setUserProfileAC(response.data));
  };
};

export const getProfileStatusTC = (userID: string) => {
  return async (dispatch: AppDispatchType) => {
    const status = await profileAPI.getProfileStatus(userID);
    dispatch(getProfileStatusAC(status.data));
  };
};

export const setProfileStatusTC = (status: string) => {
  return async (dispatch: AppDispatchType) => {
    dispatch(isUpdatingStatusAC(true));
    const data = await profileAPI.setProfileStatus(status);
    if (data.data.resultCode === 0) {
      dispatch(isUpdatingStatusAC(false));
      dispatch(setProfileStatusAC(status));
    }
  };
};

export const uploadProfileImgTC = (profileImg: File) => {
  return async (dispatch: AppDispatchType) => {
    const response = await profileAPI.uloadProfileImg(profileImg);
    if (response.data.resultCode === 0) {
      dispatch(uploadProfileImgAC(response.data.data.photos));
    }
  };
};

export const updateProfileTC = (newProfileData: UserProfileType) => {
  return async (dispatch: AppDispatchType) => {
    const response = await profileAPI.updateProfile(newProfileData);
    if (response.data.resultCode === 0) {
      dispatch(updateProfileAC(response.data.data));
    }
  };
};
