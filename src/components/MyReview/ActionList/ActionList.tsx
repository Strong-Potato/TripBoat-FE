import styles from './ActionList.module.scss';

import EditIcon from '@/assets/icons/pencil_with_line.svg?react';
import TrashIcon from '@/assets/icons/trash_icon.svg?react';
import CustomToast from '@/components/CustomToast/CustomToast';
import {useDeleteMyReview} from '@/hooks/User/useMyReview';

import {ActionListProps} from '@/types/myReview';
import EditReviewBottomSlide from '../EditReviewBottomSlide/EditReviewBottomSlide';

function ActionList({
  onBottomSlideOpen,
  setBottomSlideContent,
  reviewId,
  onBottomSlideClose,
  starCountProps,
  textProps,
  timeProps,
  imageUrlsProps,
}: ActionListProps) {
  const deleteReview = useDeleteMyReview();

  const toast = CustomToast();

  const handleDelete = async (id: number) => {
    console.log(id);
    await deleteReview.mutateAsync(id);
    toast('리뷰가 삭제되었습니다.');
    onBottomSlideClose();
  };

  return (
    <ul className={styles.container}>
      <li
        onClick={() => {
          setBottomSlideContent(
            <EditReviewBottomSlide
              reviewId={reviewId}
              slideOnClose={onBottomSlideClose}
              starCountProps={starCountProps}
              textProps={textProps}
              timeProps={timeProps}
              imageUrlsProps={imageUrlsProps}
            />,
          );
          onBottomSlideClose();
          onBottomSlideOpen();
          console.log(reviewId);
        }}
      >
        <div className={styles.editIcon}>
          <EditIcon />
        </div>
        <p>수정하기</p>
      </li>
      <li onClick={() => handleDelete(Number(reviewId))}>
        <div className={styles.editIcon}>
          <TrashIcon />
        </div>
        <p>삭제하기</p>
      </li>
    </ul>
  );
}

export default ActionList;
