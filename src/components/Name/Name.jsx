import styles from "./styles.module.scss";
import { useTypewriter } from 'react-simple-typewriter'

export default function Name() {
    const [text] = useTypewriter({
        words: ['<Erik Alves>'],
        loop: {},
        typeSpeed: 190,
        deleteSpeed: 90,
    })
    return (
        <h1 id="name">
            <span className={styles.name}>{text}</span>
        </h1>
    )
}
// id="toTop" for btn toTop in footer