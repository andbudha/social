import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './ProfileStatus.module.css';
import { ProfileContainerPropsType } from '../ProfileContainer';
import { UpdatingLoader } from '../../common/Loaders/UpdatingLoader/UpdatingLoader';
import { BiSolidEdit, BiCheckCircle } from 'react-icons/bi';

type ProfileStatusPropsType = {
  profileContainerProps: ProfileContainerPropsType;
  isOwner: boolean;
};
export const ProfileStatus: React.FC<ProfileStatusPropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [profileStatus, setProfileStatus] = useState('');

  useEffect(() => {
    setProfileStatus(props.profileContainerProps.profileStatus);
  }, [props.profileContainerProps.profileStatus]);

  const inputValueGettingHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProfileStatus(event.currentTarget.value);
  };

  const displayStatusInputHandler = () => {
    setEditMode(true);
  };

  const closeStatusInputHandler = () => {
    setEditMode(false);
    if (profileStatus.length) {
      props.profileContainerProps.setProfileStatusThunk(profileStatus);
    }
  };
  return (
    <div>
      <span className={styles.strong}>
        <div className={styles.edit_status_box}>
          <div>Status </div>
          {!props.isOwner ? (
            <div className={styles.edit_status_icon_box}>
              {' '}
              /
              {editMode ? (
                <BiCheckCircle
                  className={styles.edit_status_icon}
                  onClick={closeStatusInputHandler}
                />
              ) : (
                <BiSolidEdit
                  className={styles.edit_status_icon}
                  onClick={displayStatusInputHandler}
                />
              )}
            </div>
          ) : null}
        </div>
      </span>
      <div>
        {!editMode &&
          (props.profileContainerProps.isUpdatingStatus ? (
            <UpdatingLoader />
          ) : (
            <div>
              {props.profileContainerProps.profileStatus || (
                <div className={styles.no_status}>status not added</div>
              )}
            </div>
          ))}
        {editMode && (
          <div>
            {profileStatus.length > 50 && (
              <p className={styles.status_message_error}>
                Must be 50 characters or less!
              </p>
            )}
            <input
              autoFocus
              value={profileStatus}
              onChange={inputValueGettingHandler}
              className={`${styles.status_input} ${
                profileStatus.length > 50 && styles.status_input_error
              }`}
              type="text"
            />
          </div>
        )}
      </div>
    </div>
  );
};
