import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const navLinks = ['Home', 'About', 'Contact Us', 'Blog', 'Found a bug? Let us know'];

const Header: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderContainer}>
        <div className={styles.ContentContainer}>
        <div className={styles.headerLogo}>
          <NavLink to="/">
            <img src="/pictures/HeaderLogo.png" alt="HeaderLogo" width={46} height={60}/>
          </NavLink>
        </div>
        <nav className={styles.NavContainer}>
          <ul className={styles.ULContainer}>
            {navLinks.map((link, index) => {
              const isActive = pathname === `/${formatLink(link)}` || (pathname === '/' && link === 'Home');

              return (
                <li key={index} className={styles.navItem}>
                  <div className={`${styles.navLinkContainer} ${isActive ? styles.activeNavLinkContainer : ''}`}>
                    <div className={styles.rectangle}></div>
                    <NavLink 
                      to={`/${formatLink(link)}`} 
                      className={`${styles.navLink} ${isActive ? styles.activeNavLink : ''}`}

                    >
                      {link}
                    </NavLink>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.RegistrationLogo}>
          <img src="/pictures/RegistrationLogo.png" alt="RegistrationLogo" width={96} height={32}/>
        </div>
        </div>
      </div>
    </div>
  );
};

// Функція для форматування посилання
const formatLink = (link: string) => {
  return link.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
};

export default Header;