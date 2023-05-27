import styles from "./styles.module.scss"

export default function MainContent() {
    return (
        <section className={styles.mainContent}>
            <ContentSection
                title="About me"
                description="Olá, que bom te ver aqui, me chamo Erik Alves, tenho 22 anos,
                atualmente moro em Floriano-PI, bem, o que dizer sobre mim, sempre fui 
                muito curioso com tudo relacionado a tecnologia, é algo que me fascina e 
                motiva a querer conhecer mais. E cá estou eu, fazendo algo que gosto, desenvolver softwares
                e soluções para problemas. Iniciei um curso de Tecnologia da Informação na UFERSA no Rio Grande do Norte, mas infelizmente não 
                consigo continuar por questões além do meu controle. Agora estou buscando 
                uma oportunidade nessa área afim de não só melhorar meus conhecimentos e 
                me elevar como profissional, mas contribuir com o máximo que puder para a empresa."
            />
            <ContentSection
                title="Skills"
            />
            <ContentSection
                title="Projects"
            />
        </section>
    )
}

const ContentSection = ({ title, description }) => {
    return (
        <section>
            <h1 className={styles.titles}>{title}</h1>
            <p className={styles.description}>{description}</p>
        </section>
    )
}