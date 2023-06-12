import photoPerfil from "../../assets/photo-perfil.png";
import NetworkBtns from "./components/NetworkBtns/NetworkBtns.jsx";
import ContactContainer from "./components/ContactContainer/ContactContainer.jsx";
import { BiggerButton } from "./components/NetworkBtns/NetworkBtns.jsx";
import styles from "./styles.module.scss";

export default function SideBar() {
    return (
        <>
            <aside className={styles.sidebar}
            /* lib animation config ->*/ data-aos="flip-left" data-aos-duration="1000"
            >
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
                        text="Download Cv"
                    />
                </div>
            </aside>
        </>
    )
}