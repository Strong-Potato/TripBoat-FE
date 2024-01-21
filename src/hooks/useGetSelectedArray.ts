import {useSetRecoilState} from 'recoil';

import {selectedPlaceState} from '@/recoil/vote/selectPlace';

import {PlaceInfo} from '@/types/vote';

const useGetSelectedArray = () => {
  const setSelectedPlace = useSetRecoilState(selectedPlaceState);

  const toggleItemInNewArray = (data: PlaceInfo) => {
    setSelectedPlace((currentArray) => {
      const index = currentArray.findIndex((item) => item.placeId === data.placeId);

      if (index !== -1) {
        const newArray = [...currentArray.slice(0, index), ...currentArray.slice(index + 1)];
        return newArray;
      } else {
        const newArray = [...currentArray, data];
        return newArray;
      }
    });
  };

  return {toggleItemInNewArray};
};

export default useGetSelectedArray;
