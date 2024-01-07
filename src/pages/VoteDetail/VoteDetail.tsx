import styles from "./VoteDetail.module.scss";

// import CreatVoteTitleModal from "@/components/Vote/CreatVoteTitleModal/CreatVoteTitleModal";
import VoteDetailsBottomButton from "@/components/Vote/VoteDetailsBottomButton/VoteDetailsBottomButton";
import VoteDetailsField from "@/components/Vote/VoteDetailsField/VoteDetailsField";
import VoteDetailsHeader from "@/components/Vote/VoteDetailsHeader/VoteDetailsHeader";

const VoteDetail = () => {
  return (
    <div className={styles.container}>
      <VoteDetailsHeader />
      <VoteDetailsField />

      {/* 나중에 여행스페이스 메인에 옮겨야함 */}
      {/* <CreatVoteTitleModal /> */}
      <VoteDetailsBottomButton />
    </div>
  );
};

export default VoteDetail;
