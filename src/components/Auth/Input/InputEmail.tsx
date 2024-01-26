import styles from './Input.module.scss';

import InputRemove from '@/assets/icons/InputRemove.svg?react';
import validationForm from '@/utils/inputValidation';

import {InputEmailProps} from '@/types/auth';

function InputEmail({register, dirty, error, resetField}: InputEmailProps) {
  const resetEmail = () => {
    resetField('email');
  };

  return (
    <section className={styles.email}>
      <label htmlFor='email'>아이디(이메일 주소)</label>

      <input
        id='email'
        className={`${styles.input} ${dirty && error ? styles.error : ''}`}
        type='text'
        placeholder='이메일 주소를 입력해주세요'
        autoComplete='off'
        {...register('email', {
          required: true,
          pattern: {
            value: validationForm.email,
            message: '이메일 형식이 올바르지 않습니다.',
          },
        })}
      />

      {dirty && (
        <button type='button' className={styles.removeBtn} onClick={resetEmail} tabIndex={-1}>
          <InputRemove className={styles.svg} />
        </button>
      )}

      {!dirty || error ? <small>{error?.message}</small> : null}
    </section>
  );
}

export default InputEmail;
