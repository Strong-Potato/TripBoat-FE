import styles from './Content.module.scss';

import DefaultProfile from '@/assets/profile_default.svg?react';
import formatTimeAgo from '@/utils/formatTimeAgo';

import {ContentProps} from '@/types/alarm';

function Content({contents}: ContentProps) {
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
