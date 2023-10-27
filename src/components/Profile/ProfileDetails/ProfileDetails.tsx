import styles from './ProfileDetails.module.css';
import { ProfileContainerPropsType } from '../ProfileContainer';
import defaultProfile from '../../../images/avatars/ava7.png';
import { ProfileStatus } from './ProfileStatus';
import { FormEvent, useState } from 'react';
import { ProfileForm } from '../ProfileForm/ProfileForm';

type ProfileDetailsPropsType = {
  profileContainerProps: ProfileContainerPropsType;
  isOwner: boolean;
};

export const ProfileDetails: React.FC<ProfileDetailsPropsType> = (props) => {
  const [profileForm, setProfileForm] = useState(false);

  const profileFormHandler = () => {
    setProfileForm(!profileForm);
  };
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
          {profileForm ? (
            <div>
              <ProfileForm
                profileContainerProps={props.profileContainerProps}
                isOwner={props.isOwner}
              />
            </div>
          ) : (
            <div>
              <div className={styles.descriptive_item}>
                <span className={styles.strong}>Name: </span>
                <div className={styles.details}>
                  {' '}
                  {props.profileContainerProps.userProfile?.fullName}
                </div>
              </div>
              <div className={styles.descriptive_item}>
                <span className={styles.strong}>Status: </span>
                <div className={styles.details}>
                  <ProfileStatus
                    profileContainerProps={props.profileContainerProps}
                  />
                </div>
              </div>
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
                  {props.profileContainerProps.userProfile
                    ?.lookingForAJobDescription
                    ? props.profileContainerProps.userProfile
                        .lookingForAJobDescription
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
          )}

          <div className={styles.edit_profile_btn_box}>
            <button
              className={styles.edit_profile_btn}
              onClick={profileFormHandler}
            >
              edit profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
