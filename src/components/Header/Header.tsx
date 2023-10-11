import styles from './Header.module.css';
import logo_img from '../../images/logos/social_media.png';
import { HeaderContainerPropsType } from './HeaderContainer';

export const Header: React.FC<HeaderContainerPropsType> = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_box}>
        <div className={styles.logo_box}>
          <img className={styles.logo} src={logo_img} alt="lion" />
        </div>
        <div className={styles.auth_box}>
          {props.isAuthorised ? 'Logout' : 'Login'}
        </div>
      </div>
    </header>
  );
};
