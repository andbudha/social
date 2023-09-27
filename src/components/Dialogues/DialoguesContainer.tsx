import {
  ActionTypes,
  MessagePageType,
  addMessageAC,
  updateMessageTextAC,
} from '../../redux/store';
import { Dialogues } from './Dialogues';

type DialoguesConainerPropsType = {
  messagePage: MessagePageType;
  newMessageText: string;
  dispatch: (action: ActionTypes) => void;
};
export const DialoguesContainer: React.FC<DialoguesConainerPropsType> = (
  props
) => {
  //input value catching handler
  const updateMessageValue = (newMessageValue: string) => {
    props.dispatch(updateMessageTextAC(newMessageValue));
  };
  //message adding func
  const addMessage = () => {
    props.dispatch(addMessageAC());
  };
  return (
    <div>
      <Dialogues
        messagePage={props.messagePage}
        newMessageText={props.newMessageText}
        updateMessageValue={updateMessageValue}
        addMessage={addMessage}
      />
    </div>
  );
};
