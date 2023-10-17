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
  userProfile: UserProfileType | null;
  profileStatus: string;
  isUpdatingStatus: boolean;
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
};

//users reducer types
export type UserPhotoType = {
  small: null | string;
  large: null | string;
};
export type UserType = {
  name: string;
  id: number;
  status: string;
  followed: boolean;
  photos: UserPhotoType;
};
export type UsersResponseType = {
  items: UserType[];
  totalCount: number;
  error: null | string;
};

export type UsersInitialStateType = {
  users: UserType[];
  usersPerPage: number;
  amountOfUsers: number;
  selectedPage: number;
  isFetchingData: boolean;
  followingBTNToggle: number[];
};

//auth data types

export type AuthResponseDataType = {
  id: number;
  email: string;
  login: string;
};

export type ResetAuthResponseDataType = {
  id: number;
  email: string;
  login: string;
};

export type AuthResponseType = {
  data: AuthResponseDataType;
  resultCode: number;
  messages: string[];
};

export type AuthReducerInitialState = {
  auhData: AuthResponseDataType;
  isAuthorised: boolean;
};
export type LoginDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type LoginErrorType = {
  login_error: string;
};
//UserFollowingType
export type CommonUserProfileDataType = {};
export type CommonUserProfileType = {
  resultCode: number;
  messages: string[];
  data: CommonUserProfileDataType;
};
