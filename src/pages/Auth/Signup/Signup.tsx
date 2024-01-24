import {useState} from 'react';

import styles from './Signup.module.scss';

import Header from '@/components/Auth/Header/Header';
import AgreeForm from '@/components/Auth/Signup/AgreeForm';
import SignupForm from '@/components/Auth/Signup/SignupForm';

function Signup() {
  // agree, email, password, profile
  const [signupStep, setSignupStep] = useState<string>('agree');

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
