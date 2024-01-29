import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import styles from './ModifyPasswordForm.module.scss';

import {useModifyPassword} from '@/hooks/Auth/auth';

import CustomToast from '@/components/CustomToast/CustomToast';

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
  const showToast = CustomToast();
  const modifyPassword = useModifyPassword();

  // steps : oldPassword, newPassword
  const [step, setStep] = useState('oldPassword');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const onSubmit = async () => {
    if (Object.keys(dirtyFields).length < 2) return;

    try {
      const res = await modifyPassword.mutateAsync({
        token,
        newPassword: watchFields.password,
      });

      if (res.data.responseCode === 207) {
        showToast('새로운 비밀번호를 입력해주세요.');
        return;
      }

      showToast('비밀번호가 변경되었습니다.');
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
