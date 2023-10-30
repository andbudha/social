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
    setEditMode(!editMode);
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
            <div
              className={styles.edit_status_icon_box}
              onClick={displayStatusInputHandler}
            >
              {' '}
              /
              {editMode ? (
                <BiCheckCircle className={styles.edit_status_icon} />
              ) : (
                <BiSolidEdit className={styles.edit_status_icon} />
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
              {props.profileContainerProps.profileStatus ||
                'Add your status here.'}
            </div>
          ))}
        {editMode && (
          <div>
            <input
              autoFocus
              value={profileStatus}
              onChange={inputValueGettingHandler}
              className={styles.status_input}
              type="text"
            />
          </div>
        )}
      </div>
    </div>
  );
};
