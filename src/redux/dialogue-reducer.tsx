import { ActionTypes } from '../types/action-types';
import { MessagePageType } from '../types/store-types';

export type DialogueReducerActionTypes =
  | addMessageACType
  | updateMessageTextACType;

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
      state.messages.push({
        id: 111,
        message: state.newMessageText,
      });
      state.newMessageText = '';
      return state;
    }
    case 'UPDATE-MESSAGE-TEXT': {
      state.newMessageText = action.newText;
      return state;
    }
    default:
      return state;
  }
};

type addMessageACType = ReturnType<typeof addMessageAC>;

export const addMessageAC = () => {
  return { type: 'ADD-MESSAGE' } as const;
};

type updateMessageTextACType = ReturnType<typeof updateMessageTextAC>;
export const updateMessageTextAC = (newMessage: string) => {
  console.log(newMessage);

  return { type: 'UPDATE-MESSAGE-TEXT', newText: newMessage };
};
