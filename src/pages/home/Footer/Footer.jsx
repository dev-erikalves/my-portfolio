import iconUpToTop from "@assets/arrow-up-circle.svg"
import styles from "./style.module.scss";

export default function Footer() {
    return (
        <>
            <footer>
                <p>Feito com carinho, além de muito &#x2764;</p>
                <p className={styles.copy}>&copy; 2023 - All rights reserveds</p>

                <a href="#header" className={styles.toTopBtn}>
                    <img src={iconUpToTop} alt="Icon de flecha apontando para cima" />
                </a>
            </footer>
        </>
    )
}