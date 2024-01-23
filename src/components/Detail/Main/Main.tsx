import styles from './Main.module.scss';

import ImageSwiper from './ImageSwiper/Swiper';
import Title from './Title/Title';

interface MainProps {
  id: number;
  images: string[];
  title: string;
  category: string;
}

function Main({id, images, title, category}: MainProps) {
  return (
    <div className={styles.container}>
      <ImageSwiper images={images} />
      <Title id={id} title={title} category={category} />
    </div>
  );
}

export default Main;
