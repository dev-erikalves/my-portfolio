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
        <div>
            <span className={styles.nameContainer}></span>
            <h1 id="header">
                <span className={styles.name}>{text}</span>
            </h1>
        </div>
    )
}
// id="toTop" for btn toTop in footer