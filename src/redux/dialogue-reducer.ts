import { ActionTypes } from '../types/action-types';
import { MessagePageType } from '../types/store-types';

const initialState: MessagePageType = {
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
  newMessageText: '',
};

export const DialogueReducer = (
  state: MessagePageType = initialState,
  action: ActionTypes
): MessagePageType => {
  switch (action.type) {
    case 'ADD-MESSAGE': {
      const stateCopy = {
        ...state,
        participants: [
          ...state.participants.map((participant) => ({ ...participant })),
        ],
        messages: [...state.messages.map((msg) => ({ ...msg }))],
        newMessageText: state.newMessageText,
      };
      stateCopy.messages.push({
        id: 111,
        message: state.newMessageText,
      });
      return stateCopy;
    }
    case 'UPDATE-MESSAGE-TEXT': {
      const stateCopy = {
        ...state,
        participants: [
          ...state.participants.map((participant) => ({ ...participant })),
        ],
        messages: [...state.messages.map((msg) => ({ ...msg }))],
        newMessageText: '',
      };
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export type addMessageACType = ReturnType<typeof addMessageAC>;

export const addMessageAC = () => {
  return { type: 'ADD-MESSAGE' } as const;
};

export type updateMessageTextACType = ReturnType<typeof updateMessageTextAC>;
export const updateMessageTextAC = (newMessage: string) => {
  return { type: 'UPDATE-MESSAGE-TEXT', newText: newMessage };
};
