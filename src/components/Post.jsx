import styles from "./Post.module.css"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/fellipe-s-brandao.png" />

                    <div className={styles.authorInfo}>
                        <strong>Fellipe Brandao</strong>
                        <span>Desenvolvedor</span>
                    </div>
                </div>

                <time title="11 de Maio de 2022 às 08:12" dateTime="2022-05-11 08:12:30">Publicado ha 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="">jane.design/doctorcare</a> </p>
                <p> <a href="">#novoprojeto #nlw #rocketseat</a> </p>
            </div>

        </article>
    )
}