import { MessagePageType } from '../types/store-types';
import { DialogueReducer, addMessageAC } from './dialogue-reducer';

let startingState: MessagePageType;

beforeEach(() => {
  startingState = {
    participants: [
      { id: 1, name: 'Dorian' },
      { id: 2, name: 'Delia' },
      { id: 3, name: 'Natalia' },
      { id: 4, name: 'Andrei' },
    ],
    messages: [
      { id: 1, message: 'Hey, there...are you ok?' },
      { id: 2, message: 'Still mad with me?' },
      { id: 3, message: "I will be at Joe's." },
      {
        id: 4,
        message: 'Never mind, I am still interested in this position.',
      },
    ],
  };
});

test('A new dialogue message should be added.', () => {
  const newMessage = 'Have your tests passed?';

  const resultedState = DialogueReducer(
    startingState,
    addMessageAC(newMessage)
  );

  expect(resultedState.messages.length).toBe(5);
  expect(resultedState.messages[4].message).toBe(newMessage);
});
