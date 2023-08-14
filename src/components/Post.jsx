import styles from "./Post.module.css";
import { Comment } from "./Comment";
import Avatar from "./Avatar/Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

const comments = [1, 2];

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post muito bom"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDAteFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(e) {
    e.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(e) {
    e.target.setCustomValidity("");
    setNewCommentText(e.target.value);
  }

  function handleNewCommentInvalid(e) {
    e.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteComment(commentToDelete) {
    console.log(`Deletar  ${commentToDelete}`);

    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar hasBorder src={author.avatarUrl} />

            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          <time
            title={publishedDAteFormatted}
            dateTime={publishedAt.toISOString()}
          >
            {" "}
            {publishedDateRelativeToNow}
          </time>
        </header>
        <div className={styles.content}>
          {content.map((line) => {
            if (line.type === "paragraph") {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                <p key={line.content}>
                  <a href="#">{line.content}</a>{" "}
                </p>
              );
            }
          })}
        </div>
        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu Feedback</strong>
          <textarea
            name="comment"
            onChange={handleNewCommentChange}
            placeholder="Deixe um comentário"
            value={newCommentText}
            onInvalid={handleNewCommentInvalid}
            required
          />

          <footer>
            <button disabled={isNewCommentEmpty} type="submit">
              Publicar
            </button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            );
          })}
        </div>
      </article>
    </>
  );
}
