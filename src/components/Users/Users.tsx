import styles from './Users.module.css';
import { UsersContainerPropsType } from './UsersContainer';
import profileImg from '../../img/lion2.png';

export const Users: React.FC<UsersContainerPropsType> = (props) => {
  return (
    <div>
      {props.users.map((user) => {
        return (
          <div key={user.id} className={styles.user_card}>
            <div className={styles.user_img_and_btn_box}>
              <div className={styles.user_img_box}>
                <img
                  className={styles.img}
                  src={user.profileImg}
                  alt="user img"
                />
              </div>
              <div className={styles.user_btn_box}>
                <button className={styles.follow_btn}>follow</button>
              </div>
            </div>
            <div className={styles.user_presentation_box}>
              <div className={styles.user_name_box}>
                <h5>{user.firstName},</h5>
                <h4>{user.secondName}</h4>
              </div>
              <div className={styles.user_location_box}>
                <h4>{user.location.city},</h4>
                <h3>{user.location.country}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
