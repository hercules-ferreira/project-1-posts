import styles from "./Sidebar.module.css";
import aside from "../assets/sidebar.png";
import { PencilLine } from "phosphor-react";
import Avatar from "./Avatar/Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>
        <img className={styles.cover} src={aside} alt="" />
        <div className={styles.profile}>
          <div>
            <Avatar hasBorder src="https://github.com/hercules-ferreira.png" />
          </div>

          <strong>Hercules Ferreira</strong>
          <span>Web Developer</span>
          <footer>
            <a href="#">
              <PencilLine size={20} />
              Editar seu perfil
            </a>
          </footer>
        </div>
      </div>
    </aside>
  );
}
