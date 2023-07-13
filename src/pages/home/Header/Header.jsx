import React, { useState, useEffect } from 'react';
import Name from './components/Name/Name.jsx';
import styles from './styles.module.scss';
import Modal from './components/Modal/Modal.jsx';

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header id='header' className={show ? styles.headerVisible : styles.headerHidden}>
      <Name />
      <nav>
        <LinkNav href="#contentAbout" name="Sobre"/>
        <LinkNav href="#contentSkills" name="Habilidades"/>
        <LinkNav href="#contentProjects" name="Projetos"/>
        <button
          className={styles.linksNav}
          data-bs-target="#exampleModalToggle"
          data-bs-toggle="modal"
        >
          Redes
        </button>
        <Modal />
      </nav>
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

export default Header;