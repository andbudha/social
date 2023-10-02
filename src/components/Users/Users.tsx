import styles from './Users.module.css';
import { UsersContainerPropsType } from './UsersContainer';
import andeiProfileImg from '../../images/avatars/ava1.png';
import dorianProfileImg from '../../images/avatars/ava2.png';
import deliaProfileImg from '../../images/avatars/ava3.png';
import nataliaProfileImg from '../../images/avatars/ava4.png';

export const Users: React.FC<UsersContainerPropsType> = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        profileImg: andeiProfileImg,
        firstName: 'Andrei',
        secondName: 'Bartov',
        position: 'unemployed',
        location: { country: 'Germany', city: 'Berlin' },
      },
      {
        id: 2,
        followed: false,
        profileImg: deliaProfileImg,
        firstName: 'Delia',
        secondName: 'Bartov',
        position: 'pupil',
        location: { country: 'Germany', city: 'Dresden' },
      },
      {
        id: 3,
        followed: true,
        profileImg: nataliaProfileImg,
        firstName: 'Natalia',
        secondName: 'Bartov',
        position: 'teacher',
        location: { country: 'Germany', city: 'Berlin' },
      },
      {
        id: 4,
        followed: false,
        profileImg: dorianProfileImg,
        firstName: 'Dorian',
        secondName: 'Bartov',
        position: 'student',
        location: { country: 'Germany', city: 'Frankfurt' },
      },
    ]);
  }
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
