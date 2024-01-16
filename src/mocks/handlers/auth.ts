import { http, HttpResponse, PathParams } from "msw";

interface LoginBody {
  email: string;
  password: string;
}

interface Email {
  email: string;
}

interface Sert {
  email: string;
  token: string;
}

interface Form {
  email: string;
  password: string;
  nickname: string;
  token: string;
}

const UserDummy = [
  { email: "test@naver.com", password: "asdasd123#", nickname: "테스트계정" },
];

const FormDummy = [
  {
    email: "test2@naver.com",
    password: "asdasd123#",
    nickname: "테스트",
    profile: "https://avatars.githubusercontent.com/u/100336573?v=4",
    token: "asdf1234",
  },
];

export const auth = [
  /* ----------------------------------- <로그인> ---------------------------------- */

  http.post<PathParams, LoginBody>("api/login", async ({ request }) => {
    const { email, password } = await request.json();

    // 로그인 유저 정보 일치
    if (email === UserDummy[0].email && password === UserDummy[0].password) {
      return HttpResponse.json(null, {
        status: 200,
        headers: {
          "Set-Cookie": "access-token=msw-access, refresh-token=msw-refresh",
        },
      });
    }

    // 로그인 유저 정보 불일치
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
  }),

  /* ------------------------------------ <회원가입> ----------------------------------- */

  /* -------------------------------- 이메일 인증 요청 ------------------------------- */
  http.post<PathParams, Email>(
    "api/auth/register/send-email",
    async ({ request }) => {
      const { email } = await request.json();

      // 이메일 중복체크 실패
      if (email === UserDummy[0].email) {
        return HttpResponse.json({
          status: 200,
          response_code: 401,
          detail: "이미 가입된 이메일 입니다.",
          issue: "tripvote.site/error",
        });
      }

      // 이메일 중복체크 성공
      return HttpResponse.json({ status: 200 });
    },
  ),

  /* ------------------------------ 이메일 인증 완료 버튼 ------------------------------ */
  http.post<PathParams, Sert>(
    "api/auth/register/check-token",
    async ({ request }) => {
      const { email, token } = await request.json();

      // 인증 코드 일치
      if (email === FormDummy[0].email && token === FormDummy[0].token) {
        return HttpResponse.json({
          status: 200,
        });
      }

      // 인증 코드 불일치
      return HttpResponse.json({
        status: 200,
        response_code: 403,
        detail: "인증코드가 올바르지 않습니다.",
        issue: "tripvote.site/error",
      });
    },
  ),

  /* ------------------------------ 시작하기 버튼 (form 제출) ----------------------------- */
  http.post<PathParams, Form>("api/auth/register", async () => {
    // 회원가입 성공
    return HttpResponse.json({
      status: 200,
    });
  }),

  /* --------------------------------- <로그아웃> --------------------------------- */

  http.post("/api/logout", () => {
    console.log("로그아웃");

    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Set-Cookie": "tmpToken=abc;Path=/;Max-Age=0",
      },
    });
  }),
];
