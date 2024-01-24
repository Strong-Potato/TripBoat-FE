import axios from 'axios';
import {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import styles from './FindPasswordForm.module.scss';

import CustomToast from '@/components/CustomToast/CustomToast';

import StepEmail from './Step/StepEmail';
import StepEmailSert from './Step/StepEmailSert';
import StepPassword from './Step/StepPassword';

import {AuthForm} from '@/types/auth';

function FindPasswordForm() {
  const {
    register,
    resetField,
    handleSubmit,
    watch,
    formState: {errors, dirtyFields},
  } = useForm<AuthForm>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      emailSert: '',
      password: '',
      passwordConfirm: '',
    },
  });
  const watchFields = watch();

  const [findPasswordStep, setFindPasswordStep] = useState<string>('email');
  const [code, setCode] = useState<string>('');

  const navigate = useNavigate();
  const showToast = CustomToast();

  const onSubmit: SubmitHandler<AuthForm> = async (data) => {
    if (Object.keys(dirtyFields).length < 4) return;
    console.log(data);

    try {
      const {email, password} = data;
      const res = await axios.post('/api/auth/modify/lost-password', {
        email,
        newPassword: password,
        token: code,
      });
      console.log(res);

      if (res.data.responseCode === 204) {
        showToast('만료된 토큰입니다. 다시 인증해주세요.');
        setFindPasswordStep('email');
        navigate('/auth/login');
        return;
      }

      if (res.data.responseCode === 205) {
        showToast('잘못된 토큰입니다. 다시 인증해주세요.');
        setFindPasswordStep('email');
        navigate('/auth/login');
        return;
      }

      if (res.data.responseCode === 207) {
        showToast('새로운 비밀번호를 입력해주세요.');
        return;
      }

      showToast('비밀번호가 변경되었습니다.');
      setFindPasswordStep('email');
      navigate('/auth/login', {replace: true});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      {findPasswordStep === 'email' && (
        <StepEmail
          setFindPasswordStep={setFindPasswordStep}
          register={register}
          watchFields={watchFields}
          dirty={dirtyFields.email}
          error={errors.email}
          resetField={resetField}
        />
      )}

      {findPasswordStep === 'emailSert' && (
        <StepEmailSert
          setFindPasswordStep={setFindPasswordStep}
          register={register}
          watchFields={watchFields}
          dirty={dirtyFields.emailSert}
          error={errors.emailSert}
          setCode={setCode}
        />
      )}

      {findPasswordStep === 'password' && (
        <StepPassword
          register={register}
          resetField={resetField}
          watchFields={watchFields}
          dirtyFields={dirtyFields}
          errors={errors}
        />
      )}
    </form>
  );
}

export default FindPasswordForm;
