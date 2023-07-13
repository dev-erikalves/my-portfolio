import { useState } from 'react'
import { BiggerButton } from "./components/NetworkBtns/NetworkBtns.jsx";
import NetworkBtns from "./components/NetworkBtns/NetworkBtns.jsx";
import ContactContainer from "./components/ContactContainer/ContactContainer.jsx";
import photoPerfil from "@assets/photo-perfil.jpg";
import menuIconSidebar from "@assets/menu-icon.svg"
import closeIconSidebar from "@assets/x-lg.svg"
import styles from "./styles.module.scss";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <aside className={isOpen ? styles.sidebarIsOpen : styles.sidebarIsClosed}>
            <button className={isOpen ? styles.openBtnSidebar : styles.closeBtnSidebar}
                onClick={() => setIsOpen(!isOpen)}>
                <img src={isOpen ? closeIconSidebar : menuIconSidebar} />
            </button>
            {isOpen && (
                <div className={styles.sidebarContent}>
                    <img className={styles.photoPerfil} src={photoPerfil} alt="Foto Perfil de Erik Alves" />
                    <p className={styles.bio}>FullStack Web Developer</p>
                    <NetworkBtns
                        githubUrl="https://github.com/dev-erikalves"
                        linkedinUrl="https://www.linkedin.com/in/dev-erikalves/"
                        instagramUrl="https://www.instagram.com/developerik.web/"
                        curriculoUrl="#"
                    />
                    <ContactContainer />
                    <BiggerButton
                        text="Download CV"
                    />
                </div>
            )}
        </aside>
    )
}