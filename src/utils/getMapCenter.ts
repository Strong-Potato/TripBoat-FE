import {Journeys} from '@/types/route';

// export const getMapCenter = (journeysData: Journeys) => {
//   if (!journeysData) return {lat: 37, lng: 131}; // 기준 독도

//   if (journeysData.journeys.length > 0 && journeysData.journeys[0].places.length > 0) {
//     const lat = journeysData.journeys[0].places[0].place.latitude;
//     const lng = journeysData.journeys[0].places[0].place.longitude;
//     return {lat: lat, lng: lng};
//   }
// };

export const getMapCenter = (journeysData: Journeys | undefined): {lat: number; lng: number} => {
  if (
    !journeysData ||
    !journeysData.journeys ||
    journeysData.journeys.length === 0 ||
    !journeysData.journeys[0].places ||
    journeysData.journeys[0].places.length === 0
  ) {
    return {lat: 37, lng: 131}; // Standard Dokdo
  }

  const lat = journeysData.journeys[0].places[0].place.latitude;
  const lng = journeysData.journeys[0].places[0].place.longitude;
  return {lat, lng};
};
