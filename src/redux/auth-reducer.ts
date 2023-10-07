import { AuthReducerInitialState } from '../types/store-types';

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
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

type AuthReducerActionTypes = setAuthDataType;
type setAuthDataType = ReturnType<typeof setAuthDataAC>;
export const setAuthDataAC = (authData: AuthReducerInitialState) => {
  console.log(authData);

  return { type: 'SET-AUTH-DATA', payload: { ...authData } } as const;
};
