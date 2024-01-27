import {Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay} from '@chakra-ui/react';
import {useState} from 'react';
import {Cookies} from 'react-cookie';
import {MdArrowForwardIos} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';

import styles from './CardNull.module.scss';

import useComponentSize from '@/hooks/useComponetSize';

function CardNull() {
  const [componentRef, size] = useComponentSize();
  const responsivePadding = size.width - 360 <= 0 ? 0 : size.width - 360;
  const contentsPadding = `30px ${responsivePadding / 8 + 24}px`;
  const navigate = useNavigate();
  const cookie = new Cookies().get('isLogin');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function moveTo() {
    if (cookie) {
      navigate('/trip');
    } else {
      setIsModalOpen(true);
    }
  }

  return (
    <>
      <div className={styles.vote_box} ref={componentRef}>
        <div className={styles.contents} style={{padding: contentsPadding}}>
          <div className={styles.left}>
            <p className={styles.text}>
              친구들과 함께
              <br />
              여행 장소를 정해보세요
            </p>
            <button onClick={moveTo}>
              <span>투표 만들기</span>
              <p>
                <MdArrowForwardIos />
              </p>
            </button>
          </div>
          <img className={styles.right} src='/mapIconHome.png'></img>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} variant='alertModal'>
        <ModalOverlay />
        <ModalContent style={{margin: '288px 48px auto'}}>
          <ModalBody>
            <p className={styles.title}>로그인이 필요한 기능입니다.</p>
            <span className={styles.subText}>로그인하고 모든 서비스를 이용해 보세요!</span>
          </ModalBody>

          <ModalFooter>
            <button onClick={() => setIsModalOpen(false)} className={styles.buttons__cancel}>
              닫기
            </button>
            <button
              onClick={() => {
                navigate('/auth/login');
              }}
              className={styles.buttons__action}
            >
              로그인하기
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CardNull;
