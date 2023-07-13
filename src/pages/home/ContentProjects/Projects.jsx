import { TitleAndDescription } from "@components/TitleAndDescription/index.jsx";
import styles from "./styles.module.scss";
import ImageListProjects from "./components/ImageListProjects/ImageListProjects.jsx"

export default function ContentProjects(){
    return (
        <section id="contentProjects"
        data-aos="fade-right"
        data-aos-duration="1000"
        className={styles.contentProjects}>
            <TitleAndDescription
                title="Projetos"
                description="Veja um pouco do que andei aprontando nos últimos dias. Alguns dos meus principais projetos. Para ficar a um passo de saber mais sobre cada um, clique no icone 'i' nos cards! Te vejo por ai &#x1F918;&#x1F525;."
            />
            <ImageListProjects/>
            <a className={styles.projectsBtn} href="https://github.com/dev-erikalves?tab=repositories" target="_blank">Outros</a>
        </section>
    )
}