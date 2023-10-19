import { AppRootStateType } from './redux-store';

export const getUsersSelector = (state: AppRootStateType) => {
  return state.users.users;
};

export const getUsersPerPageSelector = (state: AppRootStateType) => {
  return state.users.usersPerPage;
};

export const getAmountOfUsers = (state: AppRootStateType) => {
  return state.users.amountOfUsers;
};

export const getSelectedPage = (state: AppRootStateType) => {
  return state.users.selectedPage;
};

export const getIsFetchingData = (state: AppRootStateType) => {
  return state.users.isFetchingData;
};

export const getFollowingBTNToggle = (state: AppRootStateType) => {
  return state.users.followingBTNToggle;
};

export const getIsAuthorised = (state: AppRootStateType) => {
  return state.authorisation.isAuthorised;
};
