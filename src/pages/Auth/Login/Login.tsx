import {Link, useNavigate} from 'react-router-dom';

import styles from './Login.module.scss';

import {useGetMyInfo} from '@/hooks/User/useUser';

import LoginForm from '@/components/Auth/Login/LoginForm';

import KakaoIcon from '@/assets/kakao/kakao_path.svg?react';
import Logo from '@/assets/logo.svg?react';

function Login() {
  const navigate = useNavigate();
  const {data, isFetching} = useGetMyInfo(true);

  if (isFetching) return <div></div>;

  if (data?.status === 200) {
    console.error('User was already logged in');
    navigate('/');
  }

  return (
    <div className={styles.container}>
      <h1 aria-hidden='true'>
        <Link to='/'>
          <Logo />
        </Link>
      </h1>

      <LoginForm />

      <section className={styles.aboutAuth}>
        <Link to={'/auth/password/find'}>비밀번호를 잊으셨나요?</Link>
        <div className={styles.col_bar}></div>
        <Link to={'/auth/signup'}>회원가입</Link>
      </section>

      <section className={styles.snsLogin}>
        <h2 className={styles.snsLogin__head}>
          <div className={styles.row_bar}></div>
          <p>SNS 계정으로 로그인</p>
          <div className={styles.row_bar}></div>
        </h2>

        <Link to='https://api.tripvote.site/oauth2/authorization/kakao'>
          <button type='button' className={styles.snsLogin__btn}>
            <KakaoIcon />
            <span className={styles.kakao_text}>카카오 로그인</span>
            <span className={styles.kakao_space} aria-hidden></span>
          </button>
        </Link>
      </section>

      <section className={styles.toHome}>
        <Link to={'/'} className={styles.toHome__link}>
          로그인 전 둘러보기
        </Link>
      </section>
    </div>
  );
}

export default Login;
