import { ActionTypes } from './action-types';

export type PostType = {
  id: number;
  message: string | undefined;
  likeCount: number;
};

export type ParticipantType = {
  name: string;
  id: number;
};

export type MessageType = {
  message: string;
  id: number;
};
export type ProfilePageType = {
  posts: PostType[];
  newPostText: string;
};

export type MessagePageType = {
  participants: ParticipantType[];
  messages: MessageType[];
  newMessageText: string;
};

export type StateType = {
  profilePage: ProfilePageType;
  messagePage: MessagePageType;
};

export type StoreType = {
  _state: StateType;
  _rerenderOnStateChange: () => void;
  subscribe: (observer: () => void) => void;
  getState: () => StateType;
  dispatch: (action: ActionTypes) => void;
};
