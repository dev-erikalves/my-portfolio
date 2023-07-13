import iconUpToTop from "@assets/arrow-up-circle.svg"
import styles from "./styles.module.scss";

export default function Footer() {
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    };
    return (
        <footer>
            <p>Feito com carinho, além de muito &#x2764;</p>
            <p className={styles.copy}>&copy; 2023 - All rights reserveds</p>

            <button
                className={styles.btnToTop}
                onClick={ScrollToTop}>
                <img src={iconUpToTop} alt="Icone de flecha apontando para cima" />
            </button>
        </footer>
    );
};