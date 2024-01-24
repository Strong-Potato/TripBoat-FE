import styles from "./FindPassword.module.scss";

import FindPasswordForm from "@/components/Auth/FindPassword/FindPasswordForm";
import Header from "@/components/Auth/Header/Header";

function FindPassword() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.body}>
        <FindPasswordForm />
      </main>
    </div>
  );
}

export default FindPassword;
