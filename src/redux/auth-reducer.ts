import { AuthReducerInitialState } from '../types/store-types';

const initialState: AuthReducerInitialState = {
  id: 0,
  email: '',
  login: '',
};

export const AuthReducer = (
  state: AuthReducerInitialState = initialState,
  action: AuthReducerActionTypes
): AuthReducerInitialState => {
  switch (action.type) {
    case 'SET-AUTH-DATA': {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

type AuthReducerActionTypes = setAuthDataType;
type setAuthDataType = ReturnType<typeof setAuthData>;
export const setAuthData = (authData: AuthReducerInitialState) => {
  return { type: 'SET-AUTH-DATA', payload: { ...authData } } as const;
};
