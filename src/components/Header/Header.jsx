import Name from './components/Name/Name.jsx'
import styles from './styles.module.scss'

export default function Header() {
    return (
        <header>
            <Name />
            <nav>
                <LinkNav href="#sobre" name="Sobre"/>
                <LinkNav href="#habilidades" name="Habilidades"/>
                <LinkNav href="#projetos" name="Projetos"/>
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