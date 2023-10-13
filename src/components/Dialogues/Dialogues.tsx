import { Conversation } from './Conversation/Conversation';
import styles from './Dialogues.module.css';
import { Participant } from './Participant/Participant';
import { DialoguesConainerPropsType } from './DialoguesContainer';
import { Redirect } from 'react-router-dom';
import { AddNewMessageForm } from './AddNewMessageForm/AddNewMessageForm';

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

  return (
    <div className={styles.dialogues}>
      <div className={styles.participants}>{participantList}</div>
      <div className={styles.conversation_box}>
        <div className={styles.conversations}>{messageList}</div>
        <AddNewMessageForm addMessage={props.addMessage} />
      </div>
    </div>
  );
};
