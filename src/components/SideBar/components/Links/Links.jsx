import githubIcon from "./icons/github-icon.svg";
import linkedinIcon from "./icons/linkedin-icon.svg";
import instagramIcon from "./icons/instagram-icon.svg"
import styles from "./styles.module.scss"

export default function LinksContainer(props) {
    return (
        <div className={styles.linksContainer}>
            <Links href={props.githubUrl}>
                <img className={styles.icons} src={githubIcon} alt="Icon Github" />
            </Links>
            <Links href={props.linkedinUrl}>
                <img className={styles.icons} src={linkedinIcon} alt="Icon Linkedin" />
            </Links>
            <Links href={props.instagramUrl}>
                <img className={styles.icons} src={instagramIcon} alt="Icon Instagram" />
            </Links>
        </div>
    )
}

function Links(props) {
    return (
        <a className={styles.links} href={props.href} target="_blank">
            {props.children}
        </a>
    )
}

export function CurriculoBtn(props) {
    return (
        <a href="#" className={`${styles.links} ${styles.curriculoBtn}`} target="_blank">
            {props.children}
        </a>
    )
}