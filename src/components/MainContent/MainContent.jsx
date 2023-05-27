import HtmlIcon from "./icons/html-icon.png"
import CssIcon from "./icons/css-3.png"
import JavaScriptIcon from "./icons/javascript-icon.png"
import SassIcon from "./icons/sass-icon.png"
import BootstrapIcon from "./icons/bootstrap-icon.png"
import ReactIcon from "./icons/react-icon.png"
import GitIcon from "./icons/git-icon.png"
import GithubIcon from "./icons/github-icon.png"
import styles from "./styles.module.scss"

export default function MainContent() {
    return (
        <section className={styles.mainContent}>
            <ContentAboutMe />
            <ContentSkills />

        </section>
    )
}

const ContentAboutMe = () => {
    return (
        <section>
            <TitleAndDescription
                title="About me"
                description="Olá, que bom te ver aqui, me chamo Erik Alves, tenho 22 anos, atualmente moro em Floriano-PI, bem, o que dizer sobre mim, sempre fui muito curioso com tudo relacionado a tecnologia, é algo que me fascina e motiva a querer conhecer mais. E cá estou eu, fazendo algo que gosto, desenvolver softwares e soluções para problemas. Iniciei um curso de Tecnologia da Informação na UFERSA no Rio Grande do Norte, mas infelizmente não consigo continuar por questões além do meu controle. Agora estou buscando uma oportunidade nessa área afim de não só melhorar meus conhecimentos e me elevar como profissional, mas contribuir com o máximo que puder para a empresa."
            />
        </section>
    )
}

const ContentSkills = () => {
    return (
        <section>
            <TitleAndDescription
                title="Skills"
                description="Como eu sempre digo, não posso garantir que sei tudo e 100% de todas essas tecnologias, até porque sempre tem algo novo a aprender, mas posso garantir que o que sei não só pode mas vai contribuir com a equipe!"
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
        <div className={styles.techsContainer}>
            <img className={styles.iconsTech} src={img} alt={tech} />
            <p className={styles.techName}>{tech}</p>
        </div>
    )
}

const TitleAndDescription = ({ title, description }) => {
    return (
        <>
            <h1 className={styles.titles}>{title}</h1>
            <p className={styles.descriptions}>{description}</p>
        </>
    )
}