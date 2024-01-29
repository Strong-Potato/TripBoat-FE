import {FormEvent, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import styles from './LoginForm.module.scss';

import {useLogin} from '@/hooks/Auth/auth';

import AuthButton from '@/components/Auth/Button/AuthButton';

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
  const login = useLogin();

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

    const res = await login.mutateAsync({email, password});

    if (res.data.responseCode === 401) {
      setValidationError(true);
      return;
    }

    navigate('/', {replace: true});
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
