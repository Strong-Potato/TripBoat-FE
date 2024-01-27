import {Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay} from '@chakra-ui/react';
import {useState} from 'react';
import {Cookies} from 'react-cookie';
import {MdArrowForwardIos} from 'react-icons/md';
import {useNavigate} from 'react-router-dom';

import styles from './NullTrip.module.scss';

import tripImg from '@/assets/homeIcons/home/tripHome.svg';

function NullTrip() {
  const navigate = useNavigate();
  const cookie = new Cookies().get('isLogin');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const dataNull = {
    tripTitle: '아직 여행 일정이 없어요',
    tripDay: '새로운 여행 일정을 만들어보세요!',
  };

  function moveTo() {
    if (cookie) {
      navigate('/trip');
    } else {
      setIsModalOpen(true);
    }
  }

  return (
    <>
      <div className={styles.container} onClick={moveTo}>
        <div className={styles.img_box}>
          <img className={styles.trip_img} src={tripImg} alt={'트립보트 사진'} />
        </div>
        <p className={styles.text_box}>
          <span className={styles.trip_title}>{dataNull.tripTitle}</span>
          <span className={styles.trip_day}>{dataNull.tripDay}</span>
        </p>
        <div className={styles.arrow}>
          <MdArrowForwardIos />
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

export default NullTrip;
