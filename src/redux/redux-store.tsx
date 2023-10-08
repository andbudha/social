import { ProfileReducer, ProfileReducerActionTypes } from './profile-reducer';
import {
  DialogueReducer,
  DialogueReducerActionTypes,
} from './dialogue-reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { UsersReducer, UsersReducerType } from './users-reducer';
import { AuthReducer, AuthReducerActionTypes } from './auth-reducer';
import thunk, { ThunkDispatch } from 'redux-thunk';

const rootReducer = combineReducers({
  profiles: ProfileReducer,
  dialogues: DialogueReducer,
  users: UsersReducer,
  authorisation: AuthReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

//store type
type RootReducerActionTypes =
  | UsersReducerType
  | DialogueReducerActionTypes
  | ProfileReducerActionTypes
  | AuthReducerActionTypes;

export type AppDispatchType = ThunkDispatch<
  AppRootStateType,
  any,
  RootReducerActionTypes
>;
//export const useAppDispatch = () => useDispatch<AppDispatchType>();
export type AppRootStateType = ReturnType<typeof rootReducer>;
//@ts-ignore
window.store = store;
