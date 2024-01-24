import {Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay} from '@chakra-ui/react';
import {useRecoilState} from 'recoil';

import styles from './ExpireAlert.module.scss';

import {isModalOpenState} from '@/recoil/vote/alertModal';

import {ExpireAlertProps} from '@/types/auth';

function ExpireAlert({expire, onClickAction}: ExpireAlertProps) {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} variant='alertModal'>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <p className={styles.title}>과도한 인증 요청이 발생했습니다.</p>
          <span className={styles.subText}>{Math.floor(expire / 60)}분 이후에 다시 시도해주세요.</span>
        </ModalBody>

        <div className={styles.bar}></div>

        <ModalFooter>
          <button onClick={onClickAction} className={styles.button}>
            확인
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ExpireAlert;
