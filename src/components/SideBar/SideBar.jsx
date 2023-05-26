import photoPerfil from "../../assets/eu-04.png";
import NetworkBtns from "./components/NetworkBtns/NetworkBtns.jsx";
import ContactContainer from "./components/ContactContainer/ContactContainer.jsx";
import { CurriculoBtn }  from "./components/NetworkBtns/NetworkBtns.jsx";
import styles from "./styles.module.scss";

export default function SideBar() {
    return (
        <section className={styles.sidebar}>
            <img className={styles.photoPerfil} src={photoPerfil} alt="Foto Perfil de Erik Alves" />
            <p className={styles.bio}>FullStack Web Developer</p>

            <NetworkBtns
                  githubUrl="https://github.com"
                  linkedinUrl="https://linkedin.com"
                  instagramUrl="https://instagram.com"
                  curriculoUrl="#"
            />
            <ContactContainer />
            <CurriculoBtn>Download Cv</CurriculoBtn>
        </section>
    )
}