import styles from './ProfileDetails.module.css';
import { ProfileContainerPropsType } from '../ProfileContainer';

type ProfileDetailsPropsType = {
  profileContainerProps: ProfileContainerPropsType;
};

export const ProfileDetails: React.FC<ProfileDetailsPropsType> = (props) => {
  return (
    <div>
      <div className={styles.profile_box}>
        <div className={styles.profile_img_box}>
          <img
            className={styles.img}
            src={props.profileContainerProps.userProfile?.photos.small}
            alt="avatar"
          />
        </div>
        <div className={styles.profile_detail_box}>
          <p>
            <strong>Name:</strong>{' '}
            {props.profileContainerProps.userProfile?.fullName}
          </p>
          <p>
            <strong>Status:</strong>{' '}
            {props.profileContainerProps.userProfile?.aboutMe}
          </p>
          <p>
            <strong>Open for job-offers:</strong>{' '}
            {props.profileContainerProps.userProfile?.lookingForAJob
              ? 'Yes'
              : 'No'}
          </p>
        </div>
      </div>
    </div>
  );
};
