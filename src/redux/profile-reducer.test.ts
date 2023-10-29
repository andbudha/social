import { ProfilePageType } from '../types/store-types';
import {
  ProfileReducer,
  addPostAC,
  setProfileStatusAC,
} from './profile-reducer';

let startingState: ProfilePageType;

beforeEach(() => {
  startingState = {
    posts: [
      { id: 1, message: 'Per aspera ad astra!', likeCount: 15 },
      { id: 2, message: 'Dum spiro spero!', likeCount: 25 },
    ],
    userProfile: undefined,
    profileStatus: '',
    isUpdatingStatus: false,
    profileEditStatus: false,
  };
});

test('The number of posts must be increased', () => {
  const newPost = 'Tarde venientibus ossa!';

  const resultedState = ProfileReducer(startingState, addPostAC(newPost));

  expect(resultedState.posts.length).toBe(3);
  expect(resultedState.posts[2].message).toBe('Tarde venientibus ossa!');
});

test('A new profile status must be set', () => {
  const newStatus = 'Veni, vidi, vici!';

  const resultedState = ProfileReducer(
    startingState,
    setProfileStatusAC(newStatus)
  );

  expect(resultedState.profileStatus).toBe('Veni, vidi, vici!');
});
