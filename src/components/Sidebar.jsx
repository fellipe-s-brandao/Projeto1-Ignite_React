
import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1634845566280-37b72e363dad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
                className={styles.cover}
            />

            <div className={styles.profile}>
                <img 
                    className={styles.avatar}
                    src="https://avatars.githubusercontent.com/u/84095737?v=4" alt="" />
                <strong>Fellipe Brandao</strong>
                <span>Back-end Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar Seu Perfil
                </a>
            </footer>
        </aside>
    )
}
