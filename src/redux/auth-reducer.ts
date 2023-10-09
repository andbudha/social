import { authorisationAPI } from '../rest-api/rest_api';
import { AuthReducerInitialState } from '../types/store-types';
import { AppDispatchType } from './redux-store';

const initialState: AuthReducerInitialState = {
  id: 0,
  email: '',
  login: '',
  isAuthorised: false,
};

export const AuthReducer = (
  state: AuthReducerInitialState = initialState,
  action: AuthReducerActionTypes
): AuthReducerInitialState => {
  switch (action.type) {
    case 'SET-AUTH-DATA': {
      return { ...state, ...action.payload, isAuthorised: true };
    }
    default: {
      return state;
    }
  }
};

export type AuthReducerActionTypes = setAuthDataType;
type setAuthDataType = ReturnType<typeof setAuthDataAC>;
export const setAuthDataAC = (authData: AuthReducerInitialState) => {
  return { type: 'SET-AUTH-DATA', payload: { authData } } as const;
};

//thunks
export const setAuthDataTC = () => {
  return (dispatch: AppDispatchType) => {
    authorisationAPI.getAuthData().then((data) => {
      if (data.resulCode === 0) {
        dispatch(setAuthDataAC(data.data));
      }
    });
  };
};
