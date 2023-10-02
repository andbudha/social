import styles from './Header.module.css';
import logo_img from '../../images/logos/social_media.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo_img} alt="lion" />
    </header>
  );
};
