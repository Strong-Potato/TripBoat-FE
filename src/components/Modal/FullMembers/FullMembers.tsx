import {useRef} from 'react';

import styles from './FullMembers.module.scss';

import useOnClickOutside from '@/hooks/useOnClickOutside';

interface FullMembersprop {
  modal: React.Dispatch<React.SetStateAction<boolean>>;
}

function FullMembers({modal}: FullMembersprop) {
  const closeModal = () => {
    modal(false);
  };

  const fullMemberRef = useRef(null);
  useOnClickOutside(fullMemberRef, closeModal);
  return (
    <>
      <div className={styles.background}>
        <div className={styles.containerDismiss} ref={fullMemberRef}>
          <div className={styles.wrapperText}>
            <p className={styles.wrapperText__title}>여행 스페이스가 꽉 찼어요.</p>
            <p className={styles.wrapperText__body}>
              여행 스페이스는 최대 15개까지
              <br />
              생성할 수 있어요.
            </p>
          </div>
          <div className={styles.wrapperInvalidButton}>
            <button
              className={styles.wrapperInvalidButton__confirm}
              onClick={(e) => {
                e.stopPropagation();
                modal(false);
              }}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullMembers;
