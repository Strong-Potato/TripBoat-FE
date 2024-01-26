import {PlaceList} from '@/types/route';
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const dx = lat1 - lat2;
  const dy = lon1 - lon2;
  return Math.sqrt(dx * dx + dy * dy);
}
export function findShortestPath(places: PlaceList[]): PlaceList[] {
  if (places.length === 0) return [];
  const start = places[0];
  let end = places
    .slice()
    .reverse()
    .find((p) => p.place.category === '숙소');
  if (!end) end = places[places.length - 1];
  const waypoints = places.slice(1, places.length - 1).filter((p) => p !== end);
  const waypointsWithDistance = waypoints.map((p) => ({
    ...p,
    distance: calculateDistance(start.place.latitude, start.place.longitude, p.place.latitude, p.place.longitude),
  }));
  waypointsWithDistance.sort((a, b) => a.distance - b.distance);
  return [
    start,
    ...waypointsWithDistance.map((p) => ({selectedId: p.selectedId, order: p.order, place: p.place})),
    end,
  ].filter(Boolean);
}
