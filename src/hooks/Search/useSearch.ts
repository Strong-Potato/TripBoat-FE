import areaData from '@/utils/areas.json';

function translateLocation(location: string) {
  const searchLocation = location.split(' ');
  let areaCode = 0;
  let sigunguCode = 0;
  if (searchLocation[0] === '전국') {
    return {areaCode, sigunguCode};
  }
  const area = areaData.filter((area) => area.name === searchLocation[0])[0];
  areaCode = area.areaCode;
  sigunguCode = area.districts.filter((sigungu) => sigungu.name === searchLocation[1])[0].sigunguCode;
  return {areaCode, sigunguCode};
}

function translateSort(sort: string) {
  let sortCode;
  switch (sort) {
    case '등록순':
      sortCode = 'R';
      break;
    case '인기순':
      sortCode = 'Q';
      break;
    case '이름순':
      sortCode = 'O';
      break;

    default:
      sortCode = 'R';
  }
  return sortCode;
}

export function search(keyword: string, location: string, sort: string) {
  const inputData = {
    keyword: keyword,
    location: translateLocation(location),
    sort: translateSort(sort),
  };

  return inputData;
}
