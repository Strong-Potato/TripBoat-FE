import areaData from '@/utils/areas.json';
import categoryData from '@/utils/categories.json';

export function translateLocation(location: string) {
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

export function translateSort(sort: string) {
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

export function translateCategoryToNum(category: string) {
  let categoryCode = 0;
  switch (category) {
    case '전체':
      categoryCode = 0;
      break;
    case '맛집':
      categoryCode = 39;
      break;
    case '관광지':
      categoryCode = 12;
      break;
    case '문화시설':
      categoryCode = 14;
      break;
    case '레포츠':
      categoryCode = 28;
      break;
    case '숙소':
      categoryCode = 32;
      break;
    case '쇼핑':
      categoryCode = 38;
      break;
  }

  return categoryCode;
}
export function translateCategoryToStr(category: number) {
  let categoryCode = '전체';

  if (category === 0) {
    categoryCode = '전체';
  }
  if (category === 39) {
    categoryCode = '맛집';
  }
  if (category === 12) {
    categoryCode = '관광지';
  }
  if (category === 14) {
    categoryCode = '문화시설';
  }
  if (category === 15) {
    categoryCode = '문화시설';
  }
  if (category === 32) {
    categoryCode = '숙소';
  }
  if (category === 28) {
    categoryCode = '레포츠';
  }
  if (category === 38) {
    categoryCode = '쇼핑';
  }

  return categoryCode;
}

export function translateCategoryCode(name: string) {
  const categoryCode = categoryData.filter((data) => data.name === name)[0];
  return categoryCode.code;
}

export function translateCategoryName(name: string) {
  const categoryCode = categoryData.filter((data) => data.code === name)[0];
  return categoryCode.name;
}
