import {useNavigate} from 'react-router-dom';

import styles from './User.module.scss';

import {useGetMyInfo} from '@/hooks/User/useUser';

import MypageList from '@/components/User/MypageList/MypageList';
import Mywork from '@/components/User/Mywork/Mywork';
import Profile from '@/components/User/Profile/Profile';

function User() {
  const navigate = useNavigate();
  const {data, error, isFetching} = useGetMyInfo(true);

  if (isFetching) {
    return <div></div>;
  }

  if (error) navigate('/auth/login');

  return (
    <div className={styles.container}>
      <h1>마이페이지</h1>

      <Profile data={data} />

      <Mywork />

      <MypageList />
    </div>
  );
}

export default User;
