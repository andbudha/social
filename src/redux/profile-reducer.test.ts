import { ProfilePageType } from '../types/store-types';
import { ProfileReducer, addPostAC } from './profile-reducer';

let startingState: ProfilePageType;

beforeEach(() => {
  startingState = {
    posts: [
      { id: 1, message: 'Per aspera ad astra!', likeCount: 15 },
      { id: 2, message: 'Dum spiro spero!', likeCount: 25 },
    ],
    userProfile: null,
    profileStatus: '',
    isUpdatingStatus: false,
  };
});

test('The number of posts must be increased', () => {
  const newPost = 'Tarde venientibus ossa!';

  const resultedState = ProfileReducer(startingState, addPostAC(newPost));

  expect(resultedState.posts.length).toBe(3);
  expect(resultedState.posts[2].message).toBe('Tarde venientibus ossa!');
});
