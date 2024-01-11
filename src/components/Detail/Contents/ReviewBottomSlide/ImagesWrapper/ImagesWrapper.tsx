import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiImageAddLine } from "react-icons/ri";

import styles from "./ImagesWrapper.module.scss";

function ImagesWrapper() {
  return (
    <div className={styles.container}>
      <p className={styles.container__title}>
        사진과 함께 리뷰를 남겨보세요. (선택)
      </p>
      <p className={styles.container__subTitle}>
        최대 5장까지 업로드 가능합니다.
      </p>
      <div className={styles.container__images}>
        <div className={styles.container__images__slide}>
          <div className={styles.container__images__slide__addBox}>
            <RiImageAddLine fontSize="2.4rem" />
          </div>
          <div className={styles.container__images__slide__box}>
            <IoMdCloseCircleOutline
              fontSize="2.4rem"
              color="#979C9E"
              className={styles.container__images__slide__box__closeBtn}
            />
            <img
              src="https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg"
              alt="#"
            />
          </div>
          <div className={styles.container__images__slide__box}>
            <IoMdCloseCircleOutline
              fontSize="2.4rem"
              color="#979C9E"
              className={styles.container__images__slide__box__closeBtn}
            />
            <img
              src="https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg"
              alt="#"
            />
          </div>
          <div className={styles.container__images__slide__box}>
            <IoMdCloseCircleOutline
              fontSize="2.4rem"
              color="#979C9E"
              className={styles.container__images__slide__box__closeBtn}
            />
            <img
              src="https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg"
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagesWrapper;
