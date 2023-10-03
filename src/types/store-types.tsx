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
export type UserPhotoType = {
  small: string;
  large: string;
};

export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: UserPhotoType;
  followed: boolean;
};

export type UsersInitialStateType = {
  users: UserType[];
  usersPerPage: number;
  amountOfUsers: number;
  selectedPage: number;
};
