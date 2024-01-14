import { Button } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

import styles from "./Vote.module.scss";

import BottomSlide from "@/components/BottomSlide/BottomSlide";
import VoteMeatball from "@/components/Vote/VoteBottomSlideContent/VoteMeatball/VoteMeatball";
import VoteContent from "@/components/Vote/VoteContent/VoteContent";
import VoteContentEmpty from "@/components/Vote/VoteContent/VoteContentEmpty/VoteContentEmpty";
import VoteHeader from "@/components/Vote/VoteHeader/VoteHeader";

import { getVoteData } from "@/mocks/handlers/vote";
import { isBottomSlideOpenState } from "@/recoil/vote/bottomSlide";

import { VoteListData } from "@/types/vote";

const Vote = () => {
  const [isBTOpen, setIsBTOpen] = useRecoilState(isBottomSlideOpenState);
  const [showResults, setShowResults] = useState(false);
  const [bottomSlideContent, setBottomSlideContent] =
    useState<ReactNode | null>(null);
  const [data, setData] = useState<VoteListData>();
  const param = useParams().id as string;

  useEffect(() => {
    getVoteData(param, setData);
  }, []);

  const BottomSlideOpen = (content: ReactNode) => {
    setBottomSlideContent(content);
    setIsBTOpen(true);
  };

  const handleShowResultsClick = () => {
    setShowResults(!showResults);
  };

  // const showBottomButton = () => {
  //   if(data?.state === "진행 중") {
  //     <Button
  //     variant="CTAButton"
  //     onClick={handleShowResultsClick}
  //     isDisabled={data.candidates.length === 0}
  //   >
  //     {showResults ? "다시 투표하기" : "결과보기"}
  //   </Button>
  //   } else if ("리코일 후보삭제") {
  //     //새로운 버튼 컴포넌트 <DeleteCandidateBottomButton/>
  //   } else {
  //     null
  //   }
  // }

  return (
    <>
      {data && (
        <div className={styles.container}>
          {/* 투표 확정상태일때 "투표 재진행"*/}
          <VoteHeader
            title={data.title as string}
            onBottomSlideOpen={() =>
              BottomSlideOpen(<VoteMeatball state={data.state} />)
            }
          />

          {data.candidates ? (
            <VoteContent
              data={data}
              onBottomSlideOpen={BottomSlideOpen}
              showResults={showResults}
            />
          ) : (
            <VoteContentEmpty />
          )}

          {data.state === "진행 중" && (
            <Button
              variant="CTAButton"
              onClick={handleShowResultsClick}
              isDisabled={data.candidates.length === 0}
            >
              {showResults ? "다시 투표하기" : "결과보기"}
            </Button>
          )}

          <BottomSlide
            isOpen={isBTOpen}
            onClose={() => setIsBTOpen(false)}
            children={bottomSlideContent}
          />
        </div>
      )}
    </>
  );
};

export default Vote;
