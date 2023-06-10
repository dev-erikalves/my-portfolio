import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import styles from "./styles.module.scss"

export default function Modal(){
    return (
        <>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" id={styles.modalContent}>
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" id={styles.modalBody}>
                                <a href="https://wa.me/+558994307093" target='_blank'>Whatsapp</a>
                                <a href="mailto:dev.eriksantos@gmail.com"  target='_blank'>Email</a>
                                <a href="https://github.com/dev-erikalves"  target='_blank'>Github</a>
                                <a href="https://www.linkedin.com/in/dev-erikalves/"  target='_blank'>Linkedin</a>
                                <a href="https://www.instagram.com/developerik.web/"  target='_blank'>Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}