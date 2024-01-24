import {Avatar, Divider, Slide} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {IoMdClose} from 'react-icons/io';
import {Link} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import styles from './SideBar.module.scss';

import useLockBodyScroll from '@/hooks/useLockBodyScroll';
import {useGetMyInfo} from '@/hooks/User/useUser';

import {isFullMember} from '@/recoil/fullmember/fullmember';

import TravelList from './TravelList/TravelList';
import FullMembers from '../Modal/FullMembers/FullMembers';

import {SideBarProps} from '@/types/sidebar';

function SideBar({isSideOpen, sideClose}: SideBarProps) {
  const [isFull, setIsFull] = useRecoilState(isFullMember);

  // 사이드 바 스타일링
  const [isVisible, setIsVisible] = useState(isSideOpen);
  useEffect(() => {
    let timer: NodeJS.Timeout | number;
    if (isSideOpen) {
      setIsVisible(true);
    } else {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 400);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isSideOpen]);
  const containerStyle = {
    display: isVisible ? 'block' : 'none',
  };
  useLockBodyScroll(isSideOpen);

  // 프로필 데이터 get
  const {data: myInfo} = useGetMyInfo(isSideOpen);

  if (!myInfo) {
    return <div>로딩 중...</div>;
  }
  return (
    <>
      <div style={containerStyle} className={styles.page} onClick={sideClose}>
        <Slide
          in={isSideOpen}
          direction='right'
          className={styles.slide}
          style={{width: '28rem', position: 'absolute', zIndex: 10}}
          transition={{
            exit: {duration: 0.5},
            enter: {duration: 0.4},
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <button onClick={sideClose}>
                <IoMdClose className={styles.wrapper__button} />
              </button>
            </div>
            <section className={styles.profile}>
              <div>
                <Avatar w={'6.4rem'} h={'6.4rem'} name={myInfo.data.nickname} src={myInfo.data.profile} />
              </div>
              <div>
                <p className={styles.profile__nickName}>{myInfo.data.nickname}</p>
                <Link to='/user' onClick={sideClose} className={styles.profile__editProfile}>
                  {'프로필 보기 >'}
                </Link>
              </div>
            </section>
            <Divider />
            <TravelList isSideOpen={isSideOpen} />
          </div>
        </Slide>
      </div>
      {isFull && (
        <div>
          <FullMembers modal={setIsFull} />
        </div>
      )}
    </>
  );
}

export default SideBar;
