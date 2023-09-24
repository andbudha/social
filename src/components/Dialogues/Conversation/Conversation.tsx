import styles from './Conversation.module.css';

export type ConversationPropsType = {
  message: string;
  id: number;
};

export const Conversation: React.FC<ConversationPropsType> = (props) => {
  return <div className={styles.conversation}>{props.message}</div>;
};
