import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSetRecoilState} from 'recoil';

import styles from './Input.module.scss';

import {useFindPasswordSendEmail, useSignupSendEmail} from '@/hooks/Auth/auth';

import CustomToast from '@/components/CustomToast/CustomToast';

import {isModalOpenState} from '@/recoil/vote/alertModal';
import validationForm from '@/utils/inputValidation';

import ExpireAlert from '../Alert/ExpireAlert';

import {InputEmailSertProps} from '@/types/auth';

function InputEmailSert({register, email, due, setDue, type}: InputEmailSertProps) {
  const [expire, setExpire] = useState(0);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const showToast = CustomToast();
  const navigate = useNavigate();
  const sendForSignup = useSignupSendEmail();
  const sendForPassword = useFindPasswordSendEmail();

  const onClickResert = async () => {
    try {
      const res =
        type === 'signup' ? await sendForSignup.mutateAsync({email}) : await sendForPassword.mutateAsync({email});

      if (res.data.responseCode === 202) {
        setExpire(await res.data.data.expire);
        setIsModalOpen(true);
        return;
      }

      showToast('인증코드가 재전송 되었습니다.');
      setDue(300);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.sertCode}>
      <label htmlFor='sertCode' className={styles.sertCode__label}>
        인증코드
      </label>

      <input
        id='sertCode'
        className={styles.input}
        type='text'
        maxLength={8}
        placeholder='인증코드 8자리를 입력해주세요'
        disabled={due === 0}
        autoComplete='off'
        {...register('emailSert', {
          required: true,
          pattern: {
            value: validationForm.emailSertCode,
            message: '인증코드 형식에 맞지 않습니다',
          },
        })}
      />

      <span className={`${styles.sertCode__due} ${due === 0 ? styles.timeout : ''}`}>{`${Math.floor(due / 60)}:${String(
        due % 60,
      ).padStart(2, '0')}`}</span>

      <div className={styles.sertCode__resert}>
        {due === 0 ? (
          <p className={styles.sertCode__resert__timeout}>입력시간이 초과되었습니다</p>
        ) : (
          <p className={styles.sertCode__resert__timein}>인증 코드를 못 받으셨나요?</p>
        )}

        <button className={styles.sertCode__resert__btn} type='button' onClick={onClickResert}>
          인증 코드 재전송
        </button>
      </div>
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

export default InputEmailSert;
