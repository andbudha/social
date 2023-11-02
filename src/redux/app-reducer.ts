import { AppReducerInitialStateType } from '../types/store-types';

const initialState: AppReducerInitialStateType = {
  error: null,
  isLoading: false,
};

export type AppReducerActionTypes =
  | setAppErrorAcType
  | setIsLoadingStatusACType;
export const AppReducer = (
  state: AppReducerInitialStateType = initialState,
  action: AppReducerActionTypes
): AppReducerInitialStateType => {
  switch (action.type) {
    case 'app-reducer/SET-APP-ERROR': {
      return { ...state, error: action.payload.error };
    }
    case 'app-reducer/SET-IS-LOADING-STATUS': {
      return { ...state, isLoading: action.payload.newLoadingStatus };
    }
    default: {
      return state;
    }
  }
};

type setAppErrorAcType = ReturnType<typeof setAppErrorAC>;
export const setAppErrorAC = (error: null | string) => {
  return { type: 'app-reducer/SET-APP-ERROR', payload: { error } } as const;
};

type setIsLoadingStatusACType = ReturnType<typeof setIsLoadingStatusAC>;
export const setIsLoadingStatusAC = (newLoadingStatus: boolean) => {
  return {
    type: 'app-reducer/SET-IS-LOADING-STATUS',
    payload: { newLoadingStatus },
  } as const;
};
