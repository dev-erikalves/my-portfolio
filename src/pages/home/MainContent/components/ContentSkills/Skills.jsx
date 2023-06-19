import HtmlIcon from "./icons/html-icon.png"
import CssIcon from "./icons/css-3.png"
import JavaScriptIcon from "./icons/javascript-icon.png"
import SassIcon from "./icons/sass-icon.png"
import BootstrapIcon from "./icons/bootstrap-icon.png"
import ReactIcon from "./icons/react-icon.png"
import GitIcon from "./icons/git-icon.svg"
import GithubIcon from "./icons/github-icon.svg"
import { TitleAndDescription } from "../TitleAndDescription/TitleAndDescription"
import styles from "./styles.module.scss"

export const ContentSkills = () => {
    return (
        <section id="contentSkills">
            <TitleAndDescription
                title="Habilidades"
                description="Constantemente focado e motivado a querer mais! Como eu sempre digo, garantir que sei tudo e 100% de todas essas tecnologias é muita ousadia, pois sempre tem algo novo a aprender, e com você quero aprender muito! E ai? Bora juntos construir algo incrivel?"
                />
            <div className={styles.skillsContainer}>
                    <Skills img={HtmlIcon} tech="HTML5" />
                    <Skills img={CssIcon} tech="CSS3" />
                    <Skills img={JavaScriptIcon} tech="JavaScript" />
                    <Skills img={SassIcon} tech="Sass" />
                    <Skills img={BootstrapIcon} tech="Bootstrap" />
                    <Skills img={ReactIcon} tech="ReactJs" />
                    <Skills img={GitIcon} tech="Git" />
                    <Skills img={GithubIcon} tech="Github" />
            </div>
        </section>
    )
}

const Skills = ({ img, tech }) => {
    return (
        <div className={styles.techsContainer} data-aos="fade-down">
            <img className={styles.iconsTech} src={img} alt={tech} />
            <p className={styles.techName}>{tech}</p>
        </div>
    )
}