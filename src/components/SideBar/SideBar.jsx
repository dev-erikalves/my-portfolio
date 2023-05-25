import photoPerfil from "../../assets/eu-04.png";
import LinksContainer from "./components/Links/Links.jsx";
import { CurriculoBtn }  from "./components/Links/Links.jsx"
import styles from "./styles.module.scss";

export default function SideBar() {
    return (
        <section className={styles.sidebar}>
            <img className={styles.photoPerfil} src={photoPerfil} alt="Foto Perfil de Erik Alves" />
            <p className={styles.bio}>FullStack Web Developer</p>

            <LinksContainer
                  githubUrl="https://github.com"
                  linkedinUrl="https://linkedin.com"
                  instagramUrl="https://instagram.com"
                  curriculoUrl="#"
            />
            <div className={styles.contactContainer}>

            </div>
            <CurriculoBtn>Download Cv</CurriculoBtn>
        </section>
    )
}