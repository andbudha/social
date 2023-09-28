import { DialogueReducerActionTypes } from '../redux/dialogue-reducer';
import { ProfileReducerActionTypes } from '../redux/profile-reducer';

//Action-Types
export type ActionTypes =
  | ProfileReducerActionTypes
  | DialogueReducerActionTypes;
