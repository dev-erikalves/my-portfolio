import HtmlIcon from "./icons/html-icon.png"
import CssIcon from "./icons/css-3.png"
import JavaScriptIcon from "./icons/javascript-icon.png"
import SassIcon from "./icons/sass-icon.png"
import BootstrapIcon from "./icons/bootstrap-icon.png"
import ReactIcon from "./icons/react-icon.png"
import GitIcon from "./icons/git-icon.svg"
import GithubIcon from "./icons/github-icon.svg"
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

const TitleAndDescription = ({ title, description }) => {
    return (
        <>
            <h1 className={styles.titles}>{title}</h1>
            <p className={styles.descriptions}>{description}</p>
        </>
    )
}

const ContentAboutMe = () => {
    return (
        <section>
            <TitleAndDescription
                title="About me"
                description="Olá, que bom te ver aqui, me chamo Erik Alves, tenho 22 anos, atualmente moro em Floriano-PI, bem, o que dizer sobre mim, sempre fui muito curioso com tudo relacionado a tecnologia, é algo que me fascina e motiva a querer conhecer mais. E cá estou eu, fazendo algo que gosto, desenvolver softwares e soluções para problemas. Iniciei um curso de Tecnologia da Informação na UFERSA no Rio Grande do Norte, mas infelizmente não consigo continuar por questões além do meu controle. Agora estou buscando uma oportunidade nessa área afim de não só melhorar meus conhecimentos e me elevar como profissional, mas também contribuir com o máximo que puder para a empresa."
            />
        </section>
    )
}

const ContentSkills = () => {
    return (
        <section>
            <TitleAndDescription
                title="Skills"
                description="Como eu sempre digo, garantir que sei tudo e 100% de todas essas tecnologias é muita ousadia, pois sempre tem algo novo a aprender, e isso não é desculpa, até porque estou constantemente focado e motivado a querer mais! Mas posso garantir que o que sei não só pode mas vai contribuir com a equipe!"
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

const ContentProjects = () => {
    return (
        <section>
            <TitleAndDescription
                title="Projects"
                description="Veja um pouco do que andei aprontando nos últimos dias. Todos os meus repositórios com todos os projetos, para ficar a um passo de saber mais sobre cada um, dê um pulinho na README.md! Te vejo por ai &#x1F918;&#x1F525;."
            />
            <a className={styles.projectsBtn} href="https://github.com/dev-erikalves?tab=repositories" target="_blank">Projects</a>
        </section>
    )
}