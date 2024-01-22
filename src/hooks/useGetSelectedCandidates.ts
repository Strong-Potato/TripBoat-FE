import { useSetRecoilState } from "recoil";

import { selectedCandidatesState } from "@/recoil/vote/candidateList";

const useGetSelectedCandidates = () => {
  const setSelectedCandidates = useSetRecoilState(selectedCandidatesState);

  const addCandidateInSelectedList = (id: number) => {
    setSelectedCandidates((currentCandidatesSet) => {
      const newSet = new Set(currentCandidatesSet);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      console.log("newSet", newSet);
      return newSet;
    });
  };

  return { addCandidateInSelectedList };
};

export default useGetSelectedCandidates;
