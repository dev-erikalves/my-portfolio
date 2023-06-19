import githubIcon from "@assets/github-icon.svg";
import linkedinIcon from "@assets/linkedin-icon.svg";
import instagramIcon from "@assets/instagram-icon.svg"
import styles from "./styles.module.scss"

export default function NetworkBtns(props) {
    return (
        <div className={styles.networkBtnsContainer}>
            <Links href={props.githubUrl}>
                <img src={githubIcon} alt="Icon Github" />
            </Links>
            <Links href={props.linkedinUrl}>
                <img src={linkedinIcon} alt="Icon Linkedin" />
            </Links>
            <Links href={props.instagramUrl}>
                <img src={instagramIcon} alt="Icon Instagram" />
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

export function BiggerButton(props) {
    return (
        <a href="https://drive.google.com/file/d/1EpNgOBFdvLWSpA01Oiqj3QQDmoXBxWYL/view?usp=sharing" className={`${styles.links} ${styles.BiggerButton}`} target="_blank">
            {props.text}
        </a>
    )
}