import {useNavigate} from 'react-router-dom';
import {useSetRecoilState} from 'recoil';

import styles from './User.module.scss';

import {useGetMyInfo} from '@/hooks/User/useUser';

import MypageList from '@/components/User/MypageList/MypageList';
import Mywork from '@/components/User/Mywork/Mywork';
import Profile from '@/components/User/Profile/Profile';

import {Subcribe} from '@/recoil/user/user';

function User() {
  const navigate = useNavigate();
  const setSubscribe = useSetRecoilState(Subcribe);
  const {data, isFetching} = useGetMyInfo(true);
  if (data) {
    setSubscribe(data.data.isSubscribe);
  }
  if (isFetching) {
    return <div></div>;
  }

  if (data?.status === 403 || data?.status === 401) {
    navigate('/auth/login');
  }

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
