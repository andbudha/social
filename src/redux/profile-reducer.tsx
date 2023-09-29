import { ActionTypes } from '../types/action-types';
import { ProfilePageType } from '../types/store-types';

export type ProfileReducerActionTypes = addPostACType | updatePostACType;

const initialState: ProfilePageType = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 15 },
    { id: 2, message: 'It is my first post!', likeCount: 25 },
  ],
  newPostText: '',
};

export const ProfileReducer = (
  state: ProfilePageType = initialState,
  action: ActionTypes
): ProfilePageType => {
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
