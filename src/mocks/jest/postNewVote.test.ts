// import {getVoteInfo} from '../handlers/vote';
// const candidateData = [
//   {
//     id: 111,
//     placeId: 11111,
//     placeName: '기역호텔',
//     imageURL: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
//     category: '숙박',
//     location: '서울',
//     voteUserId: ['Id123', 'Id234', 'Id345'],
//     tagline: '예쁨~~~~~~~~~',
//     amIVoted: true,
//     latlng: {lat: 33.450705, lng: 126.570677},
//   },
//   {
//     id: 222,
//     placeId: 22222,
//     placeName: '니은펜션',
//     imageURL: 'https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg',
//     category: '숙박',
//     location: '경기',
//     voteUserId: ['Id123', 'Id345'],
//     tagline: '여기 개쩔드라',
//     amIVoted: false,
//     latlng: {lat: 33.450936, lng: 126.569477},
//   },
//   {
//     id: 333,
//     placeId: 33333,
//     placeName: '기역호텔',
//     imageURL: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
//     category: '숙박',
//     location: '서울',
//     voteUserId: ['Id123', 'Id234', 'Id345'],
//     tagline: '예쁨~~~~~~~~~',
//     amIVoted: true,
//     latlng: {lat: 33.450879, lng: 126.56994},
//   },
//   {
//     id: 444,
//     placeId: 44444,
//     placeName: '니은펜션',
//     imageURL: 'https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg',
//     category: '숙박',
//     location: '경기',
//     voteUserId: ['Id123', 'Id345'],
//     tagline: '여기 개쩔드라',
//     amIVoted: false,
//     latlng: {lat: 33.451393, lng: 126.570738},
//   },
// ];

// // test('PostNewVote should return the correct response', async () => {
// //   const response = await PostNewVote({spaceId: 11, title: 'someTitle'});

// //   expect(response).toEqual({data: 11, message: '투표 만들기 성공'});
// // });

// test('getVoteData', async () => {
//   const response = getVoteInfo('11');

//   await expect(response).toEqual({
//     id: '11',
//     title: '호텔은 여기어때',
//     ownerProfile: {
//       id: '1996',
//       profile: 'https://avatars.githubusercontent.com/u/154430298?s=48&v=4',
//     },
//     votedMemberProfiles: [
//       {
//         id: 2323,
//         nickName: '로제',
//         profile: 'https://avatars.githubusercontent.com/u/154430298?s=48&v=4',
//       },
//       {
//         id: 3333,
//         nickName: '지수',
//         profile: 'https://avatars.githubusercontent.com/u/154430298?s=48&v=4',
//       },
//     ],
//     voteStatus: '진행 중',
//     voteUserId: ['Id123', 'Id234', 'Id345'],
//     candidates: candidateData,
//   });
// });
