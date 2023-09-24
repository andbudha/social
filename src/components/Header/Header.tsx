import styles from './Header.module.css';
import logo_img from '../../img/lion2.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo_img} alt="lion" />
    </header>
  );
};
