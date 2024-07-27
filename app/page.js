import Image from "next/image";
import styles from "./page.module.css";
import GradebookApp from "./gradebookApp.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div>
          <h2>
            Gradebook App <span>-&gt;</span>
          </h2>
          <div className={styles.description}>
        Have your students pass the exam?
      </div>
      </div>
      </div>
      <GradebookApp />
    </main>
  );
}