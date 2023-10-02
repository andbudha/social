import styles from './Header.module.css';
import logo_img from '../../images/logos/lion2.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo_img} alt="lion" />
    </header>
  );
};
