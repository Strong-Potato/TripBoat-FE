import styles from "./Content.module.scss";

import { ContentProps } from "@/types/alarm";

function Content({ contents }: ContentProps) {
  return (
    <>
      {contents.map((content, index) => (
        <button key={index} className={styles.container}>
          <img src={content.url} className={styles.container__thumbnail} />
          <div className={styles.container__wrapper}>
            <p className={styles.container__wrapper__title}>{content.title}</p>
            <p className={styles.container__wrapper__time}>{content.time}</p>
          </div>
        </button>
      ))}
    </>
  );
}

export default Content;
