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
  // 필수! 알람 제목
  const notificationTitle = resultData.title;
  const notificationOptions = {
    //필수! 알람 설명
    body: resultData.body,
    //필수! 알람 이미지(프로필, 로고)
    icon: resultData.image,
    //필수! 알람 분류태그 (전체, 투표, 나가기...)
    tag: resultData.tag,
    ...resultData,
  };
  //   console.log(resultData);

  self.registration.showNotification(notificationTitle, notificationOptions);
});
