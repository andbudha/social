import { ProfileContainerPropsType } from './ProfileContainer';
import { ProfileDetails } from './ProfileDetails/ProfileDetails';
import styles from './Profile.module.css';
type ProfilePropsType = {
  profileContainerProps: ProfileContainerPropsType;
  isOwner: boolean;
};
export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div className={styles.profile_box}>
      <ProfileDetails
        profileContainerProps={props.profileContainerProps}
        isOwner={props.isOwner}
      />
    </div>
  );
};
