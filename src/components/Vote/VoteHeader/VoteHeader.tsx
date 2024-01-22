import {AiOutlinePlus} from 'react-icons/ai';
import {BsThreeDots} from 'react-icons/bs';
import {MdOutlineArrowBackIosNew} from 'react-icons/md';
import {RiMap2Line} from 'react-icons/ri';
import {useLocation, useNavigate} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import styles from './VoteHeader.module.scss';

import {isCandidateSelectingState} from '@/recoil/vote/alertModal';

import {VoteHeaderProps} from '@/types/vote';

const VoteHeader = ({onBottomSlideOpen, title, isZeroCandidates}: VoteHeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split('/')[3];
  const isCandidateSelecting = useRecoilValue(isCandidateSelectingState);

  const setRightIcons = (path: string) => {
    switch (path) {
      case 'votememo':
        return (
          <button onClick={onBottomSlideOpen}>
            <AiOutlinePlus />
          </button>
        );
      case 'map':
        return null;
      default:
        return (
          <>
            <button
              onClick={() => navigate(`${location.pathname}/map`)}
              disabled={isZeroCandidates || isCandidateSelecting}
            >
              <RiMap2Line />
            </button>
            <button onClick={onBottomSlideOpen} disabled={isCandidateSelecting}>
              <BsThreeDots />
            </button>
          </>
        );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <button onClick={() => navigate(-1)} className={styles.leftSide__backIcon}>
          <MdOutlineArrowBackIosNew />
        </button>
        <p className={styles.leftSide__title}>{title}</p>
      </div>
      <div className={styles.rightIconBox}>{setRightIcons(path)}</div>
    </div>
  );
};

export default VoteHeader;
