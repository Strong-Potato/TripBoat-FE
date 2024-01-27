import axios from 'axios';
import {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import styles from './EditProfileForm.module.scss';

import AuthButton from '@/components/Auth/Button/AuthButton';
import InputImage from '@/components/Auth/Input/InputImage';
import InputNickname from '@/components/Auth/Input/InputNickname';

import {s3Request} from '@/api/s3';

import {AuthForm} from '@/types/auth';
import {GetUserProp} from '@/types/sidebar';

const defaultProfile = '/profile_default.svg';

function EditProfileForm({data}: {data: GetUserProp | undefined}) {
  const {
    register,
    resetField,
    formState: {errors, dirtyFields},
    handleSubmit,
  } = useForm<AuthForm>({
    mode: 'onChange',
    defaultValues: {
      image: undefined,
      nickname: data?.data.nickname,
    },
  });
  const [imageUrl, setImageUrl] = useState<string | undefined>(data?.data.profile || defaultProfile);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<AuthForm> = async (formData) => {
    try {
      const {image, nickname} = formData;

      // 프로필 이미지 변경 있을 때
      if (dirtyFields.image) {
        const presignedUrl = await s3Request.uploadImage(image as FileList);

        console.log(presignedUrl);

        const res = await axios.put('/api/members/my-info', {
          nickname,
          profile: presignedUrl.split('?')[0],
        });

        console.log('ModifyProfileImage :', res);
        navigate('/user');
        return;
      }

      // 프로필 이미지 변경 X, 닉네임만 변경
      const res = await axios.put('/api/members/my-info', {
        nickname,
        profile: imageUrl,
      });

      console.log('OnlyNickname: ', res);
      navigate('/user');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <InputImage register={register} imageUrl={imageUrl} setImageUrl={setImageUrl} />

      <InputNickname register={register} dirty={dirtyFields.nickname} error={errors.nickname} resetField={resetField} />

      <AuthButton content='편집 완료' disabled={false} type='submit' />
    </form>
  );
}

export default EditProfileForm;
