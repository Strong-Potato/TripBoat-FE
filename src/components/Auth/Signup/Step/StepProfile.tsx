import {useState} from 'react';

import styles from './Step.module.scss';

import AuthButton from '@/components/Auth/Button/AuthButton';

import InputImage from '../../Input/InputImage';
import InputNickname from '../../Input/InputNickname';

import {StepProfileProps} from '@/types/auth';

import defaultProfile from '/profile_default.svg';

function StepProfile({register, resetField, dirty, error}: StepProfileProps) {
  const [imageUrl, setImageUrl] = useState<string | undefined>(defaultProfile);

  return (
    <section className={styles.container}>
      <h2>프로필을 설정해주세요</h2>

      <InputImage register={register} imageUrl={imageUrl} setImageUrl={setImageUrl} />

      <InputNickname register={register} dirty={dirty} error={error} resetField={resetField} />

      <AuthButton content='시작하기' disabled={!dirty || error ? true : false} type='submit' />
    </section>
  );
}

export default StepProfile;
