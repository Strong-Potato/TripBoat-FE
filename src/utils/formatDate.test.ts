import {changeDOWFormat, createDate, setMyReviewDate, setRouteDate, setSpaceDate, setSpaceDate_DOW} from './formatDate';

describe('Check formatDate functions', () => {
  describe('createDate', () => {
    test('yyyy-mm-dd 형식을 date 형식으로 전환', () => {
      const param = '2024-01-28';
      const result = new Date(2024, 0, 28);
      expect(createDate(param)).toEqual(result);
    });
  });

  describe('changeDOWFormat', () => {
    test('DOW 형식을 한국 기준 변경', () => {
      const dow = 'Su';
      expect(changeDOWFormat(dow)).toBe('일');
    });
  });

  describe('setSpaceDate_DOW', () => {
    test('1.17(금) - 1.19(일) 형식으로 변경', () => {
      const start = '2024-01-17';
      const end = '2024-01-19';
      expect(setSpaceDate_DOW(start, end)).toBe('1.17(수) - 1.19(금)');
    });
  });

  describe('setSpaceDate', () => {
    test('2024.01.12(월) - 2024.01.14(수) 형식으로 변경', () => {
      const start = '2024-01-12';
      const end = '2024-01-14';
      expect(setSpaceDate(start, end)).toBe('2024.01.12(금) - 2024.01.14(일)');
    });
  });

  describe('setMyReviewDate', () => {
    test('2024년 6월 형식으로 변경', () => {
      const visitedAt = '2024-06-17';
      expect(setMyReviewDate(visitedAt)).toBe('2024년 6월');
    });
  });

  describe('setRouteDate', () => {
    test('2024.01.12(월) 형식으로 변경', () => {
      const date = '2024-01-12';
      expect(setRouteDate(date)).toBe('2024.01.12(금)');
    });
  });
});
