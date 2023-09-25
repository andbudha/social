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

export type StoreType = {
  _state: StateType;
  _onPostAdding: () => void;
  addPost: () => void;
  updatePostText: (newText: string) => void;
  subscribe: (observer: () => void) => void;
  getState: () => StateType;
};

//store
export const store: StoreType = {
  _state: {
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
        {
          id: 4,
          message: 'Never mind, I am still interested in this position.',
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _onPostAdding() {},
  addPost() {
    this._state.profilePage.posts.push({
      id: 999,
      message: this._state.profilePage.newPostText,
      likeCount: 6,
    });
    this._state.profilePage.newPostText = '';
    this._onPostAdding();
  },
  updatePostText(newText: string) {
    this._state.profilePage.newPostText = newText;
    this._onPostAdding();
  },
  subscribe(observer: () => void) {
    this._onPostAdding = observer;
  },
};
