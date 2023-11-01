import { AppReducerInitialStateType } from '../types/store-types';

const initialState: AppReducerInitialStateType = {
  error: null,
};

export type AppReducerActionTypes = setAppErrorAcType;
export const AppReducer = (
  state: AppReducerInitialStateType = initialState,
  action: AppReducerActionTypes
): AppReducerInitialStateType => {
  switch (action.type) {
    case 'app-reducer/SET-APP-ERROR': {
      return { ...state, error: action.payload.error };
    }
    default: {
      return state;
    }
  }
};

type setAppErrorAcType = ReturnType<typeof setAppErrorAC>;
export const setAppErrorAC = (error: string) => {
  return { type: 'app-reducer/SET-APP-ERROR', payload: { error } } as const;
};
