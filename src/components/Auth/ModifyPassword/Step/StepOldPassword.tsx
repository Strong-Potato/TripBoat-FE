import axios from 'axios';
import {Link} from 'react-router-dom';

import styles from './Step.module.scss';

import AuthButton from '../../Button/AuthButton';
import InputOldPassword from '../../Input/InputOldPassword';

import {StepOldPasswordProps} from '@/types/auth';

function StepOldPassword({
  register,
  dirtyFields,
  errors,
  setStep,
  setToken,
  watchFields: {oldPassword},
}: StepOldPasswordProps) {
  const onClickNext = async () => {
    try {
      const res = await axios.post('/api/auth/modify/password/check', {
        password: oldPassword,
      });

      setToken!(await res.data.data.token);
      setStep!('newPassword');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.container}>
      <h2>비밀번호 확인</h2>

      <small className={styles.step__desc}>비밀번호 재설정을 위해 현재 비밀번호를 입력해주세요.</small>

      <InputOldPassword register={register} dirtyFields={dirtyFields} errors={errors} />

      <AuthButton
        content='다음'
        disabled={!dirtyFields?.oldPassword || errors?.oldPassword ? true : false}
        type='button'
        onClick={onClickNext}
      />

      <div className={styles.toFindPassword}>
        <Link to={'/auth/password/find'}>비밀번호를 잊으셨나요?</Link>
      </div>
    </section>
  );
}

export default StepOldPassword;
