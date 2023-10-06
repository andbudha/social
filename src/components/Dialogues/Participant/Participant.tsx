import { NavLink } from 'react-router-dom';
import styles from './Participant.module.css';

type ParticipantPropsType = {
  name: string;
  id: number;
};

export const Participant: React.FC<ParticipantPropsType> = (props) => {
  return (
    <div className={styles.participant}>
      <NavLink
        className={(active) => (active ? styles.active : styles.participant)}
        to={`/dialogues/${props.id}`}
      >
        {props.name}
      </NavLink>
    </div>
  );
};
