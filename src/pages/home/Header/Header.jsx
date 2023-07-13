import React, { useState, useEffect, useCallback } from 'react';
import Name from '../../../components/Name/Name.jsx';
import styles from './styles.module.scss';

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY)
}, [lastScrollY])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
      <header className={showHeader ? styles.headerVisible : styles.headerHidden}>
        <div className={styles.contentHeader}>
          <Name />
          <nav>
            <LinkNav href="#contentAbout" name="Sobre"/>
            <LinkNav href="#contentSkills" name="Habilidades"/>
            <LinkNav href="#contentProjects" name="Projetos"/>
          </nav>
        </div>
      </header>
  );
};
export const LinkNav = ({ href, name}) => {
  return (
    <a href={href}>
      <button className={styles.linksNav}>{name}</button>
    </a>
  );
};