import React from 'react';
import styles from './Users.module.css';
import profileImage from '../../images/avatars/ava7.png';
import { UserType } from '../../types/store-types';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../rest-api/rest_api';

type UsersPropsType = {
  pages: number[];
  selectedPage: number;
  users: UserType[];
  selectUserPageHandler: (page: number) => void;
  followUser: (userID: number) => void;
  unfollowUser: (userID: number) => void;
};
export const Users: React.FC<UsersPropsType> = (props) => {
  const followUserHandler = (userID: number) => {
    usersAPI.followingUser(userID).then((response) => {
      if (response.data.resultCode === 0) {
        props.followUser(userID);
      }
    });
  };

  const unfollowUserHandler = (userID: number) => {
    usersAPI.unfollowingUser(userID).then((response) => {
      if (response.data.resultCode === 0) {
        props.unfollowUser(userID);
      }
    });
  };
  return (
    <div>
      {props.users.map((user) => {
        return (
          <div key={user.id} className={styles.user_card}>
            <div className={styles.user_img_and_btn_box}>
              <div className={styles.user_img_box}>
                <NavLink to={`/profile/${user.id}`}>
                  <img
                    className={styles.img}
                    src={user.photos.small || profileImage}
                    alt="user img"
                  />
                </NavLink>
              </div>
              <div className={styles.user_btn_box}>
                {user.followed ? (
                  <button
                    onClick={() => unfollowUserHandler(user.id)}
                    className={styles.follow_btn}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => followUserHandler(user.id)}
                    className={styles.follow_btn}
                  >
                    follow
                  </button>
                )}
              </div>
            </div>
            <div className={styles.user_presentation_box}>
              <div className={styles.user_name_box}>
                <h4>{user.name}</h4>
              </div>
              <div className={styles.user_location_box}>
                {/* <h4>{user.location.city},</h4>
                <h5>{user.location.country}</h5> */}
              </div>
            </div>
          </div>
        );
      })}
      <div className={styles.page_number_box}>
        {props.pages.map((page) => {
          return (
            <span
              key={page}
              onClick={() => props.selectUserPageHandler(page)}
              className={`${styles.page_number} ${
                props.selectedPage === page && styles.slected_page
              }`}
            >
              {page}
            </span>
          );
        })}
      </div>
    </div>
  );
};
