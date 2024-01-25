import styles from './Input.module.scss';

import Camera from '@/assets/icons/camera.svg?react';

import {InputImageProps} from '@/types/auth';

function InputImage({register, imageUrl, setImageUrl}: InputImageProps) {
  return (
    <section className={styles.image}>
      <label htmlFor='image' className={styles.image__label} style={{backgroundImage: `url(${imageUrl})`}}>
        <div className={styles.image__label__camera}>
          <Camera width={16} height={16} />
        </div>
      </label>

      <input
        id='image'
        type='file'
        className={styles.image__input}
        accept='image/*'
        {...register('image', {
          onChange: (e) => {
            const file = e.target.files[0];
            const fileUrl = URL.createObjectURL(file);
            setImageUrl!(fileUrl);
          },
        })}
      />
    </section>
  );
}

export default InputImage;
