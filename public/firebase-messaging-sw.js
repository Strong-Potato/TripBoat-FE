function parseNestedJson(jsonString) {
  try {
    let formattedString = jsonString.trim().replace(/\n/g, '').replace(/ {2}/g, '');
    let outerJson = JSON.parse(formattedString);
    let innerJsonString = outerJson.body;
    let correctedInnerJsonString = innerJsonString.replace(/\\"/g, '"');
    let innerJson = JSON.parse(correctedInnerJsonString);
    return innerJson;
  } catch (e) {
    return `Error parsing JSON: ${e.message}`;
  }
}

function createNotificationBody(data) {
  if (!data || !data.spaceEventInfo || !data.memberEventInfo) {
    return '필요한 데이터가 누락되었습니다.';
  }

  const spaceTitle = data.spaceEventInfo.spaceTitle;
  const memberNickname = data.memberEventInfo.memberNickname;
  let notificationBody = '';

  switch (data.eventType) {
    case 'VOTE_CREATED':
      if (!data.voteEventInfo) {
        return `[${spaceTitle}] ${memberNickname} 님이 새로운 투표를 생성했습니다.`;
      }
      // eslint-disable-next-line no-case-declarations
      const voteTitle = data.voteEventInfo.voteTitle;
      notificationBody = `[${spaceTitle}] ${memberNickname} 님이 새로운 투표 “${voteTitle}”를 생성했습니다.`;
      break;
    case 'VOTE_DONE':
      if (!data.voteEventInfo) {
        return `[${spaceTitle}] 투표가 최종 확정되었습니다.`;
      }
      // eslint-disable-next-line no-case-declarations
      const voteTitleDone = data.voteEventInfo.voteTitle;
      notificationBody = `[${spaceTitle}] “${voteTitleDone}” 투표가 최종 확정되었습니다.`;
      break;
    case 'VOTE_DELETED':
      if (!data.voteEventInfo) {
        return `[${spaceTitle}] ${memberNickname} 님이 투표를 삭제했습니다.`;
      }
      // eslint-disable-next-line no-case-declarations
      const voteTitleDeleted = data.voteEventInfo.voteTitle;
      notificationBody = `[${spaceTitle}] ${memberNickname} 님이 “${voteTitleDeleted}”의 투표를 삭제했습니다.`;
      break;
    case 'MEMBER_INVITED':
      notificationBody = `[${spaceTitle}] 에 ${memberNickname} 님이 초대되었습니다.`;
      break;
    case 'MEMBER_EXIT':
      notificationBody = `[${spaceTitle}] ${memberNickname} 님이 여행 스페이스를 나갔습니다.`;
      break;
    case 'NEW_JOURNEY_ADDED':
      // eslint-disable-next-line no-case-declarations
      const voteTitleCandidateAdd = data.voteEventInfo.voteTitle;
      notificationBody = `[${spaceTitle}] ${voteTitleCandidateAdd} 의 후보가 일정에 추가 되었습니다.`;
      break;
    case 'CANDIDATE_ADDED':
      // eslint-disable-next-line no-case-declarations
      const voteTitleAdd = data.voteEventInfo.voteTitle;
      notificationBody = `[${spaceTitle}] ${memberNickname} 님이 "${voteTitleAdd}"에 새로운 후보를 등록했습니다.`;
      break;
    case 'SPACE_LOCATION_CHANGED':
      notificationBody = `여행지가 []에서 []으로 변경되었습니다.`;
      break;
    case 'SPACE_SCHEDULE_CHANGED':
      notificationBody = `여행날짜가 []에서 []으로 변경되었습니다.`;
      break;
    default:
      notificationBody = '알 수 없는 이벤트입니다.';
  }

  return notificationBody;
}

self.addEventListener('install', function () {
  console.log('[FCM SW] 설치중..');
  self.skipWaiting();
});

self.addEventListener('activate', function () {
  console.log('[FCM SW] 실행중..');
});

self.addEventListener('push', function (e) {
  if (!e.data.json()) return;
  const resultData = e.data.json().notification;
  const resultDataString = typeof resultData === 'string' ? resultData : JSON.stringify(resultData);
  const parsedResultData = parseNestedJson(resultDataString);
  console.log(parsedResultData);

  const notificationTitle = 'TRIPVOTE';
  const notificationOptions = {
    body: createNotificationBody(parsedResultData),
    ...parsedResultData,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
