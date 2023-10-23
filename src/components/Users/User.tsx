import { NavLink } from 'react-router-dom';
import { UserType } from '../../types/store-types';
import styles from './User.module.css';
import profileImage from '../../images/avatars/ava7.png';

type UserPropsType = {
  user: UserType;
  followingBTNToggle: number[];
  followUserThunk: (userID: number) => void;
  unfollowUserThunk: (userID: number) => void;
};

export const User: React.FC<UserPropsType> = (props) => {
  const followUserHandler = (userID: number) => {
    props.followUserThunk(userID);
  };

  const unfollowUserHandler = (userID: number) => {
    props.unfollowUserThunk(userID);
  };
  return (
    <div>
      <div className={styles.user_card}>
        <div className={styles.user_img_and_btn_box}>
          <div className={styles.user_img_box}>
            <NavLink to={`/profile/${props.user.id}`}>
              <img
                className={styles.img}
                src={props.user.photos.small || profileImage}
                alt="user img"
              />
            </NavLink>
          </div>
          <div className={styles.user_btn_box}>
            {props.user.followed ? (
              <button
                onClick={() => unfollowUserHandler(props.user.id)}
                className={styles.follow_btn}
                disabled={props.followingBTNToggle.some(
                  (id) => id === props.user.id
                )}
              >
                unfollow
              </button>
            ) : (
              <button
                onClick={() => followUserHandler(props.user.id)}
                className={styles.follow_btn}
                disabled={props.followingBTNToggle.some(
                  (id) => id === props.user.id
                )}
              >
                follow
              </button>
            )}
          </div>
        </div>
        <div className={styles.user_presentation_box}>
          <div className={styles.user_name_box}>
            <h4>{props.user.name}</h4>
          </div>
          <div className={styles.user_location_box}>
            {/* <h4>{user.location.city},</h4>
                <h5>{user.location.country}</h5> */}
          </div>
        </div>
      </div>
    </div>
  );
};
