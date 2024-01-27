import {useDisclosure} from '@chakra-ui/react';
import {ReactNode, useState} from 'react';
import {useSetRecoilState} from 'recoil';

import styles from './ReviewBottomSlide.module.scss';

import CloseIcon from '@/assets/close.svg?react';
import {isModalOpenState, modalContentState} from '@/recoil/vote/alertModal';

import DateBottomSlide from './DateBottomSlide/DateBottomSlide';
import DateScrollPicker from './DateScrollPicker/DateScrollPicker';
import DateWrapper from './DateWrapper/DateWrapper';
import ImagesWrapper from './ImagesWrapper/ImagesWrapper';
import InputWrapper from './InputWrapper/InputWrapper';
import StarsWrapper from './StarsWrapper/StarsWrapper';

import {ReviewBottomSlideProps} from '@/types/detail';

import {usePostReview} from '@/hooks/Detail/useReviews';
import {s3Request} from '@/api/s3';

function ReviewBottomSlide({placeId, contentTypeId, title, slideOnClose}: ReviewBottomSlideProps) {
  const [isValuedInput, setIsValuedInput] = useState<boolean>(false);
  const [isValuedCount, setIsValuedCount] = useState<boolean>(false);
  const [isValuedDate, setIsValuedDate] = useState<boolean>(false);

  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setModalContent = useSetRecoilState(modalContentState);

  const [starCount, setStarCount] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const [time, setTime] = useState<Date>(new Date());
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [imageFileList, setImageFileList] = useState<File[]>();

  const checkBeforeExit = {
    title: '잠깐!',
    subText: '지금 나가면 작성내용이 전부 삭제돼요',
    cancelText: '마저 작성할게요',
    actionButton: '나갈래요',
    isSmallSize: true,
    onClickAction: () => {
      setIsModalOpen(false);
      slideOnClose();
      document.body.style.removeProperty('overflow');
    },
  };

  const showCheckBeforeExitModal = () => {
    setIsModalOpen(true);
    setModalContent({...checkBeforeExit});
  };

  const postReview = usePostReview();

  const handlePostReview = async () => {
    const presignedUrls = await s3Request.uploadImages(imageFileList as File[]);

    if (imageFileList) {
      presignedUrls.map((url: string, i: number) => {
        presignedUrls[i] = url.split('?')[0];
      });
    }

    await postReview.mutateAsync({
      placeId,
      contentTypeId,
      title,
      rating: starCount,
      content: text,
      images: presignedUrls,
      visitedAt: `${time.getFullYear()}-${('00' + (time.getMonth() + 1).toString()).slice(-2)}-${(
        '00' + (time.getDay() + 1).toString()
      ).slice(-2)}`,
    });
    slideOnClose();
  };

  const {isOpen, onOpen, onClose} = useDisclosure();
  const [bottomSlideContent, setBottomSlideContent] = useState<ReactNode | null>(null);

  const onBottomSlideOpen = (content: ReactNode) => {
    setBottomSlideContent(content);
    onOpen();
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__top}>
        <button
          onClick={() => {
            showCheckBeforeExitModal();
          }}
          className={styles.container__top__icon}
        >
          <CloseIcon width='2rem' height='2rem' />
        </button>
        <div className={styles.container__top__title}>{title}</div>
      </div>
      <StarsWrapper starCount={starCount} setStarCount={setStarCount} setIsValuedCount={setIsValuedCount} />
      <DateWrapper
        time={time}
        isValued={isValuedDate}
        onOpen={() =>
          onBottomSlideOpen(
            <DateScrollPicker
              time={time}
              setTime={setTime}
              isValued={isValuedDate}
              setIsValued={setIsValuedDate}
              slideOnClose={onClose}
            />,
          )
        }
      />
      <InputWrapper text={text} setText={setText} setIsValuedInput={setIsValuedInput} />
      <ImagesWrapper imageUrls={imageUrls} setImageUrls={setImageUrls} setImageFileList={setImageFileList} />
      <button
        className={styles.container__addBtn}
        style={
          isValuedInput && isValuedCount && isValuedDate
            ? {backgroundColor: '#2388FF', color: '#FFFFFF'}
            : {backgroundColor: '#E3E5E5', color: '#979C9E'}
        }
        onClick={handlePostReview}
      >
        리뷰 등록
      </button>
      <DateBottomSlide isOpen={isOpen} onClose={onClose} children={bottomSlideContent} />
    </div>
  );
}

export default ReviewBottomSlide;
