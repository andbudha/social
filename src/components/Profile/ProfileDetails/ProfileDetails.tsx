import styles from './ProfileDetails.module.css';
import social_media from '../../../images/logos/social_media.png';

export const ProfileDetails = () => {
  return (
    <div>
      <div className={styles.img_bakground}>
        <img
          className={styles.content_img}
          src={social_media}
          alt="social nework"
        />
      </div>
      <div className={styles.profile_block}>avatar + description</div>
    </div>
  );
};
