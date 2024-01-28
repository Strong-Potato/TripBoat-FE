import {parsingAlarmTravel} from './parsingAlarm';

import {NotificationData, NotificationDetails} from '@/types/notification';

describe('parsingAlarmTravel Function', () => {
  let consoleError: typeof console.error;

  beforeEach(() => {
    consoleError = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = consoleError;
  });

  it('should return an empty array for empty or null input', () => {
    expect(parsingAlarmTravel([])).toEqual([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(parsingAlarmTravel(null as any)).toEqual([]);
  });

  it('should parse valid notification details correctly', () => {
    const notificationDetails: NotificationDetails[] = [
      {
        id: 1,
        type: 'VOTE_CREATED',
        notificationInformation: JSON.stringify({
          spaceEventInfo: {spaceTitle: '테스트 여행지'},
          memberEventInfo: {memberNickname: '테스트 사용자'},
          voteEventInfo: {voteTitle: '테스트 투표'},
          createdAt: '2024-01-01T00:00:00Z',
        }),
        isRead: false,
        receiverId: 123,
        createdAt: '2024-01-01T00:00:00Z',
      },
    ];

    const expected: NotificationData[] = [
      {
        url: '',
        title: '[테스트 여행지] 테스트 사용자 님이 새로운 투표를 생성했습니다.',
        time: '2024-01-01T00:00:00Z',
      },
    ];

    const result = parsingAlarmTravel(notificationDetails);

    expect(result).toEqual(expected);
  });

  it('should handle incorrect JSON format gracefully', () => {
    const notificationDetailsWithBadJSON: NotificationDetails[] = [
      {
        id: 2,
        type: 'VOTE_CREATED',
        notificationInformation: 'not a valid json',
        isRead: false,
        receiverId: 456,
        createdAt: '2024-01-02T00:00:00Z',
      },
    ];

    expect(() => parsingAlarmTravel(notificationDetailsWithBadJSON)).not.toThrow();
    expect(parsingAlarmTravel(notificationDetailsWithBadJSON)).toEqual([]);
  });
});
