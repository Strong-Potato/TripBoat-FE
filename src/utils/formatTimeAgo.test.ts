import formatTimeAgo from './formatTimeAgo'; // formatTimeAgo 함수를 임포트합니다.

describe('시간이 얼마나 지났는지 값을 반환합니다', () => {
  test('몇초 전인지 반환합니다', () => {
    const now = new Date();
    const thirtySecondsAgo = new Date(now.getTime() - 30 * 1000);
    expect(formatTimeAgo(thirtySecondsAgo)).toBe('30초 전');
  });

  test('몇분 전인지 반환합니다', () => {
    const now = new Date();
    const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);
    expect(formatTimeAgo(fiveMinutesAgo)).toBe('5분 전');
  });

  test('몇시간 전인지 반환합니다', () => {
    const now = new Date();
    const threeHoursAgo = new Date(now.getTime() - 3 * 60 * 60 * 1000);
    expect(formatTimeAgo(threeHoursAgo)).toBe('3시간 전');
  });

  test('몇일 전인지 반환합니다', () => {
    const now = new Date();
    const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
    expect(formatTimeAgo(twoDaysAgo)).toBe('2일 전');
  });

  test('그 외의 날짜 형식을 반환합니다', () => {
    const oldDate = new Date('2020-01-01');
    expect(formatTimeAgo(oldDate)).toMatch(/\d{2}\.\d{2}\.\d{2}/);
  });
});
