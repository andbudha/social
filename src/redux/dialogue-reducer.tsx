import { ActionTypes, MessagePageType } from './store';

export type DialogueReducerActionTypes =
  | addMessageACType
  | updateMessageTextACType;

export const DialogueReducer = (
  state: MessagePageType,
  action: ActionTypes
) => {
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
