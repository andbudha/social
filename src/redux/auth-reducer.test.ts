import { AuthReducerInitialState } from '../types/store-types';
import {
  AuthReducer,
  alterAuthorisationStatusAC,
  setIntialisationStatusAC,
} from './auth-reducer';

let startingState: AuthReducerInitialState;
beforeEach(() => {
  startingState = {
    authData: {
      id: 0,
      email: '',
      login: '',
    },
    isAuthorised: false,
    isInitialised: false,
  };
});

test('The authoristation status must be changed to true.', () => {
  const newAuthStatus = true;
  const resultedState = AuthReducer(
    startingState,
    alterAuthorisationStatusAC(newAuthStatus)
  );

  expect(resultedState.isAuthorised).toBe(newAuthStatus);
});

test('The initialisation status must be changed to true.', () => {
  const newInitialStatus = true;
  const resultedState = AuthReducer(
    startingState,
    setIntialisationStatusAC(newInitialStatus)
  );

  expect(resultedState.isInitialised).toBe(newInitialStatus);
});
