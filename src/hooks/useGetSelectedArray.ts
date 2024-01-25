import {RecoilState, useSetRecoilState} from 'recoil';

import {SearchItemType} from '@/types/home';
import {TaglineType} from '@/types/vote';

const useGetSelectedArray = <T extends SearchItemType | TaglineType>(selectedState: RecoilState<T[]>) => {
  const setSelectedState = useSetRecoilState(selectedState);

  const toggleItemInNewArray = (data: T) => {
    setSelectedState((currentArray) => {
      const index = currentArray.findIndex((item) => item.id === data.id);

      if (index !== -1) {
        const newArray = [...currentArray.slice(0, index), ...currentArray.slice(index + 1)];
        console.log('newArray:', newArray);
        return newArray;
      } else {
        const newArray = [...currentArray, data];
        console.log('newArray:', newArray);
        return newArray;
      }
    });
  };

  const setMemoArray = (data: T) => {
    setSelectedState((currentArray: T[]) => {
      const index = currentArray.findIndex((item) => item.id === data.id);
      if (index !== -1) {
        const newArray = [...currentArray];
        newArray[index] = data;
        return newArray;
      }
      return currentArray;
    });
  };

  return {toggleItemInNewArray, setMemoArray};
};

export default useGetSelectedArray;
