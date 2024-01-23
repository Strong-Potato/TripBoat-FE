import {useNavigate} from 'react-router-dom';

import styles from './FindPassword.module.scss';

import {useGetMyInfo} from '@/hooks/User/useUser';

import FindPasswordForm from '@/components/Auth/FindPassword/FindPasswordForm';
import Header from '@/components/Auth/Header/Header';

function FindPassword() {
  const navigate = useNavigate();
  const {isFetching, isSuccess} = useGetMyInfo(true);

  if (isSuccess) {
    navigate('/', {replace: true});
  }

  if (isFetching) return <div></div>;

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.body}>
        <FindPasswordForm />
      </main>
    </div>
  );
}

export default FindPassword;
