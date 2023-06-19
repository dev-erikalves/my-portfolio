import styles from "./styles.module.scss"

export const TitleAndDescription = ({ title, description }) => {
    return (
        <>
            <h1 className={styles.titles}>{title}</h1>
            <p className={styles.descriptions}>{description}</p>
        </>
    )
}