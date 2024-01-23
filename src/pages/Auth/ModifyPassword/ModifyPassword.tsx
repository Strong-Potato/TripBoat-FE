import styles from "./ModifyPassword.module.scss";

import Header from "@/components/Auth/Header/Header";
import ModifyPasswordForm from "@/components/Auth/ModifyPassword/ModifyPasswordForm";

function ModifyPassword() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.body}>
        <ModifyPasswordForm />
      </main>
    </div>
  );
}

export default ModifyPassword;
