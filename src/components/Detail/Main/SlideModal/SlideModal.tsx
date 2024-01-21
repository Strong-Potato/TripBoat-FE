/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/thumbs";
import styles from "./SlideModal.module.scss";

interface SlideModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  imageIndex: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
}

function SlideModal({
  isOpen,
  onClose,
  images,
  imageIndex,
  setImageIndex,
}: SlideModalProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();
  const [swiperIndex, setSwiperIndex] = useState(0);

  useEffect(() => {
    setSwiperIndex(imageIndex);
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="imageModal">
      <ModalOverlay onClick={onClose} />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton
            fontSize="2rem"
            top="16px"
            left="20px"
            color="#fff"
          />
          <span className={styles.slideIndex}>
            {swiperIndex + 1}/{images.length}
          </span>
        </ModalHeader>
        <ModalBody p="0">
          <Swiper
            initialSlide={imageIndex}
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            // onSlideChange={(swiper) => console.log(swiper.activeIndex)}
            modules={[Thumbs]}
            className={styles.mainSlideContainer}
            onActiveIndexChange={(swiperCore) => {
              setSwiperIndex(swiperCore.activeIndex);
              setImageIndex(swiperCore.activeIndex);
            }}
          >
            {images &&
              images.map((image, i) => (
                <SwiperSlide key={`mainSlide_${i}`}>
                  <img src={image} />
                </SwiperSlide>
              ))}
          </Swiper>
        </ModalBody>
        <ModalFooter>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView={"auto"}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className={styles.bottomSlide}
          >
            {images &&
              images.map((image, i) => (
                <SwiperSlide
                  key={`bottomSlide_${i}`}
                  className={
                    i === swiperIndex
                      ? styles.swiperSlideActive
                      : styles.swiperSlide
                  }
                >
                  <img src={image} />
                </SwiperSlide>
              ))}
          </Swiper>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SlideModal;
