import styles from "./styles.module.scss";

export default function Name() {
    const name = "<Erik Alves>"
    return (
        <h1 id="toTop" className={styles.name}>{name}</h1>
    )
}
// id="toTop" for btn toTop in footer