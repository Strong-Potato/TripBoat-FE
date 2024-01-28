import {useDisclosure} from '@chakra-ui/react';
import {ReactNode, useState} from 'react';
import {useSetRecoilState} from 'recoil';

import styles from './EditReviewBottomSlide.module.scss';

import CloseIcon from '@/assets/close.svg?react';
import {isModalOpenState, modalContentState} from '@/recoil/vote/alertModal';

import DateBottomSlide from './DateBottomSlide/DateBottomSlide';
import DateScrollPicker from './DateScrollPicker/DateScrollPicker';
import DateWrapper from './DateWrapper/DateWrapper';
import ImagesWrapper from './ImagesWrapper/ImagesWrapper';
import InputWrapper from './InputWrapper/InputWrapper';
import StarsWrapper from './StarsWrapper/StarsWrapper';

import {EditReviewBottomSlideProps} from '@/types/detail';

import {s3Request} from '@/api/s3';
import {usePatchMyReview} from '@/hooks/User/useMyReview';
import CustomToast from '@/components/CustomToast/CustomToast';

function EditReviewBottomSlide({
  reviewId,
  slideOnClose,
  starCountProps,
  textProps,
  timeProps,
  imageUrlsProps,
}: EditReviewBottomSlideProps) {
  const [isValuedInput, setIsValuedInput] = useState<boolean>(true);
  const [isValuedCount, setIsValuedCount] = useState<boolean>(true);
  const [isValuedDate, setIsValuedDate] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setModalContent = useSetRecoilState(modalContentState);

  const toast = CustomToast();

  const [starCount, setStarCount] = useState<number>(starCountProps);
  const [text, setText] = useState<string>(textProps);
  const [time, setTime] = useState<Date>(timeProps);
  const [imageUrls, setImageUrls] = useState<string[]>(imageUrlsProps);
  const [imageFileList, setImageFileList] = useState<File[]>();

  const checkBeforeExit = {
    title: '잠깐!',
    subText: '지금 나가면 수정내용이 전부 삭제돼요',
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

  const patchMyReview = usePatchMyReview();

  const handlePatchMyReview = async () => {
    setIsDisabled(true);

    const presignedUrls = await s3Request.uploadImages(imageFileList as File[]);

    if (imageFileList) {
      presignedUrls.map((url: string, i: number) => {
        presignedUrls[i] = url.split('?')[0];
      });
    }

    await patchMyReview.mutateAsync({
      reviewId,
      rating: starCount,
      content: text,
      images: imageFileList ? presignedUrls : imageUrls,
      visitedAt: `${time.getFullYear()}-${('00' + (time.getMonth() + 1).toString()).slice(-2)}-01`,
    });
    toast('리뷰가 수정되었습니다.');
    slideOnClose();
    document.body.style.removeProperty('overflow');
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
          <CloseIcon width='2rem' height='2rem' onClick={slideOnClose} />
        </button>
        <div className={styles.container__top__title}>리뷰 수정</div>
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
            ? {
                backgroundColor: '#2388FF',
                color: '#FFFFFF',
                width: window.innerWidth > 450 ? '40.2rem' : window.innerWidth - 48 + 'px',
              }
            : {
                backgroundColor: '#E3E5E5',
                color: '#979C9E',
                width: window.innerWidth > 450 ? '40.2rem' : window.innerWidth - 48 + 'px',
              }
        }
        onClick={handlePatchMyReview}
        disabled={isDisabled}
      >
        리뷰 등록
      </button>
      <DateBottomSlide isOpen={isOpen} onClose={onClose} children={bottomSlideContent} />
    </div>
  );
}

export default EditReviewBottomSlide;
