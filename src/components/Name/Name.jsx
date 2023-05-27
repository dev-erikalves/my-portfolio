import styles from "./styles.module.scss";

export default function Name() {
    const name = "<Erik Alves>"
    return (
        <h1 className={styles.name}>{name}</h1>
    )
}