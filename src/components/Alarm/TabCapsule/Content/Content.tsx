import styles from './Content.module.scss';

import formatTimeAgo from '@/utils/formatTimeAgo';

import {ContentProps} from '@/types/alarm';

import DefaultProfile from '/profile_default.svg?react';

function Content({contents}: ContentProps) {
  if (!contents[0]) {
    return <div></div>;
  }
  return (
    <div className={styles.page}>
      {contents.map((content, index) => (
        <div key={index} className={styles.container}>
          {content.url ? (
            <img src={content.url} className={styles.container__thumbnail} />
          ) : (
            <DefaultProfile className={styles.container__thumbnail} />
          )}
          <div className={styles.container__wrapper}>
            <p className={styles.container__wrapper__title}>{content.title}</p>
            <p className={styles.container__wrapper__time}>{formatTimeAgo(new Date(content.time))}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
