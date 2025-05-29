import cn from 'classnames';
import styles from './ThemeSwitcher.module.scss';
import sun from '@assets/icons/sun-icon.png';
import moon from '@assets/icons/moon-icon.png';
import { useThemes } from '@hooks/useTheme';

export const ThemeSwitcher = () => {
  const { activeTheme, switchTheme } = useThemes();
  const isLight = activeTheme === 'light';

  return (
    <button
      onClick={() => switchTheme()}
      aria-label="Toggle theme"
      className={cn(styles.themeSwitcher)}
    >
      <img
        className={styles.themeSwitcherIcon}
        src={isLight ? moon : sun}
        alt="Switch theme"
      />
    </button>
  );
};
