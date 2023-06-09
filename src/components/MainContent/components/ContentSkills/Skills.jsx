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
                <div data-aos="fade-down">
                    <Skills img={HtmlIcon} tech="HTML5" />
                </div>
                <div data-aos="fade-down">
                    <Skills img={CssIcon} tech="CSS3" />
                </div>
                <div data-aos="fade-down">
                    <Skills img={JavaScriptIcon} tech="JavaScript" />
                </div>
                <div data-aos="fade-down">
                    <Skills img={SassIcon} tech="Sass" />
                </div>
                <div data-aos="fade-down">
                    <Skills img={BootstrapIcon} tech="Bootstrap" />
                </div>
                <div data-aos="fade-down">
                    <Skills img={ReactIcon} tech="ReactJs" />
                </div>
                <div data-aos="fade-down">
                    <Skills img={GitIcon} tech="Git" />
                </div>
                <div data-aos="fade-down">
                    <Skills img={GithubIcon} tech="Github" />
                </div>
            </div>
        </section>
    )
}

const Skills = ({ img, tech }) => {
    return (
        <div className={styles.techsContainer}>
            <img className={styles.iconsTech} src={img} alt={tech} />
            <p className={styles.techName}>{tech}</p>
        </div>
    )
}