// placeSelectionUtils.ts

import {SelectedPlace, TransformedDataItem} from '@/types/route';

export const handlePlaceSelection = (
  journeyId: number,
  selectedId: number,
  selectedPlaces: SelectedPlace[],
  setSelectedPlaces: React.Dispatch<React.SetStateAction<SelectedPlace[]>>,
) => {
  const selectedPlace: SelectedPlace = {journeyId, selectedId};

  if (isSelected(selectedPlace, selectedPlaces)) {
    setSelectedPlaces((prevSelectedPlaces) =>
      prevSelectedPlaces.filter((place) => !arePlacesEqual(place, selectedPlace)),
    );
  } else {
    setSelectedPlaces((prevSelectedPlaces) => [...prevSelectedPlaces, selectedPlace]);
  }
};

export const transformSelectedPlaces = (selectedPlaces: SelectedPlace[]) => {
  return selectedPlaces.reduce((result: TransformedDataItem[], item: SelectedPlace) => {
    const existingItem = result.find((i) => i.journeyId === item.journeyId);

    if (existingItem) {
      existingItem.selectedIds.push(item.selectedId);
    } else {
      result.push({journeyId: item.journeyId, selectedIds: [item.selectedId]});
    }

    return result;
  }, []);
};

const arePlacesEqual = (place1: SelectedPlace, place2: SelectedPlace) => {
  return place1.journeyId === place2.journeyId && place1.selectedId === place2.selectedId;
};

const isSelected = (place: SelectedPlace, selectedPlaces: SelectedPlace[]) => {
  return selectedPlaces.some((selectedPlace) => arePlacesEqual(selectedPlace, place));
};
