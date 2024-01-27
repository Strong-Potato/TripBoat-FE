import {useQueryClient} from '@tanstack/react-query';
import {Link, useNavigate} from 'react-router-dom';

import styles from './UserPrivacy.module.scss';

import {useGetMyInfo} from '@/hooks/User/useUser';

import Header from '@/components/Auth/Header/Header';

import {authRequest} from '@/api/auth';

function UserPrivacy() {
  const navigate = useNavigate();
  const {data, error, isFetching} = useGetMyInfo(true);
  const queryClient = useQueryClient();

  if (isFetching) {
    return <div></div>;
  }
  if (error) navigate('/auth/login');

  const clickLogout = async () => {
    authRequest.logout();

    // remove query cache for logout
    queryClient.removeQueries({queryKey: ['myInfo']});
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <Header content='계정 관리' />

      <ul className={styles.userPrivacy}>
        <li className={styles.userPrivacy__email}>
          <div>트립보트 계정 이메일</div>
          <small>{data?.data.email}</small>
        </li>

        <li className={styles.userPrivacy__password}>
          <div>비밀번호</div>
          <Link to='/auth/password/modify'>재설정</Link>
        </li>

        <li onClick={clickLogout}>로그아웃</li>

        <li>
          <Link to='/auth/withdrawal'>회원 탈퇴</Link>
        </li>
      </ul>
    </div>
  );
}

export default UserPrivacy;
