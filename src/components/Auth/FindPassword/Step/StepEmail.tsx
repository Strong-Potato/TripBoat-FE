import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSetRecoilState} from 'recoil';

import styles from './Step.module.scss';

import CustomToast from '@/components/CustomToast/CustomToast';

import {authRequest} from '@/api/auth';
import {isModalOpenState} from '@/recoil/vote/alertModal';

import ExpireAlert from '../../Alert/ExpireAlert';
import AuthButton from '../../Button/AuthButton';
import InputEmail from '../../Input/InputEmail';

import {StepEmailProps} from '@/types/auth';

function StepEmail({setFindPasswordStep, register, watchFields: {email}, dirty, error, resetField}: StepEmailProps) {
  const navigate = useNavigate();
  const showToast = CustomToast();
  const [expire, setExpire] = useState(0);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);

  const onClickEmail = async () => {
    try {
      const res = await authRequest.lostPassword_sendEmail(email);
      console.log(res);

      if (res.data.responseCode === 404) {
        showToast('해당 사용자가 존재하지 않습니다.');
        return;
      }

      if (res.data.responseCode === 202) {
        setExpire(await res.data.data.expire);
        setIsModalOpen(true);
        return;
      }

      setFindPasswordStep!('emailSert');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.container}>
      <h2>비밀번호를 잊으셨나요?</h2>

      <div className={styles.desc}>
        트립보트에 가입했던 이메일을 입력해주세요.
        <br />
        비밀번호 재설정을 위한 인증 코드를 보내드릴게요.
      </div>

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
