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
    // 푸시 알람 받아오는 데이터 파싱 (코드에 따라서)
    //필수! 알람 설명
    body: resultData.body,
    //필수! 알림 메세지 파싱
    icon: resultData.image,
    tag: resultData.tag,
    ...resultData,
  };
  console.log('출력', new Date()); // GET 알림 불러오기 갱신

  self.registration.showNotification(notificationTitle, notificationOptions);
});
