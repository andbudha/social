import { ProfileReducer } from './profile-reducer';
import { DialogueReducer } from './dialogue-reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { UsersReducer, UsersReducerType } from './users-reducer';
import { AuthReducer } from './auth-reducer';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  profiles: ProfileReducer,
  dialogues: DialogueReducer,
  users: UsersReducer,
  authorisation: AuthReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

//store type
type RootReducerActionTypes = UsersReducerType;

export type AppDispatchType = ThunkDispatch<
  AppRootStateType,
  any,
  RootReducerActionTypes
>;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export type AppRootStateType = ReturnType<typeof rootReducer>;

//@ts-ignore
window.store = store;
