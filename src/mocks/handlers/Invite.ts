import { http, HttpResponse } from "msw";

import { spaceInfo } from "@/types/sidebar";

const inviteCode = {
  status: 200,
  message: "members/join/spaces",
  data: {
    code: "qwerasdfqerasdfqewrasdfqwer",
  },
};

export const invite = [
  http.post("/api/members/join/spaces", async ({ request }) => {
    const { nickname, spaceId } = (await request.json()) as spaceInfo;

    if (nickname && spaceId) {
      return HttpResponse.json(inviteCode, { status: 200 });
    } else {
      return HttpResponse.json(
        { message: "nickname과 spaceId가 필요합니다." },
        { status: 400 },
      );
    }
  }),

  http.post("/api/members/join", async ({ cookies }) => {
    if (cookies.inviteCode) {
      return HttpResponse.json({ message: "가입 완료" }, { status: 200 });
    } else {
      return HttpResponse.json(
        { message: "필요한 쿠키가 없습니다." },
        { status: 400 },
      );
    }
  }),
];
