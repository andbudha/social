import styles from './Header.module.css';
import logo_img from '../../images/logos/social_media.png';
import { AppRootStateType } from '../../redux/redux-store';
import { useSelector } from 'react-redux';

export const Header = () => {
  const isAuthorised = useSelector<AppRootStateType>(
    (state) => state.authorisation.isAuthorised
  );
  return (
    <header className={styles.header}>
      <div className={styles.header_box}>
        <div className={styles.logo_box}>
          <img className={styles.logo} src={logo_img} alt="lion" />
        </div>
        <div className={styles.auth_box}>
          {isAuthorised ? 'Logout' : 'Login'}
        </div>
      </div>
    </header>
  );
};
