import styles from './ProfileDetails.module.css';
import { ProfileContainerPropsType } from '../ProfileContainer';
import defaultProfile from '../../../images/avatars/ava7.png';
import { ProfileStatus } from './ProfileStatus';
import { FormEvent } from 'react';

type ProfileDetailsPropsType = {
  profileContainerProps: ProfileContainerPropsType;
  isOwner: boolean;
};

export const ProfileDetails: React.FC<ProfileDetailsPropsType> = (props) => {
  const profileImgUploadHandler = (event: FormEvent<HTMLInputElement>) => {
    const currentTarget = event.currentTarget as HTMLInputElement & {
      files: FileList;
    };
    const profileImage = currentTarget.files[0];
    console.log(profileImage);
    props.profileContainerProps.uploadProfileImg(profileImage);
  };
  return (
    <div>
      <div className={styles.profile_box}>
        <div className={styles.profile_img_box}>
          <div className={styles.profile_img}>
            <img
              className={styles.img}
              src={
                props.profileContainerProps.userProfile?.photos.small ||
                defaultProfile
              }
              alt="avatar"
            />
          </div>
          <div className={styles.upload_profile_img_box}>
            {!props.isOwner && (
              <input
                type={'file'}
                className={styles.profile_img_input}
                id={'profile-img-input'}
                onChange={profileImgUploadHandler}
              />
            )}
          </div>
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
                profileContainerProps={props.profileContainerProps}
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
