import styles from './ProfileDetails.module.css';
import { ProfileContainerPropsType } from '../ProfileContainer';
import defaultProfile from '../../../images/avatars/ava7.png';
import { ProfileStatus } from './ProfileStatus';
import { FormEvent, MouseEventHandler, useRef } from 'react';
import { ProfileForm } from '../ProfileForm/ProfileForm';
import { BiLink } from 'react-icons/bi';

type ProfileDetailsPropsType = {
  profileContainerProps: ProfileContainerPropsType;
  isOwner: boolean;
};

export const ProfileDetails: React.FC<ProfileDetailsPropsType> = (props) => {
  const profileFormHandler = () => {
    props.profileContainerProps.setProfileEditStatus(true);
  };
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const uploadImageHandler: MouseEventHandler<HTMLDivElement> = () => {
    const inputFile = hiddenFileInput.current;
    if (!inputFile) return;
    inputFile.click();
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
        <div className={styles.profile_sub_box_one}>
          <div className={styles.profile_img_box}>
            <div className={styles.profile_img}>
              <img
                className={styles.img}
                src={
                  props.profileContainerProps.userProfile?.photos.large ||
                  defaultProfile
                }
                alt="avatar"
              />
            </div>
          </div>
          <div className={styles.upload_profile_img_box}>
            {!props.isOwner && (
              <div>
                <div
                  onClick={uploadImageHandler}
                  className={styles.upload_profile_img_btn}
                >
                  <p>change img</p>
                </div>
                <input
                  ref={hiddenFileInput}
                  type={'file'}
                  className={styles.profile_img_input}
                  id={'profile-img-input'}
                  onChange={profileImgUploadHandler}
                />
              </div>
            )}
          </div>
        </div>
        {props.profileContainerProps.profileEditStatus ? (
          <div className={styles.profile_sub_box_two}>
            <ProfileForm profileContainerProps={props.profileContainerProps} />
          </div>
        ) : (
          <div className={styles.profile_sub_box_two}>
            <div className={styles.profile_detail_box}>
              <div>
                <div className={styles.descriptive_item}>
                  <div className={styles.details}>
                    <ProfileStatus
                      profileContainerProps={props.profileContainerProps}
                      isOwner={props.isOwner}
                    />
                  </div>
                </div>
                <div className={styles.descriptive_item}>
                  <span className={styles.strong}>Name: </span>
                  <div className={styles.details}>
                    {' '}
                    {props.profileContainerProps.userProfile?.fullName}
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
                  <span className={styles.strong}>About me: </span>
                  <div className={styles.details}>
                    {props.profileContainerProps.userProfile?.aboutMe
                      ? props.profileContainerProps.userProfile?.aboutMe
                      : 'not available'}
                  </div>
                </div>
                <div className={styles.descriptive_item_contact_link_box}>
                  <span className={styles.strong}>Get in touch: </span>
                  <div className={styles.details}>
                    {props.profileContainerProps.userProfile?.contacts
                      ?.website ? (
                      <a
                        href={
                          props.profileContainerProps.userProfile.contacts
                            .website
                        }
                        target="_blank"
                      >
                        <BiLink
                          className={styles.contact_link_icon}
                          href={
                            props.profileContainerProps.userProfile.contacts
                              .website
                          }
                        />
                      </a>
                    ) : (
                      ' not available'
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.edit_profile_btn_box}>
              {!props.isOwner ? (
                <button
                  className={styles.edit_profile_btn}
                  onClick={profileFormHandler}
                >
                  edit profile
                </button>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
