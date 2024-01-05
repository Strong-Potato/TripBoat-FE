import styles from "./VoteDetail.module.scss";

import CreatVoteTitleModal from "@/components/Vote/CreatVoteTitleModal";
import VoteDetailsField from "@/components/Vote/VoteDetailsField";
import VoteDetailsHeader from "@/components/Vote/VoteDetailsHeader";

const VoteDetail = () => {
  return (
    <div className={styles.container}>
      <VoteDetailsHeader />
      <VoteDetailsField />
      <CreatVoteTitleModal />
    </div>
  );
};

export default VoteDetail;
