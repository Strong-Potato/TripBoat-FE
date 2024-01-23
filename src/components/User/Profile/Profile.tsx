import { useNavigate } from "react-router-dom";

import styles from "./Profile.module.scss";

import Pencil from "@/assets/icons/pencil.svg?react";

import { ProfileProps } from "@/types/user";

function Profile({ userInfo }: ProfileProps) {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${userInfo.image})` }}
      >
        <button
          className={styles.image__edit}
          onClick={() => {
            navigate("/user/profile/edit");
          }}
        >
          <Pencil width={16} height={16} />
        </button>
      </div>

      <div className={styles.userName}>{userInfo.nickname}</div>
    </section>
  );
}

export default Profile;
