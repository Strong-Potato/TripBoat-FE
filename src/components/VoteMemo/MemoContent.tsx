import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';

import styles from './MemoContent.module.scss';

import {selectedCandidatesState} from '@/recoil/vote/candidateList';

import MemoItem from './MemoItem/MemoItem';

import {VoteInfo} from '@/types/vote';

const MemoContent = ({data}: {data: VoteInfo}) => {
  const setSelectedCandidates = useSetRecoilState(selectedCandidatesState);
  const candidates = data.candidates;

  const CheckAllCandidates = () => {
    const newCandidateIds = candidates.map((candidate) => candidate.id);
    setSelectedCandidates(new Set(newCandidateIds));
  };

  useEffect(() => {
    CheckAllCandidates();
  }, []);

  return (
    <div className={styles.container}>
      {candidates?.map((candidate) => <MemoItem candidate={candidate} key={candidate.id} />)}
    </div>
  );
};

export default MemoContent;
