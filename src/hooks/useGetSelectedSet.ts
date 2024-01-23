import {Dispatch, SetStateAction} from 'react';

type SetType<T> = Set<T>;

const useGetSelectedSet = <T>(setter: Dispatch<SetStateAction<SetType<T>>>) => {
  const addItemInNewSet = (data: T) => {
    setter((currentSet) => {
      const newSet = new Set(currentSet);
      if (newSet.has(data)) {
        newSet.delete(data);
      } else {
        newSet.add(data);
      }
      console.log('newSet', newSet);
      return newSet;
    });
  };

  return {addItemInNewSet};
};

export default useGetSelectedSet;
