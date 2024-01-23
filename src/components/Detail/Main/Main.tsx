import styles from './Main.module.scss';

import ImageSwiper from './ImageSwiper/Swiper';
import Title from './Title/Title';

interface MainProps {
  images: string[];
  title: string;
  category: string;
}

function Main({images, title, category}: MainProps) {
  return (
    <div className={styles.container}>
      <ImageSwiper images={images} />
      <Title title={title} category={category} />
    </div>
  );
}

export default Main;
