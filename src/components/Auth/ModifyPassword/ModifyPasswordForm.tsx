import axios from 'axios';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import styles from './ModifyPasswordForm.module.scss';

import StepNewPassword from './Step/StepNewPassword';
import StepOldPassword from './Step/StepOldPassword';

import {AuthForm} from '@/types/auth';

function ModifyPasswordForm() {
  const {
    register,
    resetField,
    handleSubmit,
    watch,
    formState: {errors, dirtyFields},
  } = useForm<AuthForm>({
    mode: 'onChange',
    defaultValues: {
      oldPassword: '',
      password: '',
      passwordConfirm: '',
    },
  });
  const watchFields = watch();

  // steps : oldPassword, newPassword
  const [step, setStep] = useState('oldPassword');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const res = axios.post('/api/auth/modify/password', {
        token,
        newPassword: watchFields.password,
      });

      console.log(res);
      navigate('/user', {replace: true});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      {step === 'oldPassword' && (
        <StepOldPassword
          setToken={setToken}
          register={register}
          watchFields={watchFields}
          dirtyFields={dirtyFields}
          errors={errors}
          setStep={setStep}
        />
      )}

      {step === 'newPassword' && (
        <StepNewPassword
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

export default ModifyPasswordForm;
