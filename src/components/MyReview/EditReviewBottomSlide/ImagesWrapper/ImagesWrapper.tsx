import {IoMdCloseCircleOutline} from 'react-icons/io';
import {RiImageAddLine} from 'react-icons/ri';

import styles from './ImagesWrapper.module.scss';
import CustomToast from '@/components/CustomToast/CustomToast';

interface imageWrapperProps {
  imageUrls: string[];
  setImageUrls: React.Dispatch<React.SetStateAction<string[]>>;
  setImageFileList: React.Dispatch<React.SetStateAction<File[] | undefined>>;
}

function ImagesWrapper({imageUrls, setImageUrls, setImageFileList}: imageWrapperProps) {
  const toast = CustomToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const arr: File[] = [];
      const urls: string[] = [];

      for (let i = 0; i < files.length && i < 5; i++) {
        arr.push(files[i]);

        const file = files[i];
        const fileUrl = URL.createObjectURL(file);
        urls.push(fileUrl);
      }

      setImageUrls(urls);
      setImageFileList(arr);

      if (files.length > 5) {
        toast('파일의 개수가 5개를 초과하였습니다.');
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImageUrls = [...imageUrls];

    updatedImageUrls.splice(index, 1);

    setImageUrls(updatedImageUrls);
  };

  console.log(imageUrls);

  return (
    <div className={styles.container}>
      <p className={styles.container__title}>사진과 함께 리뷰를 남겨보세요. (선택)</p>
      <p className={styles.container__subTitle}>최대 5장까지 업로드 가능합니다.</p>
      <div className={styles.container__images}>
        <div className={styles.container__images__slide}>
          <label htmlFor='image'>
            <div className={styles.container__images__slide__addBox}>
              <RiImageAddLine fontSize='2.4rem' />
            </div>
          </label>

          {imageUrls &&
            imageUrls.map((url: string, i: number) => (
              <div className={styles.container__images__slide__box} key={`imageURL_${url}`}>
                <IoMdCloseCircleOutline
                  fontSize='2.4rem'
                  color='#979C9E'
                  className={styles.container__images__slide__box__closeBtn}
                  onClick={() => handleRemoveImage(i)}
                />
                <img src={url} alt='#' />
              </div>
            ))}
        </div>
      </div>
      <input
        id='image'
        type='file'
        className={styles.container__imageInput}
        accept='image/*'
        onChange={handleImageChange}
        multiple
      />
    </div>
  );
}

export default ImagesWrapper;
