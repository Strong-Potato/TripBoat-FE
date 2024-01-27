import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import styles from './Profile.module.scss';

import Pencil from '@/assets/icons/pencil.svg?react';
import defaultImage from '@/assets/icons/profile_default.svg';

import {ProfileProps} from '@/types/user';

function Profile({data}: ProfileProps) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <section className={styles.container}>
      <div
        className={styles.image}
        style={{
          // backgroundImage: `${data?.data.profile ? `url(${data?.data.profile})` : `url(${defaultImage})`}`,
          backgroundImage: `url(${defaultImage})`,
        }}
      >
        <button
          className={styles.image__edit}
          onClick={() => {
            navigate('/user/profile/edit');
          }}
        >
          <Pencil width={16} height={16} />
        </button>
      </div>

      <div className={styles.userName}>{data?.data.nickname}</div>
    </section>
  );
}

export default Profile;
