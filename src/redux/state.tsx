import { renderEntireTree } from '../render';

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
};

export type StateType = {
  profilePage: ProfilePageType;
  messagePage: MessagePageType;
};

export const state: StateType = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likeCount: 15 },
      { id: 2, message: 'It is my first post!', likeCount: 25 },
    ],
    newPostText: '',
  },
  messagePage: {
    participants: [
      { id: 1, name: 'Dorian' },
      { id: 2, name: 'Delia' },
      { id: 3, name: 'Natalia' },
      { id: 4, name: 'Andrei' },
    ],
    messages: [
      { id: 1, message: 'Hey, there...are you ok?' },
      { id: 2, message: 'Still mad with me?' },
      { id: 3, message: "I will be at Joe's." },
      { id: 4, message: 'Never mind, I am still interested in this position.' },
    ],
  },
};

//post adding func
export const addPost = () => {
  state.profilePage.posts.push({
    id: 999,
    message: state.profilePage.newPostText,
    likeCount: 6,
  });
  state.profilePage.newPostText = '';
  renderEntireTree(state);
};

//input value catching func
export const updatePostText = (newText: string) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};
