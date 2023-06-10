import styles from "./styles.module.scss";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Name() {
    const [text] = useTypewriter({
        words: ['Bem vindo!', 'Eu sou...', '<Erik Alves>'],
        loop: {},
        typeSpeed: 190,
        deleteSpeed: 90,
    })
    return (
        <>
            <h1 style={{display: 'flex'}}>
                <span className={styles.name}>{text}</span>
                <span style={{color: 'white', margin: '0 0 10px'}}>
                    <Cursor cursorStyle='|'/>
                </span>
            </h1>
        </>
    )
}