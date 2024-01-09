import axios from "axios";
import { http, HttpResponse } from "msw";
import { Dispatch } from "react";

const recommendedItem = [
  // 홈
  [
    {
      title: "호텔 loft",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "제주",
      score: "4.4",
      reviewNumber: "484",
      id: "1",
    },
    {
      title: "호텔 loft",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "제주",
      score: "4.4",
      reviewNumber: "484",
      id: "1",
    },
    {
      title: "호텔 loft",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "제주",
      score: "4.4",
      reviewNumber: "484",
      id: "1",
    },
    {
      title: "호텔 loft",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "제주",
      score: "4.4",
      reviewNumber: "484",
      id: "1",
    },
    {
      title: "호텔 loft",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "제주",
      score: "4.4",
      reviewNumber: "484",
      id: "1",
    },
    {
      title: "호텔 loft",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "제주",
      score: "4.4",
      reviewNumber: "484",
      id: "1",
    },
    {
      title: "호텔 loft",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "제주",
      score: "4.4",
      reviewNumber: "484",
      id: "1",
    },
    {
      title: "호텔 loft",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "제주",
      score: "4.4",
      reviewNumber: "484",
      id: "1",
    },
    {
      title: "호텔 loft",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "제주",
      score: "4.4",
      reviewNumber: "484",
      id: "1",
    },
  ],
  [
    {
      title: "호텔 lee",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "서울",
      score: "4.8",
      reviewNumber: "184",
      id: "1",
    },
    {
      title: "호텔 lee",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "서울",
      score: "4.8",
      reviewNumber: "184",
      id: "1",
    },
    {
      title: "호텔 lee",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "서울",
      score: "4.8",
      reviewNumber: "184",
      id: "1",
    },
    {
      title: "호텔 lee",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "서울",
      score: "4.8",
      reviewNumber: "184",
      id: "1",
    },
    {
      title: "호텔 lee",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "서울",
      score: "4.8",
      reviewNumber: "184",
      id: "1",
    },
    {
      title: "호텔 lee",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "서울",
      score: "4.8",
      reviewNumber: "184",
      id: "1",
    },
    {
      title: "호텔 lee",
      imageURL:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      location: "서울",
      score: "4.8",
      reviewNumber: "184",
      id: "1",
    },
  ],
];

const recommendedLocation = [
  {
    location: "제주",
    imageURL:
      "https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg",
  },
  {
    location: "부산",
    imageURL:
      "https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg",
  },
  {
    location: "강릉",
    imageURL:
      "https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg",
  },
  {
    location: "서울",
    imageURL:
      "https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg",
  },
];
const userVoteData = [
  {
    title: "부산, 여수 여행",
    date: "1.17-1.19",
    profile: "https://avatars.githubusercontent.com/u/154430298?s=48&v=4",
    discussion: "첫째 날 카페 어디갈래?",
    voteURL: "/vote",
  },
  {
    title: "부산, 여수 여행",
    date: "1.17-1.19",
    profile: "https://avatars.githubusercontent.com/u/154430298?s=48&v=4",
    discussion: "둘째 날 카페 어디갈래?",
    voteURL: "/vote",
  },
  {
    title: "부산, 여수 여행",
    date: "1.17-1.19",
    profile: "https://avatars.githubusercontent.com/u/154430298?s=48&v=4",
    discussion: "셋째 날 카페 어디갈래?",
    voteURL: "/vote",
  },
];
const tripSpaceData = [
  {
    tripTitle: "부산, 여수 여행",
    tripDay: "1.17(금) - 1.19(일)",
    tripImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jVJNFWatm6iNA6nlr3-dWeEzdC-rqXryt0YUm_3s2T8YMWTSVdb_l0USXjmod9MonOo&usqp=CAU",
    dDay: "D-34",
  },
  {
    tripTitle: "부산, 여수 여행",
    tripDay: "1.17(금) - 1.19(일)",
    tripImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jVJNFWatm6iNA6nlr3-dWeEzdC-rqXryt0YUm_3s2T8YMWTSVdb_l0USXjmod9MonOo&usqp=CAU",
    dDay: "D-34",
  },
  {
    tripTitle: "부산, 여수 여행",
    tripDay: "1.17(금) - 1.19(일)",
    tripImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jVJNFWatm6iNA6nlr3-dWeEzdC-rqXryt0YUm_3s2T8YMWTSVdb_l0USXjmod9MonOo&usqp=CAU",
    dDay: "D-34",
  },
];
// 홈 검색
const searchKeywordData = [
  "감자",
  "강릉 감자",
  "강릉 감자유원지",
  "부산",
  "울산 맛집",
  "해운대 카페",
  "광안리 횟집",
  "깡통시장 깡돼후",
];
const hotPlaces = [
  {
    title: "대전 성심당",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "맛집 · 대전",
    id: "1",
  },
  {
    title: "대전 성심당",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "맛집 · 대전",
    id: "1",
  },
  {
    title: "대전 성심당",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "맛집 · 대전",
    id: "1",
  },
  {
    title: "대전 성심당",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "맛집 · 대전",
    id: "1",
  },
  {
    title: "대전 성심당",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "맛집 · 대전",
    id: "1",
  },
  {
    title: "대전 성심당",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "맛집 · 대전",
    id: "1",
  },
];
const hotHotels = [
  {
    title: "호텔 loft",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "호텔 · 제주",
    id: "1",
  },
  {
    title: "호텔 loft",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "호텔 · 제주",
    id: "1",
  },
  {
    title: "호텔 loft",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "호텔 · 제주",
    id: "1",
  },
  {
    title: "호텔 loft",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "호텔 · 제주",
    id: "1",
  },
  {
    title: "호텔 loft",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "호텔 · 제주",
    id: "1",
  },
  {
    title: "호텔 loft",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "호텔 · 제주",
    id: "1",
  },
];
const searchItemData = [
  {
    title: "아시안 누들 서비스",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "서울",
    category: "맛집",
  },
  {
    title: "더 타코부스",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "서울",
    category: "맛집",
  },
  {
    title: "콴안다오",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "서울",
    category: "맛집",
  },
  {
    title: "신라호텔",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "서울",
    category: "숙소",
  },
  {
    title: "조선호텔",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "서울",
    category: "숙소",
  },
  {
    title: "그랜드하얏트",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "서울",
    category: "숙소",
  },
  {
    title: "더 현대",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "서울",
    category: "관광",
  },
  {
    title: "서울숲",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "서울",
    category: "관광",
  },
  {
    title: "롯데월드",
    imageURL:
      "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    location: "서울",
    category: "관광",
  },
];

export const home = [
  // 홈
  http.get("/api/home/recommendedItem/1", () => {
    return HttpResponse.json(recommendedItem[0], {
      status: 200,
    });
  }),
  http.get("/api/home/recommendedItem/2", () => {
    return HttpResponse.json(recommendedItem[1], {
      status: 200,
    });
  }),
  http.get("/api/home/recommendedLocation", () => {
    return HttpResponse.json(recommendedLocation, {
      status: 200,
    });
  }),
  http.get("/api/home/vote", () => {
    return HttpResponse.json(userVoteData, {
      status: 200,
    });
  }),
  http.get("/api/home/tripSpace", () => {
    return HttpResponse.json(tripSpaceData, {
      status: 200,
    });
  }),
  // 홈 검색
  http.get("/api/home/search/keyword", () => {
    return HttpResponse.json(searchKeywordData, {
      status: 200,
    });
  }),
  http.get("/api/home/search/hotplace", () => {
    return HttpResponse.json(hotPlaces, {
      status: 200,
    });
  }),
  http.get("/api/home/search/hothotel", () => {
    return HttpResponse.json(hotHotels, {
      status: 200,
    });
  }),
  http.get("/api/home/search/search", () => {
    return HttpResponse.json(searchItemData, {
      status: 200,
    });
  }),
];

// 추후 api폴더가 생기면 함수를 옮기겠습니다.
export async function getData<T>(
  apiURL: string,
  set: Dispatch<React.SetStateAction<T>>,
) {
  try {
    const fetchData = await axios.get(`/api/${apiURL}`);
    set(fetchData.data);
  } catch (error) {
    console.log(error);
  }
}
