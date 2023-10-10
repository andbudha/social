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
          <div>
            <span className={styles.strong}>Name: </span>
            <div> {props.profileContainerProps.userProfile?.fullName}</div>
          </div>
          <div>
            <span className={styles.strong}>Status: </span>
            <div>
              <ProfileStatus
                status={props.profileContainerProps.userProfile?.aboutMe}
              />
            </div>
            {/* {props.profileContainerProps.userProfile?.aboutMe} */}
          </div>
          <div>
            <span className={styles.strong}>Open for job-offers: </span>
            <div>
              {props.profileContainerProps.userProfile?.lookingForAJob
                ? 'Yes'
                : 'No'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
