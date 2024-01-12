import axios from "axios";
import { http, HttpResponse } from "msw";
import { Dispatch } from "react";

const candidateData = [
  {
    name: "기역호텔",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    category: "숙박",
    location: "서울",
    voteUserId: ["Id123", "Id234", "Id345"],
    voteCounts: 3,
    memo: "예쁨~~~~~~~~~",
    id: 1,
  },
  {
    name: "니은펜션",
    imageURL:
      "https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg",
    category: "숙박",
    location: "경기",
    voteUserId: ["Id123", "Id345"],
    voteCounts: 2,
    memo: "여기 개쩔드라",
    id: 2,
  },
  {
    name: "기역호텔",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    category: "숙박",
    location: "서울",
    voteUserId: ["Id123", "Id234", "Id345"],
    voteCounts: 3,
    memo: "예쁨~~~~~~~~~",
    id: 4,
  },
  {
    name: "니은펜션",
    imageURL:
      "https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg",
    category: "숙박",
    location: "경기",
    voteUserId: ["Id123", "Id345"],
    voteCounts: 2,
    memo: "여기 개쩔드라",
    id: 3,
  },
];

const voteListData = [
  {
    title: "호텔은 여기어때",
    profile: "https://avatars.githubusercontent.com/u/154430298?s=48&v=4",
    state: "진행 중",
    voteUserId: ["Id123", "Id234", "Id345"],
    candidates: candidateData,
    id: "11",
  },
  {
    title: "카페 고르자",
    profile: "https://avatars.githubusercontent.com/u/154430298?s=48&v=4",
    state: "결정완료",
    voteUserId: [],
    candidates: candidateData,
    id: "22",
  },
];

//const foundObject = voteListData.find((item) => item.id === targetId);

export const vote = [
  http.get("/api/votelist/", () => {
    return HttpResponse.json(voteListData, {
      status: 200,
    });
  }),

  http.get(`/api/votelist/11`, () => {
    return HttpResponse.json(voteListData[0], {
      status: 200,
    });
  }),

  http.get(`/api/votelist/22`, () => {
    return HttpResponse.json(voteListData[1], {
      status: 200,
    });
  }),
];

export async function getVoteListData<T>(
  setter: Dispatch<React.SetStateAction<T>>,
) {
  try {
    const { data: res } = await axios.get("/api/votelist/");
    setter(res);
  } catch (error) {
    console.error(error);
  }
}

export async function getVoteData<T>(
  id: string,
  setter: Dispatch<React.SetStateAction<T>>,
) {
  try {
    const { data: res } = await axios.get(`/api/votelist/${id}`);
    setter(res);
  } catch (error) {
    console.error(error);
  }
}
