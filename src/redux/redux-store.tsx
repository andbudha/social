import { ProfileReducer } from './profile-reducer';
import { DialogueReducer } from './dialogue-reducer';
import { combineReducers, createStore } from 'redux';
import { UsersReducer } from './users-reducer';
import { AuthReducer } from './auth-reducer';

const rootReducer = combineReducers({
  profiles: ProfileReducer,
  dialogues: DialogueReducer,
  users: UsersReducer,
  authorisation: AuthReducer,
});

export const store = createStore(rootReducer);

//store type
export type AppRootStateType = ReturnType<typeof rootReducer>;

//@ts-ignore
window.store = store;
