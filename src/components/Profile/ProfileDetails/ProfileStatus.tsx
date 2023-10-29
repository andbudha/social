import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './ProfileStatus.module.css';
import { ProfileContainerPropsType } from '../ProfileContainer';
import { UpdatingLoader } from '../../common/Loaders/UpdatingLoader/UpdatingLoader';

type ProfileStatusPropsType = {
  profileContainerProps: ProfileContainerPropsType;
};
export const ProfileStatus: React.FC<ProfileStatusPropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [profileStatus, setProfileStatus] = useState('');

  useEffect(() => {
    setProfileStatus(props.profileContainerProps.profileStatus);
  }, [props.profileContainerProps.profileStatus]);

  const setOnEditModeHandler = () => {
    setEditMode(true);
  };

  const setOffEditModeHandler = () => {
    setEditMode(false);
    if (profileStatus.length) {
      props.profileContainerProps.setProfileStatusThunk(profileStatus);
    }
  };

  const inputValueGettingHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProfileStatus(event.currentTarget.value);
  };
  return (
    <div>
      {!editMode &&
        (props.profileContainerProps.isUpdatingStatus ? (
          <UpdatingLoader />
        ) : (
          <div onDoubleClick={setOnEditModeHandler}>
            {props.profileContainerProps.profileStatus ||
              'Double-click to add your new status'}
          </div>
        ))}
      {editMode && (
        <div onBlur={setOffEditModeHandler}>
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
  );
};
