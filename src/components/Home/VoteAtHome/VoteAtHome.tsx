import {useEffect, useState} from 'react';
import {Cookies} from 'react-cookie';

import styles from './VoteAtHome.module.scss';

import {useGetMyInfo} from '@/hooks/User/useUser';

import {getHomeVote} from '@/api/home';

import CardHaveVote from './VoteCard/CardHaveVote/CardHaveVote';
import CardNull from './VoteCard/CardNull/CardNull';

import {Vote} from '@/types/home';

function VoteAtHome() {
  const [data, setData] = useState<Vote>();
  const cookie = new Cookies().get('isLogin');
  const userData = useGetMyInfo(true).data?.data.nickname;

  useEffect(() => {
    if (cookie) {
      getHomeVote(setData);
    }
  }, []);

  return (
    <div className={styles.container}>
      {userData && data && data.voteResponse.length > 0 ? (
        <p className={styles.title}>
          <span className={styles.titleNull}>{userData}님</span>
          <br />
          진행 중인 투표가 있어요!
        </p>
      ) : (
        <p className={styles.title}>
          <span className={styles.titleNull}>여행 계획 중이라면</span>
          <br />
          <span>트립보트에서 투표해볼까요?</span>
        </p>
      )}

      {data && data?.voteResponse.length > 0 ? <CardHaveVote data={data} /> : <CardNull />}
    </div>
  );
}

export default VoteAtHome;
