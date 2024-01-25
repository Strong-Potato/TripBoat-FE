import {Checkbox} from '@chakra-ui/react';
import {useCallback, useEffect, useState} from 'react';

import styles from './MemoItem.module.scss';

import {useDebounce} from '@/hooks/useDebounce';
import useGetSelectedArray from '@/hooks/useGetSelectedArray';

import {selectedTaglineState} from '@/recoil/vote/voteMemo';

import {MemoItemProps} from '@/types/vote';

const MemoItem = ({place, existingTagline}: MemoItemProps) => {
  const [text, setText] = useState('');
  // const [selectedTagline, setSelectedTagline] = useRecoilState(selectedTaglineState);
  const {toggleItemInNewArray, setMemoArray} = useGetSelectedArray(selectedTaglineState);
  const debouncedText = useDebounce(text, 500);
  // const selectedPlaces = useRecoilValue(selectedPlaceState);

  useEffect(() => {
    if (existingTagline) {
      setText(existingTagline.tagline);
    }
  }, []);

  const handleCheckboxChange = () => {
    toggleItemInNewArray({
      id: place.id,
      tagline: debouncedText,
    });
  };

  const handleDebouncedTextChange = useCallback(() => {
    setMemoArray({
      id: place.id,
      tagline: debouncedText,
    });
  }, [debouncedText, place.id, setMemoArray]);

  useEffect(() => {
    handleDebouncedTextChange();
  }, [debouncedText]);

  return (
    <div className={styles.container}>
      <Checkbox
        defaultChecked
        id={`${place.id}taglineCheck`}
        variant='candidateCheckbox'
        m='0'
        alignItems='flex-start'
        onChange={handleCheckboxChange}
      />
      <div className={styles.container__rightSide}>
        <label htmlFor={`${place.id}taglineCheck`} className={styles.candidateBox}>
          <div className={styles.candidateBox__image}>
            <img src={place.thumbnail} alt={place.title} />
          </div>
          <div className={styles.candidateBox__text}>
            <p className={styles.candidateBox__text__name}>{place.title}</p>
            <span className={styles.candidateBox__text__category}>
              {place.contentTypeId}
              {'ꞏ'}
              {place.location.areaCode}
            </span>
          </div>
        </label>
        <div className={styles.textareaBox}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={styles.textarea}
            maxLength={30}
            placeholder='장소에 대한 메모를 남겨주세요. (30자 이하)'
          />
          <p className={styles.textarea__counts}>{text.length}/30자</p>
        </div>
      </div>
    </div>
  );
};

export default MemoItem;
