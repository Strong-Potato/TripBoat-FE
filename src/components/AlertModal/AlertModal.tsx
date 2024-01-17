import {Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay} from '@chakra-ui/react';
import {useRecoilState} from 'recoil';

import styles from './AlertModal.module.scss';

import {isModalOpenState} from '@/recoil/vote/alertModal';

import {AlertModalProps} from '@/types/vote';

/** 사용방법
 * 1. 사용할 곳에 useRecoilState(isModalOpenState) 사용
 * 
 *ex) `setIsModalOpen = useSetRecoilState(isModalOpenState);`
 
 * 
 * 2. props로 내용 지정, 줄바꿈은 개행문자 '\n'사용
 * 
 * 3. 한 페이지에서 여러 modal이 필요할 경우 :
 * props를 useState로 관리하고 `<AlertModal {...modalProps} />`와 같이 spread로 처리
 * 
 * 자세한 사용은 VoteMeatball.tsx 참고
 */
const AlertModal = ({title, subText, cancelText, actionButton, isSmallSize, onClickAction}: AlertModalProps) => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpenState);

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} variant='alertModal'>
      <ModalOverlay />
      <ModalContent style={isSmallSize ? {margin: '288px 48px auto'} : {}}>
        <ModalBody>
          <p className={styles.title}>{title}</p>
          <span className={styles.subText}>{subText}</span>
        </ModalBody>

        <ModalFooter>
          <button onClick={() => setIsModalOpen(false)} className={styles.buttons__cancel}>
            {cancelText ? cancelText : '취소'}
          </button>
          <button onClick={onClickAction} className={styles.buttons__action}>
            {actionButton}
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AlertModal;
