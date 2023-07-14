import styles from "./styles.module.scss";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Name() {
    const [text] = useTypewriter({
        words: ['Bem vindo!', 'Eu sou...', '<Erik Alves>'],
        loop: {},
        typeSpeed: 290,
        deleteSpeed: 90,
    })
    return (
        <div className={styles.nameContainer}>
            <h1>{text}</h1>
            <Cursor cursorColor="white" cursorStyle='|' />
        </div>
    )
}