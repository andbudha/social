import { MessagePageType, ParticipantType } from '../types/store-types';

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
};

export type DialogueReducerActionTypes =
  | addMessageACType
  | addNewParticipantACType;
export const DialogueReducer = (
  state: MessagePageType = initialState,
  action: DialogueReducerActionTypes
): MessagePageType => {
  switch (action.type) {
    case 'dialogue-reducer/ADD-MESSAGE': {
      const stateCopy = {
        ...state,
        participants: [
          ...state.participants.map((participant) => ({ ...participant })),
        ],
        messages: [...state.messages.map((msg) => ({ ...msg }))],
      };
      stateCopy.messages.push({
        id: 111,
        message: action.payload.newMessage,
      });
      return stateCopy;
    }
    case 'dialogue-reducer/ADD-NEW-PARTICIPANT': {
      return {
        ...state,
        participants: [...state.participants, action.payload.newParticipant],
      };
    }

    default:
      return state;
  }
};

type addMessageACType = ReturnType<typeof addMessageAC>;
export const addMessageAC = (newMessage: string) => {
  return {
    type: 'dialogue-reducer/ADD-MESSAGE',
    payload: { newMessage },
  } as const;
};

type addNewParticipantACType = ReturnType<typeof addNewParticipantAC>;
export const addNewParticipantAC = (newParticipant: ParticipantType) => {
  return {
    type: 'dialogue-reducer/ADD-NEW-PARTICIPANT',
    payload: { newParticipant },
  } as const;
};
