import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSetRecoilState} from 'recoil';

import styles from './Step.module.scss';

import {useSignupSendEmail} from '@/hooks/Auth/auth';

import AuthButton from '@/components/Auth/Button/AuthButton';
import InputEmail from '@/components/Auth/Input/InputEmail';
import CustomToast from '@/components/CustomToast/CustomToast';

import {isModalOpenState} from '@/recoil/vote/alertModal';

import ExpireAlert from '../../Alert/ExpireAlert';

import {StepEmailProps} from '@/types/auth';

function StepEmail({setSignupStep, register, watchFields: {email}, dirty, error, resetField}: StepEmailProps) {
  const navigate = useNavigate();
  const showToast = CustomToast();
  const [expire, setExpire] = useState(0);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const sendEmail = useSignupSendEmail();

  const onClickEmail = async () => {
    try {
      const res = await sendEmail.mutateAsync({email});

      if (res.data.responseCode === 202) {
        setExpire(await res.data.data.expire);
        setIsModalOpen(true);
        return;
      }

      if (res.data.responseCode === 101) {
        showToast('이미 가입된 이메일입니다.');
        return;
      }

      setSignupStep!('emailSert');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.container}>
      <h2>
        로그인에 사용할
        <br />
        이메일을 입력해주세요
      </h2>

      <InputEmail register={register} dirty={dirty} error={error} resetField={resetField} />

      <AuthButton
        content='이메일 인증 요청'
        disabled={!dirty || error ? true : false}
        type='button'
        onClick={onClickEmail}
      />

      <ExpireAlert
        expire={expire}
        onClickAction={() => {
          setIsModalOpen(false);
          navigate('/auth/login');
        }}
      />
    </section>
  );
}

export default StepEmail;
