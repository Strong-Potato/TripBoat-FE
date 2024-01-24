import styles from './Main.module.scss';

import ImageSwiper from './ImageSwiper/Swiper';
import Title from './Title/Title';

interface MainProps {
  id: number;
  contentTypeId: number;
  images: string[];
  title: string;
  category: string;
  rating: number;
  reviewsCount: number;
}

function Main({id, contentTypeId, images, title, category, rating, reviewsCount}: MainProps) {
  return (
    <div className={styles.container}>
      <ImageSwiper images={images} />
      <Title
        id={id}
        contentTypeId={contentTypeId}
        title={title}
        category={category}
        rating={rating}
        reviewsCount={reviewsCount}
      />
    </div>
  );
}

export default Main;
