import { useState } from "react";

import styles from "./Signup.module.scss";

import Agree from "@/components/Auth/Signup/AgreeForm";
import Header from "@/components/Auth/Signup/Header/Header";
import SignupForm from "@/components/Auth/Signup/SignupForm";

function Signup() {
  // agree, email, password, profile
  const [signupStep, setSignupStep] = useState<string>("email");

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.body}>
        {signupStep === "agree" ? (
          <Agree setSignupStep={setSignupStep} />
        ) : (
          <SignupForm signupStep={signupStep} setSignupStep={setSignupStep} />
        )}
      </main>
    </div>
  );
}

export default Signup;
