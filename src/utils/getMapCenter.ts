import {Journeys} from '@/types/route';

export const getMapCenter = (journeysData: Journeys) => {
  if (journeysData.journeys[0].places.length > 0) {
    const lat = journeysData.journeys[0].places[0].place.latitude;
    const lng = journeysData.journeys[0].places[0].place.longitude;
    return {lat: lat, lng: lng};
  } else {
    return {lat: 37, lng: 131}; // 기준 독도
  }
};
