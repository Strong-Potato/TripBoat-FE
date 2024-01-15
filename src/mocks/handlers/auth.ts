import { http, HttpResponse, PathParams } from "msw";

interface LoginBody {
  email: string;
  password: string;
}

const UserDummy = [
  { email: "test@naver.com", password: "asdasd123#", nickname: "테스트계정" },
];

export const auth = [
  http.post<PathParams, LoginBody>(
    "https://api.tripvote.site/login",
    async ({ request }) => {
      const { email, password } = await request.json();

      if (email === UserDummy[0].email && password === UserDummy[0].password) {
        return HttpResponse.json(null, {
          status: 200,
          headers: {
            "Set-Cookie": "access-token=msw-access, refresh-token=msw-refresh",
          },
        });
      } else {
        return HttpResponse.json(
          {
            status: 400,
            response_code: 401,
            detail: "이메일 또는 비밀번호를 확인해주세요.",
            issue: "tripvote.site/error",
          },
          {
            status: 400,
          },
        );
      }
    },
  ),

  http.post("/api/logout", () => {
    console.log("로그아웃");

    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Set-Cookie": "tmpToken=abc;Path=/;Max-Age=0",
      },
    });
  }),

  http.post("/api/signup", async ({ request }) => {
    console.log("회원가입", request.json());

    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 403,
    // })
    return HttpResponse.text(JSON.stringify("ok"), {
      status: 201,
      headers: {
        "Set-Cookie": "tmpToken=abc;Path=/;Max-Age=0",
      },
    });
  }),
];
