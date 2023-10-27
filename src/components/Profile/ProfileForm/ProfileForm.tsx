import { ProfileContainerPropsType } from '../ProfileContainer';
import styles from './ProfileForm.module.css';

type ProfileFormPropsType = {
  profileContainerProps: ProfileContainerPropsType;
  isOwner: boolean;
};
export const ProfileForm: React.FC<ProfileFormPropsType> = (props) => {
  return (
    <div>
      <div className={styles.descriptive_item}>
        <span className={styles.strong}>Open for job-offers: </span>
        <div className={styles.details}>
          {props.profileContainerProps.userProfile?.lookingForAJob
            ? 'Yes'
            : 'No'}
        </div>
      </div>

      <div className={styles.descriptive_item}>
        <span className={styles.strong}>Position: </span>
        <div className={styles.details}>
          {' '}
          {props.profileContainerProps.userProfile?.lookingForAJobDescription
            ? props.profileContainerProps.userProfile.lookingForAJobDescription
            : 'not available'}
        </div>
      </div>
      <div className={styles.descriptive_item}>
        <span className={styles.strong}>Contacts: </span>
        <div className={styles.details}>
          {props.profileContainerProps.userProfile?.contacts?.website
            ? props.profileContainerProps.userProfile?.contacts?.website
            : 'not available'}
        </div>
      </div>
    </div>
  );
};
