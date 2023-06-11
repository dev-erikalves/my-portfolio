import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/modal'
import styles from "./styles.module.scss"

export default function Modal() {
    return (
        <>
            <div className="modal" id="exampleModalToggle">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <i type="button" className="btn-close" data-bs-dismiss="modal"></i>
                        </div>
                        <div id={styles.modalBody} className='p-4 gap-4 d-flex'>
                            <a href="https://wa.me/+558994307093">Whatsapp</a>
                            <a href="mailto:dev.eriksantos@gmail.com" target='_blank'>Email</a>
                            <a href="https://github.com/dev-erikalves" target='_blank'>Github</a>
                            <a href="https://www.linkedin.com/in/dev-erikalves/" target='_blank'>Linkedin</a>
                            <a href="https://www.instagram.com/developerik.web/" target='_blank'>Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}