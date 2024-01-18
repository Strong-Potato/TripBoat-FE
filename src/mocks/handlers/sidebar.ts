import { http, HttpResponse } from "msw";

const mySpaces = {
  status: 200,
  message: "member/my-spaces",
  data: [
    {
      title: "서울 여행",
      startDate: "2024.1.17",
      endDate: "2024.1.19",
      id: 1234,
      members: [
        {
          id: 1234,
          nickname: "lalala",
          profile: "laalal",
        },
      ],
    },
    {
      title: "강릉, 여수, 전주, 부산 여행",
      startDate: "2024.1.17",
      endDate: "2024.1.19",
      id: 1234,
      members: [
        {
          id: 1234,
          nickname: "lalala",
          profile: "laalal",
        },
      ],
    },
    {
      title: "여행 스페이스 3 (여행지 미정)",
      startDate: "",
      endDate: "",
      id: "1234",
      members: [
        {
          id: 1234,
          nickname: "lalala",
          profile: "laalal",
        },
      ],
    },
    {
      title: "여행 스페이스 4 (여행지 미정)",
      startDate: "",
      endDate: "",
      id: "1234",
      members: [
        {
          id: 1234,
          nickname: "lalala",
          profile: "laalal",
        },
      ],
    },
    {
      title: "강릉, 여수, 전주, 여행",
      startDate: "2024.1.17",
      endDate: "2024.1.19",
      id: 1234,
      members: [
        {
          id: 1234,
          nickname: "lalala",
          profile: "laalal",
        },
      ],
    },
    {
      title: "여행 스페이스 6 (여행지 미정)",
      startDate: "",
      endDate: "",
      id: 1234,
      members: [
        {
          id: 1234,
          nickname: "lalala",
          profile: "laalal",
        },
      ],
    },
    {
      title: "여행 스페이스 7 (여행지 미정)",
      startDate: "",
      endDate: "",
      id: 1234,
      members: [
        {
          id: 1234,
          nickname: "lalala",
          profile: "laalal",
        },
      ],
    },
    {
      title: "여행 스페이스 8 (여행지 미정)",
      startDate: "2024.1.17",
      endDate: "2024.1.19",
      id: 1234,
      members: [
        {
          id: 1234,
          nickname: "lalala",
          profile: "laalal",
        },
      ],
    },
    {
      title: "여행 스페이스 9 (여행지 미정)",
      startDate: "",
      endDate: "",
      id: 1234,
      members: [
        {
          id: 1234,
          nickname: "lalala",
          profile: "laalal",
        },
      ],
    },
    {
      title: "여행 스페이스 10 (여행지 미정)",
      startDate: "",
      endDate: "",
      id: 1234,
      members: [
        {
          id: 1234,
          nickname: "lalala",
          profile: "laalal",
        },
      ],
    },
    {
      title: "여행 스페이스 11 (여행지 미정)",
      startDate: "",
      endDate: "",
      id: 1234,
      members: [
        {
          id: 1234,
          nickname: "lalala",
          profile: "laalal",
        },
      ],
    },
    {
      title: "여행 스페이스 12 (여행지 미정)",
      startDate: "",
      endDate: "",
      id: 1234,
      members: [
        {
          id: 1234,
          nickname: "lalala",
          profile: "laalal",
        },
      ],
    },
    {
      title: "여행 스페이스 13 (여행지 미정)",
      startDate: "",
      endDate: "",
      id: 1234,
      members: [
        {
          id: 1234,
          nickname: "lalala",
          profile: "laalal",
        },
      ],
    },
    {
      title: "여행 스페이스 14 (여행지 미정)",
      startDate: "",
      endDate: "",
      id: 1234,
      members: [
        {
          id: 1234,
          nickname: "lalala",
          profile: "laalal",
        },
      ],
    },
    {
      title: "여행 스페이스 15 (여행지 미정)",
      startDate: "",
      endDate: "",
      id: 1234,
      members: [
        {
          id: 1234,
          nickname: "lalala",
          profile: "laalal",
        },
      ],
    },
  ],
};

const myInfo = {
  status: 200,
  message: "member/my-info",
  data: {
    nickname: "김철수",
    profile: "",
  },
};

export const sidebar = [
  http.get("/api/spaces", () => {
    return HttpResponse.json(mySpaces, {
      status: 200,
    });
  }),

  http.post("/api/spaces", () => {
    return HttpResponse.json({
      status: 200,
    });
  }),

  http.get("/api/members/my-info", () => {
    return HttpResponse.json(myInfo, {
      status: 200,
    });
  }),
];
