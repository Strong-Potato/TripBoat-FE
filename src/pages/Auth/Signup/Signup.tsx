import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import styles from './Signup.module.scss';

import {useGetMyInfo} from '@/hooks/User/useUser';

import Header from '@/components/Auth/Header/Header';
import AgreeForm from '@/components/Auth/Signup/AgreeForm';
import SignupForm from '@/components/Auth/Signup/SignupForm';

function Signup() {
  // agree, email, password, profile
  const [signupStep, setSignupStep] = useState<string>('agree');
  const navigate = useNavigate();
  const {isFetching, isSuccess} = useGetMyInfo(true);

  if (isSuccess) {
    navigate('/', {replace: true});
  }

  if (isFetching) return <div></div>;

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.body}>
        {signupStep === 'agree' ? (
          <AgreeForm setSignupStep={setSignupStep} />
        ) : (
          <SignupForm signupStep={signupStep} setSignupStep={setSignupStep} />
        )}
      </main>
    </div>
  );
}

export default Signup;
