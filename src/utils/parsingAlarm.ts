import {NotificationData, NotificationDetails} from '@/types/notification';

export function parsingAlarmTravel(notificationDetails: NotificationDetails[]): NotificationData[] {
  const travelNoti: NotificationData[] = [];

  try {
    notificationDetails.forEach((event) => {
      const notificationInformation = JSON.parse(event.notificationInformation);
      const eventType = event.type;
      const spaceEventInfo = notificationInformation.spaceEventInfo;
      const memberEventInfo = notificationInformation.memberEventInfo;
      const voteEventInfo = notificationInformation.voteEventInfo;
      const createdAt = notificationInformation.createdAt;
      const notificationData = {
        url: memberEventInfo.memberImageUrl || '',
        title: '',
        time: createdAt,
      };

      switch (eventType) {
        case 'VOTE_CREATED':
          notificationData.title = `[${spaceEventInfo?.spaceTitle || '여행지 미정'}] ${
            memberEventInfo?.memberNickname || '알 수 없음'
          } 님이 새로운 투표를 생성했습니다.`;
          break;
        case 'VOTE_DONE':
          notificationData.title = `[${spaceEventInfo?.spaceTitle || '여행지 미정'}] "${
            voteEventInfo?.voteTitle || ''
          }" 투표가 최종 확정되었습니다.`;
          break;
        case 'VOTE_DELETED':
          notificationData.title = `[${spaceEventInfo?.spaceTitle || '여행지 미정'}] ${
            memberEventInfo?.memberNickname || '알 수 없음'
          } 님이 투표를 삭제했습니다.`;
          break;
        case 'MEMBER_INVITED':
          notificationData.title = `[${spaceEventInfo?.spaceTitle || '여행지 미정'}] 에 ${
            memberEventInfo?.memberNickname || '알 수 없음'
          } 님이 초대되었습니다.`;
          break;
        case 'MEMBER_EXIT':
          notificationData.title = `[${spaceEventInfo?.spaceTitle || '여행지 미정'}] 에 ${
            memberEventInfo?.memberNickname || '알 수 없음'
          } 님이 여행 스페이스를 나갔습니다.`;
          break;
        case 'NEW_JOURNEY_ADDED':
          notificationData.title = `[${spaceEventInfo?.spaceTitle || '여행지 미정'}] ${
            voteEventInfo?.voteTitle || ''
          } 의 후보가 일정에 추가 되었습니다.`;
          break;
        case 'CANDIDATE_ADDED':
          notificationData.title = `[${spaceEventInfo?.spaceTitle || '여행지 미정'}] ${
            memberEventInfo?.memberNickname || '알 수 없음'
          } 님이 "${voteEventInfo?.voteTitle || ''}"에 새로운 후보를 등록했습니다.`;
          break;
        case 'SPACE_LOCATION_CHANGED':
          // eslint-disable-next-line no-case-declarations
          const oldLocation = spaceEventInfo?.oldTitle || '여행지 미정';
          notificationData.title = `여행지가 [${oldLocation}]에서 [${
            spaceEventInfo?.spaceTitle || '여행지 미정'
          }]으로 변경되었습니다.`;
          break;
        case 'SPACE_SCHEDULE_CHANGED':
          // eslint-disable-next-line no-case-declarations
          const oldDates = spaceEventInfo?.oldDates || '날짜 미정';
          // eslint-disable-next-line no-case-declarations
          const newDates = spaceEventInfo?.changDate || '날짜 미정';
          notificationData.title = `여행날짜가 [${oldDates}]에서 [${newDates}]으로 변경되었습니다.`;
          break;
        default:
          break;
      }

      travelNoti.push(notificationData);
    });
  } catch (error) {
    console.error(`Error parsing notifications: ${error}`);
  }

  return travelNoti;
}
