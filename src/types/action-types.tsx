import {
  addMessageACType,
  updateMessageTextACType,
} from '../redux/dialogue-reducer';
import { addPostACType, updatePostACType } from '../redux/profile-reducer';
import { followUserACType, unfollowUserACType } from '../redux/users-reducer';

//Action-Types
export type ActionTypes =
  | addPostACType
  | updatePostACType
  | addMessageACType
  | updateMessageTextACType
  | followUserACType
  | unfollowUserACType;
