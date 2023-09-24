import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <div>
          <NavLink
            className={(link) => (link.isActive ? styles.active : styles.item)}
            to={'profile'}
          >
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink
            className={(link) => (link.isActive ? styles.active : styles.item)}
            to={'dialogues'}
          >
            Messages
          </NavLink>
        </div>
        <div>
          <NavLink
            className={(link) => (link.isActive ? styles.active : styles.item)}
            to={'news'}
          >
            News
          </NavLink>
        </div>
        <div>
          <NavLink
            className={(link) => (link.isActive ? styles.active : styles.item)}
            to={'music'}
          >
            Music
          </NavLink>
        </div>
        <div>
          <NavLink
            className={(link) => (link.isActive ? styles.active : styles.item)}
            to={'settings'}
          >
            Settings
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
