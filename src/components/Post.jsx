import format from "date-fns/format";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post({ author, content, publishAt }) {
    // const publishDateFormatted = new Intl.DateTimeFormat(('pt-BR'), {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit',
    // }).format(publishAt) ;

    const publishDateFormatted = format(publishAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishDateRelativeToNow = formatDistanceToNow(publishAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishDateFormatted} dateTime={publishAt.toISOString()}>{publishDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {
                    content.map(item => {
                        if(item.type == 'paragraph') {
                            return <p>{item.content}</p>;
                        } else if(item.type == 'link') {
                            return <p><a href="">{item.content}</a></p>;
                        }
                    })
                }
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe seu comentário"/>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

        </article>
    )
}