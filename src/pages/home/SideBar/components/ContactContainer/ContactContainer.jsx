import PhoneIcon from "@assets/telephone-icon.svg";
import EmailIcon from "@assets/email-icon.svg";
import LocationIcon from "@assets/location-icon.svg"
import styles from "./styles.module.scss";

export default function ContactContainer() {
    return (
        <section className={styles.contactContainer}>
            <ContactSection
                href="tel:89994307093"
                icon={PhoneIcon} alt="Icone de Telefone"
                info="+55 (89) 99430-7093"
            />
            <ContactSection
                href="mailto:dev.eriksantos@gmail.com"
                icon={EmailIcon} alt="Icone de Email"
                info="dev.eriksantos@gmail.com"
            />
            <ContactSection
                href="https://www.google.com/maps?q=-6.7811416033733405,-43.02224855870198"
                icon={LocationIcon} alt="Icone de Localização"
                info="Floriano - PI"
            />
        </section>
    )
}

const ContactSection = ({ href, icon, alt, info }) => {
    return (
        <div className={styles.contactSection}>
            <a href={href} className={styles.icons} target="_blank">
                <img src={icon} alt={alt} />
            </a>
            <span className={styles.info}>{info}</span>
        </div>
    )
}