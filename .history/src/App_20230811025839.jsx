import "./global.css";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
// import AvatarComment from "../../assets/logo-avatar.png";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/hercules-ferreira.png",
      name: "Hercules Ferreira",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋 " },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-08-01 20:10:25"),
  },
  {
    id: 2,
    author: {
      // avatarUrl: <img src={AvatarComment} alt="avatarComment"/>,
      avatarUrl: "https://github.com/hercules-ferreira.png",

      name: "Hellen Ferreira",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋 " },

      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-08-03 20:10:25"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
