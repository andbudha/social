import styles from './ProfileDetails.module.css';
import { ProfileContainerPropsType } from '../ProfileContainer';
import defaultProfile from '../../../images/avatars/ava7.png';
import { ProfileStatus } from './ProfileStatus';

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
            src={
              props.profileContainerProps.userProfile?.photos.small ||
              defaultProfile
            }
            alt="avatar"
          />
        </div>
        <div className={styles.profile_detail_box}>
          <p>
            <span className={styles.strong}>Name: </span>
            {props.profileContainerProps.userProfile?.fullName}
          </p>
          <p>
            <span className={styles.strong}>Status: </span>
            <ProfileStatus
              status={props.profileContainerProps.userProfile?.aboutMe}
            />
            {/* {props.profileContainerProps.userProfile?.aboutMe} */}
          </p>
          <p>
            <span className={styles.strong}>Open for job-offers: </span>
            {props.profileContainerProps.userProfile?.lookingForAJob
              ? 'Yes'
              : 'No'}
          </p>
        </div>
      </div>
    </div>
  );
};
