import {useNavigate} from 'react-router-dom';

import styles from './ModifyProfile.module.scss';

import {useGetMyInfo} from '@/hooks/User/useUser';

import Header from '@/components/Auth/Header/Header';
import EditProfileForm from '@/components/User/EditProfileForm/EditProfileForm';

function ModifyProfile() {
  const navigate = useNavigate();
  const {data, error, isFetching} = useGetMyInfo(true);

  if (isFetching) {
    return <div></div>;
  }

  if (error) navigate('/auth/login');

  return (
    <div className={styles.container}>
      <Header content='프로필 편집' />

      <EditProfileForm data={data} />
    </div>
  );
}

export default ModifyProfile;
