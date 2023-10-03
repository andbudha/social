import React from 'react';
import styles from './Users.module.css';
import profileImage from '../../images/avatars/ava5.png';
import axios from 'axios';
import { UsersContainerPropsType } from './UsersContainer';

export class Users extends React.Component<UsersContainerPropsType> {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
    const amountOfPages = Math.ceil(
      this.props.amountOfUsers / this.props.usersPerPage
    );

    const pages: number[] = [];

    for (let i = 1; i <= amountOfPages; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((page) => {
            return (
              <span
                key={page}
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
