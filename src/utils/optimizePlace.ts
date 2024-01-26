interface PlaceDetail {
  id: number;
  title: string;
  thumbnail: string;
  address: string;
  addressDetail: string;
  latitude: number;
  longitude: number;
  category: string;
}

interface Place {
  id: number;
  Order: number;
  place: PlaceDetail;
}

function calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

export function findShortestPath(places: Place[]): Place[] {
  const startPoint: Place = places[0];
  const endPoint: Place = places
    .slice()
    .reverse()
    .find((place) => place.place.category === '숙소') as Place;

  let waypoints: Place[] = places.slice(1, places.length);
  waypoints = waypoints.filter((place) => place.id !== endPoint.id);

  const sortedPlaces: Place[] = [startPoint];
  let currentPlaceDetail: PlaceDetail = startPoint.place;

  while (waypoints.length > 0) {
    waypoints.sort((a, b) => {
      const distA: number = calculateDistance(
        currentPlaceDetail.latitude,
        currentPlaceDetail.longitude,
        a.place.latitude,
        a.place.longitude,
      );
      const distB: number = calculateDistance(
        currentPlaceDetail.latitude,
        currentPlaceDetail.longitude,
        b.place.latitude,
        b.place.longitude,
      );
      return distA - distB;
    });

    const nextPlace = waypoints.shift() as Place;
    sortedPlaces.push(nextPlace);
    currentPlaceDetail = nextPlace.place;
  }

  sortedPlaces.push(endPoint);

  return sortedPlaces;
}
