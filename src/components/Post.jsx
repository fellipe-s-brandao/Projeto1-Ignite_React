import format from "date-fns/format";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post({ author, content, publishAt }) {
    const [comments, setComments] = useState([
        'Post legal'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishDateFormatted = format(publishAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishDateRelativeToNow = formatDistanceToNow(publishAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([ ...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity("")

        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeleteOne = comments.filter(comment => (
            comment !== commentToDelete
        ));

        setComments(commentsWithoutDeleteOne)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }

    const isNewCommentEmpty = newCommentText.length == 0;

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
                    content.map((item) => {
                        if(item.type == 'paragraph') {
                            return <p key={item.content}>{item.content}</p>;
                        } else if(item.type == 'link') {
                            return <p key={item.content}><a href="">{item.content}</a></p>;
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment" 
                    placeholder="Deixe seu comentário"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button 
                        type="submit"
                        disabled={isNewCommentEmpty}
                    >Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        OnDeleteComment={deleteComment}
                    />
                ))}
            </div>

        </article>
    )
}