import { stopSubmit } from 'redux-form';
import { authorisationAPI } from '../rest-api/auth_api';
import {
  AuthReducerInitialState,
  AuthResponseDataType,
  LoginDataType,
  ResetAuthResponseDataType,
} from '../types/store-types';
import { AppDispatchType } from './redux-store';

const initialState: AuthReducerInitialState = {
  authData: {
    id: 0,
    email: '',
    login: '',
  },
  isAuthorised: false,
  isInitialised: false,
};

export const AuthReducer = (
  state: AuthReducerInitialState = initialState,
  action: AuthReducerActionTypes
): AuthReducerInitialState => {
  switch (action.type) {
    case 'SET-AUTH-DATA': {
      return {
        ...state,
        authData: { ...state.authData, ...action.payload.authData },
      };
    }
    case 'ALTER-AUTH-STATUS': {
      return { ...state, isAuthorised: action.payload.authStatus };
    }
    case 'RESET-AUTH-DATA': {
      return {
        ...state,
        authData: { ...state.authData, ...action.payload.resetAuthData },
      };
    }
    case 'SET-INIIALISATION-STATUS': {
      return { ...state, isInitialised: action.payload.isInitialised };
    }
    default: {
      return state;
    }
  }
};

export type AuthReducerActionTypes =
  | setAuthDataType
  | resetAuthDataType
  | alterAuthorisationStatusACType
  | setIntialisationStatusACType;
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

type resetAuthDataType = ReturnType<typeof resetAuthDataAC>;
export const resetAuthDataAC = (resetAuthData: ResetAuthResponseDataType) => {
  return { type: 'RESET-AUTH-DATA', payload: { resetAuthData } } as const;
};

type setIntialisationStatusACType = ReturnType<typeof setIntialisationStatusAC>;
export const setIntialisationStatusAC = (isInitialised: boolean) => {
  return {
    type: 'SET-INIIALISATION-STATUS',
    payload: { isInitialised },
  } as const;
};
//thunks
export const setAuthDataTC = () => {
  return (dispatch: AppDispatchType) => {
    authorisationAPI.getAuthData().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthDataAC(data.data));
        dispatch(alterAuthorisationStatusAC(true));
      }
      dispatch(setIntialisationStatusAC(true));
    });
  };
};

export const loginTC = (loginData: LoginDataType) => {
  return (dispatch: AppDispatchType) => {
    authorisationAPI.login(loginData).then((data) => {
      if (data.resultCode === 0) {
        //dispatch(setAuthDataAC());
        dispatch(alterAuthorisationStatusAC(true));
      } else {
        const loginError =
          data.messages.length > 0 ? data.messages[0] : 'Some error ocurred!';
        const action: any = stopSubmit('login', { _error: loginError });
        dispatch(action);
      }
    });
  };
};

export const logoutTC = () => {
  return (dispatch: AppDispatchType) => {
    authorisationAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        //dispatch(resetAuthDataAC({ id: 0, email: '', login: '' }));
        dispatch(alterAuthorisationStatusAC(false));
      }
    });
  };
};
