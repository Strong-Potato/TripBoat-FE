import {useEffect, useState} from 'react';

import styles from './VoteAtHome.module.scss';

import {getHomeVote} from '@/api/home';

import CardHaveVote from './VoteCard/CardHaveVote/CardHaveVote';
import CardNull from './VoteCard/CardNull/CardNull';

import {Vote} from '@/types/home';

function VoteAtHome() {
  const [data, setData] = useState<Vote>();

  useEffect(() => {
    getHomeVote(setData);
  }, []);

  return (
    <div className={styles.container}>
      {data && data.voteResponse.length > 0 ? (
        <p className={styles.title}>
          <span className={styles.titleNull}>길동님</span>
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
