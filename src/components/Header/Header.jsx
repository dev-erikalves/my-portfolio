import Name from './components/Name/Name.jsx'
import styles from './styles.module.scss'

export default function Header() {
    return (
        <header id='header'>
            <Name />
            <nav>
                <LinkNav href="#contentAbout" name="Sobre"/>
                <LinkNav href="#contentSkills" name="Habilidades"/>
                <LinkNav href="#contentProjects" name="Projetos"/>
                <LinkNav href="#contatos" name="Contatos"/>
            </nav>
        </header>
    )
}

export const LinkNav = ({ href, name }) => {
    return (
        <a href={href}>
            <button className={styles.linksNav}>{name}</button>
        </a> 
    )
}