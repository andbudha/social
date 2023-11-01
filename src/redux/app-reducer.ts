import { AppReducerInitialStateType } from '../types/store-types';

const initialState: AppReducerInitialStateType = {
  error: null,
};

export type AppReducerActionTypes = any;
export const AppReducer = (
  state: AppReducerInitialStateType = initialState,
  action: AppReducerActionTypes
): AppReducerInitialStateType => {
  switch (action.type) {
    case 'XXX': {
      return state;
    }
    default: {
      return state;
    }
  }
};
