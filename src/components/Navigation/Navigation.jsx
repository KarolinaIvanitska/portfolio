import css from './Navigation.module.css';
import { Link } from 'react-scroll';
const Navigation = () => {
  return (
    <header className={css.main_navigation}>
      <div className={css.logoContainer}>
        <img
          src="/src/images/me.jpg"
          className={css.logoimg}
          width={60}
          alt="logo image"
        />
      </div>
      <nav>
        <ul className={css.navigation}>
          <li>
            <Link to="/contact" className={css.link}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/" className={css.link}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={css.link}>
              Download CV
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
