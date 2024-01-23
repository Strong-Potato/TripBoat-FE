import styles from "./ModifyProfile.module.scss";

import Header from "@/components/Auth/Header/Header";
import EditProfileForm from "@/components/User/EditProfileForm/EditProfileForm";

function ModifyProfile() {
  return (
    <div className={styles.container}>
      <Header content="프로필 편집" />

      <EditProfileForm />
    </div>
  );
}

export default ModifyProfile;
