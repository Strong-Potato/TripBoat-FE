import {useNavigate} from 'react-router-dom';

import styles from './SelectHeader.module.scss';

import BackIcon from '@/assets/back.svg?react';

import {SelectHeaderProps} from '@/types/selectHeader';

function SelectHeader({title}: SelectHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className={styles.titleHeader}>
      <div className={styles.titleNavigation}>
        <button onClick={() => navigate(-1)}>
          <BackIcon />
        </button>
      </div>
      <h1 className={styles.selectTitle}>{title}</h1>
    </header>
  );
}

export default SelectHeader;
