import {useState} from 'react';

interface RankResult {
  value: number;
  rank: number;
}

interface UseRankCalculator {
  result: {[index: string]: RankResult};
  calculateRanks: (votes: number[]) => void;
}

const useRankCalculator = (): UseRankCalculator => {
  const [result, setResult] = useState<{[index: string]: RankResult}>({});

  const calculateRanks = (votes: number[]): void => {
    const uniqueVotes = [...new Set(votes)];
    uniqueVotes.sort((a, b) => b - a);

    const ranks: {[index: string]: RankResult} = {};

    for (let i = 0; i < uniqueVotes.length; i++) {
      const currentRank = i + 1;
      const currentValue = uniqueVotes[i];

      const duplicateIndices = votes.reduce((acc, vote, index) => {
        if (vote === currentValue) {
          acc.push(index);
        }
        return acc;
      }, [] as number[]);

      duplicateIndices.forEach((index) => {
        ranks[index.toString()] = {value: currentValue, rank: currentRank};
      });
    }

    setResult(ranks);
  };

  return {result, calculateRanks};
};

export default useRankCalculator;
