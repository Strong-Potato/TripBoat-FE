import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useSetRecoilState} from 'recoil';

import styles from './Withdrawal.module.scss';

import {useGetMyInfo} from '@/hooks/User/useUser';

import AlertModal from '@/components/AlertModal/AlertModal';
import AuthButton from '@/components/Auth/Button/AuthButton';
import Header from '@/components/Auth/Header/Header';
import CustomToast from '@/components/CustomToast/CustomToast';

import {authRequest} from '@/api/auth';
import {isModalOpenState} from '@/recoil/vote/alertModal';

import {AuthForm} from '@/types/auth';

function Withdrawal() {
  const {data} = useGetMyInfo(true);
  const {
    register,
    formState: {dirtyFields},
    watch,
    resetField,
  } = useForm<AuthForm>({
    mode: 'onChange',
    defaultValues: {
      password: '',
    },
  });
  const password = watch('password');
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const showToast = CustomToast();
  const navigate = useNavigate();

  const signout = async () => {
    try {
      const res =
        data?.data.provider === 'NONE' ? await authRequest.withdrawal(password) : await authRequest.withdrawal();

      console.log(res);

      if (res.data.responseCode === 206) {
        showToast('비밀번호가 일치하지 않습니다.');
        resetField('password');
        setIsModalOpen(false);
        return;
      }

      setIsModalOpen(false);
      navigate('/');
    } catch (error) {
      console.log(error);
      // 백엔드 validation 오류 - 리팩토링 시 responseCode 조건 걸 예정
      showToast('비밀번호가 일치하지 않습니다.');
      resetField('password');
      setIsModalOpen(false);
    }
  };

  const onClickButton = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.body}>
        <h2>
          트립보트를 떠나신다니
          <br />
          아쉬워요
          <span className={styles.imoji}></span>
        </h2>

        <section className={styles.desc}>
          <p>탈퇴시 삭제되는 정보를 확인하세요.</p>
          <p>한번 삭제된 정보는 복구가 불가능합니다.</p>
        </section>

        <div className={styles.bar}></div>

        <ul className={styles.removeList}>
          <li>1. 계정 및 프로필 정보</li>
          <li>2. 내 여행 스페이스 투표 및 일정</li>
          <li>3. 저장된 찜 목록 관련 정보</li>
          <li>4. 내가 작성한 리뷰</li>
        </ul>

        {data?.data.provider === 'NONE' && (
          <input
            id='password'
            type='password'
            className={styles.input}
            placeholder='비밀번호를 입력해주세요'
            {...register('password', {
              required: true,
            })}
          />
        )}

        <AuthButton content='탈퇴합니다' disabled={!dirtyFields?.password} onClick={onClickButton} type='button' />

        <AlertModal
          title='정말 탈퇴하시겠습니까?'
          subText='탈퇴 즉시 계정 정보가 모두 삭제됩니다.'
          cancelText='안할게요!'
          actionButton='탈퇴하기'
          isSmallSize={true}
          onClickAction={signout}
        />
      </main>
    </div>
  );
}

export default Withdrawal;
