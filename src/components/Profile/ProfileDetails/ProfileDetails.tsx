import styles from './ProfileDetails.module.css';
import social_media from '../../../images/logos/social_media.png';
import { ProfileContainerPropsType } from '../ProfileContainer';

type ProfileDetailsPropsType = {
  profileContainerProps: ProfileContainerPropsType;
};

export const ProfileDetails: React.FC<ProfileDetailsPropsType> = (props) => {
  return (
    <div>
      {/* <div className={styles.img_bakground}>
        <img
          className={styles.content_img}
          src={social_media}
          alt="social nework"
        />
      </div> */}

      <div className={styles.profile_block}>
        <div className={styles.avatar_box}>
          <img
            src={props.profileContainerProps.userProfile?.photos.small}
            alt="avatar"
          />
        </div>
        <div className={styles.profile_detail_box}>
          <p>{props.profileContainerProps.userProfile?.fullName}</p>
          <p>{props.profileContainerProps.userProfile?.aboutMe}</p>
        </div>
      </div>
    </div>
  );
};
