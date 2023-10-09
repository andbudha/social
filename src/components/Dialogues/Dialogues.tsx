import { ChangeEvent } from 'react';
import { Conversation } from './Conversation/Conversation';
import styles from './Dialogues.module.css';
import { Participant } from './Participant/Participant';
import { DialoguesConainerPropsType } from './DialoguesContainer';
import { Redirect } from 'react-router-dom';

export const Dialogues: React.FC<DialoguesConainerPropsType> = (props) => {
  if (!props.isAuthorised) {
    return <Redirect to={'/login'} />;
  }
  const participantList = props.participants.map((body) => (
    <Participant key={body.id} name={body.name} id={body.id} />
  ));

  const messageList = props.messages.map((msg) => (
    <Conversation key={msg.id} message={msg.message} id={msg.id} />
  ));

  //input value catching handler
  const inputValueCatchingHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMessageValue = e.currentTarget.value;
    props.updateMessageValue(newMessageValue);
  };
  //message adding func
  const addMessageHandler = () => {
    props.addMessage();
    props.updateMessageValue('');
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
