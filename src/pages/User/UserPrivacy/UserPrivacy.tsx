import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

import styles from './UserPrivacy.module.scss';

import {useGetMyInfo} from '@/hooks/User/useUser';

import Header from '@/components/Auth/Header/Header';

const userInfo = {
  nickname: '개발토끼',
  image: 'https://avatars.githubusercontent.com/u/100336573?v=4',
  provider: 'KAKAO',
  email: 'test@gmail.com',
};

function UserPrivacy() {
  const navigate = useNavigate();
  const {error, isFetching} = useGetMyInfo(true);

  if (isFetching) {
    return <div></div>;
  }

  if (error) navigate('/auth/login');

  return (
    <div className={styles.container}>
      <Header content='계정 관리' />

      <ul className={styles.userPrivacy}>
        <li className={styles.userPrivacy__email}>
          <div>트립보트 계정 이메일</div>
          <small>
            {userInfo.email}
            {/* data.email 로 수정 */}
          </small>
        </li>

        <li className={styles.userPrivacy__password}>
          <div>비밀번호</div>
          <Link to='/auth/password/modify'>재설정</Link>
        </li>

        <li
          onClick={() => {
            axios.post('/api/logout');
            navigate('/auth/login');
          }}
        >
          로그아웃
        </li>

        <li>
          <Link to='/auth/withdrawal'>회원 탈퇴</Link>
        </li>
      </ul>
    </div>
  );
}

export default UserPrivacy;
