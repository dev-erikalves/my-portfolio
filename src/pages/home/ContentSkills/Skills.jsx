import HtmlIcon from "@assets/html-icon.png"
import CssIcon from "@assets/css-3.png"
import JavaScriptIcon from "@assets/javascript-icon.png"
import SassIcon from "@assets/sass-icon.png"
import BootstrapIcon from "@assets/bootstrap-icon.png"
import ReactIcon from "@assets/react-icon.png"
import GitIcon from "@assets/git-icon.svg"
import GithubIcon from "@assets/github-icon2.svg"
import { TitleAndDescription } from "@components/TitleAndDescription/index.jsx"
import styles from "./styles.module.scss"

export default function ContentSkills() {
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
            <span>{tech}</span>
        </div>
    )
}