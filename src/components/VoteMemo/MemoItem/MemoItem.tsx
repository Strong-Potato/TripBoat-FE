import {Checkbox} from '@chakra-ui/react';
import {useState} from 'react';
import {useSetRecoilState} from 'recoil';

import styles from './MemoItem.module.scss';

import useGetSelectedSet from '@/hooks/useGetSelectedSet';

import {selectedCandidatesState} from '@/recoil/vote/candidateList';

import {CandidatesInfo} from '@/types/vote';

const MemoItem = ({candidate}: {candidate: CandidatesInfo}) => {
  const [text, setText] = useState(0);
  const setSelectedCandidates = useSetRecoilState(selectedCandidatesState);
  const {addItemInNewSet} = useGetSelectedSet(setSelectedCandidates);

  const placeInfo = candidate.placeInfo;

  return (
    <div className={styles.container}>
      <Checkbox
        defaultChecked
        variant='candidateCheckbox'
        m='0'
        alignItems='flex-start'
        value={candidate.id}
        onChange={() => addItemInNewSet(candidate.id)}
      />
      <div className={styles.container__rightSide}>
        <div className={styles.candidateBox}>
          <div className={styles.candidateBox__image}>
            <img src={placeInfo.placeImageURL} alt={placeInfo.placeName} />
          </div>
          <div className={styles.candidateBox__text}>
            <p className={styles.candidateBox__text__name}>{placeInfo.placeName}</p>
            <span className={styles.candidateBox__text__category}>
              {placeInfo.category}
              {'ꞏ'}
              {placeInfo.location}
            </span>
          </div>
        </div>
        <div className={styles.textareaBox}>
          <textarea
            onChange={(e) => setText(e.target.value.length)}
            className={styles.textarea}
            maxLength={30}
            placeholder='장소에 대한 메모를 남겨주세요. (30자 이하)'
          />
          <p className={styles.textarea__counts}>{text}/30자</p>
        </div>
      </div>
    </div>
  );
};

export default MemoItem;
