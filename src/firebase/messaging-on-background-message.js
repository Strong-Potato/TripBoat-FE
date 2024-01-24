// import {getMessaging, onBackgroundMessage} from 'firebase/messaging/sw';

// import {firebaseConfig} from './messaging-init-in-sw';

// const messaging = getMessaging(firebaseConfig);

// async function background() {
//   onBackgroundMessage(messaging, (payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//       body: 'Background Message body.',
//       icon: '/firebase-logo.png',
//     };

//     self.registration.showNotification(notificationTitle, notificationOptions);
//   });
// }

// background();
