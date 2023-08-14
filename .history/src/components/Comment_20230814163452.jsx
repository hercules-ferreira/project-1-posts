import { useState } from "react";
import Avatar from "./Avatar/Avatar";
import Comment from "../assets/comment.jpg";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <>
      <div className={styles.comment}>

<img src="" />
        <Avatar src="https://github.com/hercules-ferreira.png" />



        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Hercules Ferreira</strong>
                <time
                  title="11 de Maio às 08:35h"
                  dateTime="2023-05-11 08:35:40"
                >
                  {" "}
                  Cerca de 1h atrás
                </time>
              </div>

              <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24} />
              </button>
            </header>
            <p>{content} 👏👏</p>
          </div>
          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
