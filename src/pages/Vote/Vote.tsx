import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Vote.module.scss";

import BottomSlide from "@/components/BottomSlide/BottomSlide";
import AddCandidate from "@/components/Vote/VoteBottomSlideContent/AddCandidate/AddCandidate";
import VoteMeatball from "@/components/Vote/VoteBottomSlideContent/VoteMeatball/VoteMeatball";
import VoteContent from "@/components/Vote/VoteContent/VoteContent";
import VoteContentEmpty from "@/components/Vote/VoteContent/VoteContentEmpty/VoteContentEmpty";
import VoteHeader from "@/components/Vote/VoteHeader/VoteHeader";

import { getVoteData } from "@/mocks/handlers/vote";

import { VoteListData } from "@/types/vote";

const Vote = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showResults, setShowResults] = useState(false);
  const [bottomSlideContent, setBottomSlideContent] =
    useState<ReactNode | null>(null);
  const [data, setData] = useState<VoteListData>();
  const param = useParams().id as string;

  useEffect(() => {
    getVoteData(param, setData);
  }, []);

  const onBottomSlideOpen = (content: ReactNode) => {
    setBottomSlideContent(content);
    onOpen();
  };

  const handleShowResultsClick = () => {
    setShowResults(!showResults);
  };

  return (
    <div className={styles.container}>
      {/* showResults일때 보여주는거 달랐던거 같음 */}
      <VoteHeader
        title={data?.title as string}
        onOpen={() => onBottomSlideOpen(<VoteMeatball />)}
      />

      {data ? (
        <VoteContent
          data={data}
          onClick={() => onBottomSlideOpen(<AddCandidate />)}
          showResults={showResults}
        />
      ) : (
        <VoteContentEmpty />
      )}

      <Button variant="CTAButton" onClick={handleShowResultsClick}>
        {showResults ? "다시 투표하기" : "결과보기"}
      </Button>

      <BottomSlide
        isOpen={isOpen}
        onClose={onClose}
        children={bottomSlideContent}
      />
    </div>
  );
};

export default Vote;
