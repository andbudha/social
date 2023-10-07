//profile page reducer types
export type ProfileContactsType = {
  facebook: string;
  website: string;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
};

export type ProfilePhotoType = {
  small: string | undefined;
  large: string | undefined;
};
export type UserProfileType = {
  aboutMe: string;
  contacts: ProfileContactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: ProfilePhotoType;
};

export type PostType = {
  id: number;
  message: string | undefined;
  likeCount: number;
};

export type ProfilePageType = {
  posts: PostType[];
  newPostText: string;
  userProfile: UserProfileType | null;
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
  isFetchingData: boolean;
};

//auth reducer types
export type AuthReducerInitialState = {
  id: number;
  email: string;
  login: string;
  isAuthorised?: boolean;
};
