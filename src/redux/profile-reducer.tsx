import { ActionTypes, ProfilePageType } from './state';

export type profileReducerActionTypes = addPostACType | updatePostACType;

export const ProfileReducer = (state: ProfilePageType, action: ActionTypes) => {
  switch (action.type) {
    case 'ADD-NEW-POST': {
      state.posts.push({
        id: 999,
        message: state.newPostText,
        likeCount: 6,
      });
      state.newPostText = '';
      return state;
    }
    case 'UPDATE-POST': {
      state.newPostText = action.newText;
      return state;
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
    newText: newPost,
  } as const;
};
