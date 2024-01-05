import { http, HttpResponse } from "msw";

const recommendedData = [
  [
    {
      title: "호텔 loft",
      location: "제주",
      score: "4.4",
      reviewNumber: "484",
    },
    {
      title: "호텔 loft",
      location: "제주",
      score: "4.4",
      reviewNumber: "484",
    },
    {
      title: "호텔 loft",
      location: "제주",
      score: "4.4",
      reviewNumber: "484",
    },
    {
      title: "호텔 loft",
      location: "제주",
      score: "4.4",
      reviewNumber: "484",
    },
  ],
  [
    {
      title: "호텔 lee",
      location: "서울",
      score: "4.8",
      reviewNumber: "184",
    },
    {
      title: "호텔 lee",
      location: "서울",
      score: "4.8",
      reviewNumber: "184",
    },
    {
      title: "호텔 lee",
      location: "서울",
      score: "4.8",
      reviewNumber: "184",
    },
    {
      title: "호텔 lee",
      location: "서울",
      score: "4.8",
      reviewNumber: "184",
    },
  ],
];

export const home = [
  http.get("/api/home/recommendedItem/1", () => {
    return HttpResponse.json(recommendedData[0], {
      status: 200,
    });
  }),
  http.get("/api/home/recommendedItem/2", () => {
    return HttpResponse.json(recommendedData[1], {
      status: 200,
    });
  }),
];
