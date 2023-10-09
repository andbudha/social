import { authorisationAPI } from '../rest-api/rest_api';
import {
  AuthReducerInitialState,
  AuthResponseDataType,
} from '../types/store-types';
import { AppDispatchType } from './redux-store';

const initialState: AuthReducerInitialState = {
  auhData: {
    id: 0,
    email: '',
    login: '',
  },
  isAuthorised: false,
};

export const AuthReducer = (
  state: AuthReducerInitialState = initialState,
  action: AuthReducerActionTypes
): AuthReducerInitialState => {
  switch (action.type) {
    case 'SET-AUTH-DATA': {
      return {
        ...state,
        auhData: { ...state.auhData, ...action.payload },
      };
    }
    case 'ALTER-AUTH-STATUS': {
      return { ...state, isAuthorised: action.payload.authStatus };
    }
    default: {
      return state;
    }
  }
};

export type AuthReducerActionTypes =
  | setAuthDataType
  | alterAuthorisationStatusACType;
type setAuthDataType = ReturnType<typeof setAuthDataAC>;
export const setAuthDataAC = (authData: AuthResponseDataType) => {
  return { type: 'SET-AUTH-DATA', payload: { authData } } as const;
};

type alterAuthorisationStatusACType = ReturnType<
  typeof alterAuthorisationStatusAC
>;
export const alterAuthorisationStatusAC = (authStatus: boolean) => {
  return { type: 'ALTER-AUTH-STATUS', payload: { authStatus } } as const;
};

//thunks
export const setAuthDataTC = () => {
  return (dispatch: AppDispatchType) => {
    authorisationAPI.getAuthData().then((data) => {
      console.log(data);

      if (data.resultCode === 0) {
        dispatch(setAuthDataAC(data.data));
        dispatch(alterAuthorisationStatusAC(true));
      }
    });
  };
};
