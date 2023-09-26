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
  subscribe: (observer: () => void) => void;
  getState: () => StateType;
  dispatch: (action: ActionTypes) => void;
};

//Action-Types
export type ActionTypes = addPostACType | updatePostACType;
type addPostACType = ReturnType<typeof addPostAC>;

type updatePostACType = ReturnType<typeof updatePostAC>;

//Action Creators
export const addPostAC = () => {
  return { type: 'ADD-NEW-POST' } as const;
};

export const updatePostAC = (newPost: string) => {
  return {
    type: 'UPDATE-POST',
    newText: newPost,
  } as const;
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
  _onPostAdding() {},
  getState() {
    return this._state;
  },
  subscribe(observer: () => void) {
    this._onPostAdding = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD-NEW-POST') {
      this._state.profilePage.posts.push({
        id: 999,
        message: this._state.profilePage.newPostText,
        likeCount: 6,
      });
      this._state.profilePage.newPostText = '';
      this._onPostAdding();
    } else if (action.type === 'UPDATE-POST') {
      this._state.profilePage.newPostText = action.newText;
      this._onPostAdding();
    }
  },
};
