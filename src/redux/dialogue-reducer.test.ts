import { MessagePageType } from '../types/store-types';
import {
  DialogueReducer,
  addMessageAC,
  addNewParticipantAC,
} from './dialogue-reducer';

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

test('A new dialogue participant should be added.', () => {
  const newID = 333;
  const newParticipant = { id: newID, name: 'Mihai' };

  const resultedState = DialogueReducer(
    startingState,
    addNewParticipantAC(newParticipant)
  );

  expect(resultedState.participants.length).toBe(5);
  expect(resultedState.participants[4].name).toBe(newParticipant.name);
});
