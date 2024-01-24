import axios from 'axios';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import styles from './EditProfileForm.module.scss';

import AuthButton from '@/components/Auth/Button/AuthButton';
import InputImage from '@/components/Auth/Input/InputImage';
import InputNickname from '@/components/Auth/Input/InputNickname';

import {AuthForm} from '@/types/auth';
import {GetUserProp} from '@/types/sidebar';

function EditProfileForm({data}: {data: GetUserProp | undefined}) {
  const {
    register,
    resetField,
    formState: {errors, dirtyFields},
    handleSubmit,
    watch,
  } = useForm<AuthForm>({
    mode: 'onChange',
  });
  const watchFields = watch();
  const [imageBlob, setImageBlob] = useState<string | undefined>(data?.data.profile);

  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const {image, nickname} = watchFields;

      if (dirtyFields.image) {
        const s3Res = await axios.post('/api/s3/presigned', [image![0].name]);
        const s3Url = await s3Res.data.data.elements[0];
        const uploadRes = await axios.put(s3Url, image![0], {
          headers: {
            'Content-Type': 'image/*',
          },
        });
        console.log('s3 upload state: ', uploadRes, 's3 Url : ', s3Url);

        const res = await axios.put('/api/members/my-info', {
          nickname,
          profile: s3Url,
        });

        console.log('api response : ', res);
        return;
      }

      const res = await axios.put('/api/members/my-info', {
        nickname,
        profile: imageBlob,
      });

      console.log('OnlyNickname', res);
      navigate('/user');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <InputImage register={register} imageBlob={imageBlob} setImageBlob={setImageBlob} />

      <InputNickname register={register} dirty={dirtyFields.nickname} error={errors.nickname} resetField={resetField} />

      <AuthButton content='편집 완료' disabled={false} type='submit' />
    </form>
  );
}

export default EditProfileForm;
