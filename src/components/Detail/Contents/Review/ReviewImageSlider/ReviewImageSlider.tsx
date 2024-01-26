import {useDisclosure} from '@chakra-ui/react';
import {useState} from 'react';

import styles from './ReviewImageSlider.module.scss';

import useComponentSize from '@/hooks/useComponetSize';

import SlideModal from '@/components/Detail/Main/SlideModal/SlideModal';
import SlideButton from '@/components/SlideButton/SlideButton';

function ReviewImageSlider({images}: {images: string[]}) {
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();

  const [imageIndex, setImageIndex] = useState<number>(0);
  const {isOpen, onOpen, onClose} = useDisclosure();

  const handleIsOpen = (index: number) => {
    setImageIndex(index);
    onOpen();
  };

  return (
    <div className={styles.container}>
      {images && (
        <SlideButton
          // ref의 left값 state
          slideLocation={slideLocation}
          // left값 setState
          setSlideLocation={setSlideLocation}
          // 리스트 목록 아이템의 width
          itemWidth={76}
          // 리스트의 갭
          flexGap={8}
          // 아이템 갯수
          itemNumber={images.length}
          // 목록 전체 넓이
          slideSize={size}
          buttonSize={24}
        />
      )}
      <div
        className={styles.container__imgWrapper}
        ref={componentRef}
        style={{
          overflow: window.innerWidth < 450 ? 'scroll' : 'visible',
          left: slideLocation + 'px',
        }}
      >
        {images.map((data, i) => (
          <img src={data} onClick={() => handleIsOpen(i)} key={`reviewImages_${data}`} />
        ))}
      </div>
      <SlideModal
        isOpen={isOpen}
        onClose={onClose}
        images={images}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
      />
    </div>
  );
}

export default ReviewImageSlider;
