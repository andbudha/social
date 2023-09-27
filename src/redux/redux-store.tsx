import { ProfileReducer } from './profile-reducer';
import { DialogueReducer } from './dialogue-reducer';
import { combineReducers, legacy_createStore } from 'redux';

const rootReducer = combineReducers({
  profiles: ProfileReducer,
  dialogues: DialogueReducer,
});

export const store = legacy_createStore(rootReducer);

//store type
export type AppRootStateType = ReturnType<typeof rootReducer>;

//@ts-ignore
window.store = store;
