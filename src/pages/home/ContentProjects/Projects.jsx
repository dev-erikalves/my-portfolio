import { TitleAndDescription } from "@components/TitleAndDescription/index.jsx";
import styles from "./styles.module.scss";

export default function ContentProjects(){
    return (
        <section id="contentProjects" className={styles.contentProjects}>
            <TitleAndDescription
                title="Projetos"
                description="Veja um pouco do que andei aprontando nos últimos dias. Todos os meus repositórios com todos os projetos, para ficar a um passo de saber mais sobre cada um, dê um pulinho na README.md! Te vejo por ai &#x1F918;&#x1F525;."
            />
            <a className={styles.projectsBtn} href="https://github.com/dev-erikalves?tab=repositories" target="_blank">Projects</a>
        </section>
    )
}