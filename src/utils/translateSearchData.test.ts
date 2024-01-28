import {
  translateAreaCode,
  translateCategoryCode,
  translateCategoryName,
  translateCategoryToNum,
  translateCategoryToStr,
  translateLocation,
  translateSort,
} from './translateSearchData';

describe('translateSearchData', () => {
  test('translateLocation', () => {
    expect(translateLocation('강원 강릉시')).toEqual({areaCode: 32, sigunguCode: 1});
  });

  test('translateSort', () => {
    expect(translateSort('등록순')).toBe('R');
    expect(translateSort('인기순')).toBe('Q');
    expect(translateSort('이름순')).toBe('O');
  });

  test('translateCategoryToNum', () => {
    expect(translateCategoryToNum('전체')).toBe(0);
    expect(translateCategoryToNum('맛집')).toBe(39);
    expect(translateCategoryToNum('관광지')).toBe(12);
    expect(translateCategoryToNum('문화시설')).toBe(14);
    expect(translateCategoryToNum('레포츠')).toBe(28);
    expect(translateCategoryToNum('숙소')).toBe(32);
    expect(translateCategoryToNum('쇼핑')).toBe(38);
  });

  test('translateCategoryToStr', () => {
    expect(translateCategoryToStr(0)).toBe('전체');
    expect(translateCategoryToStr(39)).toBe('맛집');
    expect(translateCategoryToStr(12)).toBe('관광지');
    expect(translateCategoryToStr(14)).toBe('문화시설');
    expect(translateCategoryToStr(15)).toBe('문화시설');
    expect(translateCategoryToStr(32)).toBe('숙소');
    expect(translateCategoryToStr(28)).toBe('레포츠');
    expect(translateCategoryToStr(38)).toBe('쇼핑');
  });

  test('translateCategoryCode', () => {
    expect(translateCategoryCode('등대')).toBe('A01011600');
  });

  test('translateCategoryName', () => {
    expect(translateCategoryName('A01011600')).toBe('등대');
  });

  test('translateAreaCode', () => {
    expect(translateAreaCode(32)).toBe('강원');
  });
});
