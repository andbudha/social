import React from 'react';
import styles from './Users.module.css';
import profileImage from '../../images/avatars/ava5.png';
import { UserType } from '../../types/store-types';

type UsersPropsType = {
  pages: number[];
  selectedPage: number;
  users: UserType[];
  selectUserPageHandler: (page: number) => void;
  followUser: (userID: number) => void;
  unfollowUser: (userID: number) => void;
};
export class Users extends React.Component<UsersPropsType> {
  render() {
    return (
      <div>
        <div className={styles.page_number_box}>
          {this.props.pages.map((page) => {
            return (
              <span
                key={page}
                onClick={() => this.props.selectUserPageHandler(page)}
                className={`${styles.page_number} ${
                  this.props.selectedPage === page && styles.slected_page
                }`}
              >
                {page}
              </span>
            );
          })}
        </div>
        {this.props.users.map((user) => {
          return (
            <div key={user.id} className={styles.user_card}>
              <div className={styles.user_img_and_btn_box}>
                <div className={styles.user_img_box}>
                  <img
                    className={styles.img}
                    src={profileImage}
                    alt="user img"
                  />
                </div>
                <div className={styles.user_btn_box}>
                  {user.followed ? (
                    <button
                      onClick={() => this.props.unfollowUser(user.id)}
                      className={styles.follow_btn}
                    >
                      follow
                    </button>
                  ) : (
                    <button
                      onClick={() => this.props.followUser(user.id)}
                      className={styles.follow_btn}
                    >
                      unfollow
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
      </div>
    );
  }
}
