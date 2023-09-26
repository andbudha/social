import { ChangeEvent } from 'react';
import {
  ActionTypes,
  MessagePageType,
  addMessageAC,
  updateMessageTextAC,
} from '../../redux/store';
import { Conversation } from './Conversation/Conversation';
import styles from './Dialogues.module.css';
import { Participant } from './Participant/Participant';

type DialoguesPropsType = {
  messagePage: MessagePageType;
  newMessageText: string;
  dispatch: (action: ActionTypes) => void;
};
export const Dialogues: React.FC<DialoguesPropsType> = (props) => {
  const participantList = props.messagePage.participants.map((body) => (
    <Participant key={body.id} name={body.name} id={body.id} />
  ));

  const messageList = props.messagePage.messages.map((msg) => (
    <Conversation key={msg.id} message={msg.message} id={msg.id} />
  ));

  //input value catching handler
  const inputValueCatchingHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = e.currentTarget.value;
    props.dispatch(updateMessageTextAC(newMessage));
  };
  //message adding func
  const addMessageHandler = () => {
    props.dispatch(addMessageAC());
  };
  return (
    <div className={styles.dialogues}>
      <div className={styles.participants}>{participantList}</div>
      <div className={styles.conversation_box}>
        <div className={styles.conversations}>{messageList}</div>
        <textarea
          onChange={inputValueCatchingHandler}
          className={styles.msg_textarea}
          value={props.newMessageText}
          cols={40}
          rows={5}
        />
        <button onClick={addMessageHandler} className={styles.msg_button}>
          add message
        </button>
      </div>
    </div>
  );
};
