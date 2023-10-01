//profile reducer types
export type PostType = {
  id: number;
  message: string | undefined;
  likeCount: number;
};
export type ProfilePageType = {
  posts: PostType[];
  newPostText: string;
};

//dialogue reducer types
export type ParticipantType = {
  name: string;
  id: number;
};

export type MessageType = {
  message: string;
  id: number;
};

export type MessagePageType = {
  participants: ParticipantType[];
  messages: MessageType[];
  newMessageText: string;
};

//users reducer types

export type UserLocationType = {
  country: string;
  city: string;
};
export type UserType = {
  id: number;
  followed: boolean;
  firstName: string;
  secondName: string;
  position: string;
  location: UserLocationType;
};

export type UsersInitialStateType = {
  users: UserType[];
};

// export type StateType = {
//   profilePage: ProfilePageType;
//   messagePage: MessagePageType;
// };

// export type StoreType = {
//   _state: StateType;
//   _rerenderOnStateChange: () => void;
//   subscribe: (observer: () => void) => void;
//   getState: () => StateType;
//   dispatch: (action: ActionTypes) => void;
// };
