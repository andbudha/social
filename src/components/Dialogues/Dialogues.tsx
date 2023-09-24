import { MessagePageType } from '../../redux/state';
import { Conversation } from './Conversation/Conversation';
import styles from './Dialogues.module.css';
import { Participant } from './Participant/Participant';

type DialoguesPropsType = {
  messagePage: MessagePageType;
};
export const Dialogues: React.FC<DialoguesPropsType> = (props) => {
  const participantList = props.messagePage.participants.map((body) => (
    <Participant key={body.id} name={body.name} id={body.id} />
  ));

  const messageList = props.messagePage.messages.map((msg) => (
    <Conversation key={msg.id} message={msg.message} id={msg.id} />
  ));
  return (
    <div className={styles.dialogues}>
      <div className={styles.participants}>{participantList}</div>
      <div className={styles.conversations}>{messageList}</div>
    </div>
  );
};
