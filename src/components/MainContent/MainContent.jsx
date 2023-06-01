import { ContentAboutMe } from "./components/ContentAboutMe/AboutMe.jsx"
import { ContentSkills } from "./components/ContentSkills/Skills.jsx"
import { ContentProjects } from "./components/ContentProjects/Projects.jsx"
import styles from "./styles.module.scss"

export default function MainContent() {
    return (
        <section className={styles.mainContent}
            /* lib animation config */
            data-aos="fade-right"
            data-aos-duration="1000"
        >
            <ContentAboutMe />
            <ContentSkills />
            <ContentProjects />
        </section>
    )
}