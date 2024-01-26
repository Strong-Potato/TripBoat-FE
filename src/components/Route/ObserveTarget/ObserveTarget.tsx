import {LegacyRef} from 'react';

import styles from './ObserveTarget.module.scss';

import spinner from '@/assets/spinner.gif';

function ObserveTarget({inViewRef}: {inViewRef: LegacyRef<HTMLDivElement>}) {
  return (
    <div className={styles.container} ref={inViewRef}>
      <img src={spinner} alt='데이터 로딩 중' />
    </div>
  );
}

export default ObserveTarget;
