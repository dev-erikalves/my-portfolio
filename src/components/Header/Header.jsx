import Name from './components/Name/Name.jsx'
import styles from './styles.module.scss'

export default function() {
    return(
        <header className={styles.header}>
            <Name />
            <nav>
                <ul>
                    <li><a href="#sobreMim">Sobre Mim</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
            </nav>
        </header>    
    )
}