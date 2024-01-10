import { http, HttpResponse } from "msw";

// const userData = [

// ]
const candidateData = [
  {
    name: "호텔",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    category: "숙박",
    location: "서울",
    voteUserId: ["Id123", "Id234", "Id345"],
    id: "1",
  },
  {
    name: "펜션",
    imageURL:
      "https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg",
    category: "숙박",
    location: "경기",
    voteUserId: ["Id123", "Id345"],
    id: "1",
  },
];

const voteListData = [
  {
    title: "호텔은 여기어때",
    profile: "https://avatars.githubusercontent.com/u/154430298?s=48&v=4",
    state: "진행 중",
    memo: "여기 개쩔드라",
    voteUserId: ["Id123", "Id234", "Id345"],
    candidates: candidateData,
    id: "11",
  },
];

export const vote = [
  http.get("/api/vote/", () => {
    console.log("voteListData", voteListData);
    return HttpResponse.json(voteListData, {
      status: 200,
    });
  }),
];
