import styles from './Header.module.scss';
import cn from 'classnames';
import logo from '@assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import { RouterURlParts } from '@constants/RouterURLParts';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const Header = () => {
  const isActivenavLink = ({ isActive }: { isActive: boolean }) =>
    cn(styles.navLink, { [styles.isActive]: isActive });

  const getTodayDate = (): string => {
    return new Date().toISOString().split('T')[0];
  };

  return (
    <header className={cn(styles.header, 'uppercase')}>
      <section className={styles.headerLeft}>
        <div className={styles.headerLogo}>
          <a
            href="https://openweathermap.org/api"
            className={styles.logoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="site logo" className={styles.headerLogoImg} />
          </a>
        </div>
      </section>
      <section className={styles.headerRight}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <ThemeSwitcher />
            </li>
            <li className={styles.navItem}>
              <NavLink className={isActivenavLink} to={`./${getTodayDate()}`}>
                Today
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={isActivenavLink} to={RouterURlParts.Root}>
                Per week
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};
