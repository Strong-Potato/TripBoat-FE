import {Avatar, Checkbox} from '@chakra-ui/react';
import {useSetRecoilState} from 'recoil';

import styles from './CandidateList.module.scss';

import useGetSelectedSet from '@/hooks/useGetSelectedSet';

import {selectedCandidatesState} from '@/recoil/vote/candidateList';

import CandidateCard from '../CandidateCard/CandidateCard';
import VoteContentEmpty from '../VoteContentEmpty/VoteContentEmpty';

import {CandidateListProps} from '@/types/vote';

const CandidateList = ({candidates, onBottomSlideOpen, showResults, isCandidateSelecting}: CandidateListProps) => {
  const setSelectedCandidates = useSetRecoilState(selectedCandidatesState);
  const {addItemInNewSet} = useGetSelectedSet(setSelectedCandidates);

  return (
    <div className={styles.container}>
      {candidates ? (
        candidates.map((candidate, i) => (
          <div key={i} className={styles.candidateContainer}>
            {isCandidateSelecting && (
              <Checkbox
                mr='12px'
                mb='36px'
                fontSize='2rem'
                id={`${i}checkbox`}
                variant='candidateCheckbox'
                onChange={() => addItemInNewSet(candidate.id)}
              />
            )}
            <div className={styles.candidateBox}>
              <label htmlFor={`${i}checkbox`}>
                <CandidateCard onBottomSlideOpen={onBottomSlideOpen} candidate={candidate} index={i + 1} />
              </label>
              <div className={styles.candidateBox__memo}>
                <Avatar boxSize='24px' />
                <div className={styles.candidateBox__memo__text}>{candidate.tagline}</div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <VoteContentEmpty />
      )}
    </div>
  );
};

export default CandidateList;
