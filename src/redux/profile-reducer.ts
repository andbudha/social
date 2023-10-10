import { usersAPI } from '../rest-api/users_api';
import { ProfilePageType, UserProfileType } from '../types/store-types';
import { AppDispatchType } from './redux-store';

const initialState: ProfilePageType = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 15 },
    { id: 2, message: 'It is my first post!', likeCount: 25 },
  ],
  newPostText: '',
  userProfile: null,
};

export type ProfileReducerActionTypes =
  | addPostACType
  | updatePostACType
  | setUserProfileACType;
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

//thunks

export const setUserProfileTC = (userProfileID: string) => {
  return (dispatch: AppDispatchType) => {
    usersAPI
      .settingUserProfile(userProfileID)
      .then((data) => dispatch(setUserProfileAC(data)));
  };
};
