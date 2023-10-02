import axios from 'axios';
import styles from './Users.module.css';
import { UsersContainerPropsType } from './UsersContainer';
import profileImage from '../../images/avatars/ava5.png';

export const Users: React.FC<UsersContainerPropsType> = (props) => {
  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }

  return (
    <div>
      {props.users.map((user) => {
        return (
          <div key={user.id} className={styles.user_card}>
            <div className={styles.user_img_and_btn_box}>
              <div className={styles.user_img_box}>
                <img className={styles.img} src={profileImage} alt="user img" />
              </div>
              <div className={styles.user_btn_box}>
                {user.followed ? (
                  <button
                    onClick={() => props.unfollowUser(user.id)}
                    className={styles.follow_btn}
                  >
                    follow
                  </button>
                ) : (
                  <button
                    onClick={() => props.followUser(user.id)}
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
};
