import styles from "./VoteDetail.module.scss";

import CreatVoteTitleModal from "@/components/vote/CreatVoteTitleModal";
import VoteDetailsHeader from "@/components/vote/VoteDetailsHeader";

const VoteDetail = () => {
  return (
    <div className={styles.container}>
      <VoteDetailsHeader />

      <CreatVoteTitleModal />
    </div>
  );
};

export default VoteDetail;
