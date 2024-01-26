import {FormEvent, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import styles from './LoginForm.module.scss';

import AuthButton from '@/components/Auth/Button/AuthButton';

import {authRequest} from '@/api/auth';
import validationForm from '@/utils/inputValidation';

import InputEmail from './LoginInput/InputEmail';
import InputPassword from './LoginInput/InputPassword';

import {AuthForm} from '@/types/auth';

function LoginForm() {
  const {
    register,
    resetField,
    getValues,
    formState: {dirtyFields},
  } = useForm<AuthForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate();
  const [validationError, setValidationError] = useState<boolean>(false);

  const showError = (email: string, password: string) => {
    const isValid = validationForm.email.test(email) && validationForm.password.test(password);

    if (!isValid) {
      setValidationError(true);
      return true;
    }

    return false;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {email, password} = getValues();

    if (showError(email as string, password as string)) return;

    try {
      const res = await authRequest.login(email as string, password as string);
      console.log('login response', res);

      if (res.data.responseCode === 401) {
        setValidationError(true);
        return;
      }

      navigate('/', {replace: true});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <InputEmail label='이메일' register={register} resetField={resetField} dirtyFields={dirtyFields} />

      <InputPassword label='비밀번호' register={register} resetField={resetField} dirtyFields={dirtyFields} />

      {validationError ? <small>이메일 또는 비밀번호를 확인해주세요.</small> : null}

      <AuthButton content='로그인' type='submit' disabled={false} />
    </form>
  );
}

export default LoginForm;
