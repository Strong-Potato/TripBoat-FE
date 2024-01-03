import { http, HttpResponse } from "msw";

const UserDummy = [
  { id: "elonmusk", nickname: "Elon Musk" },
  { id: "vbghdl", nickname: "남궁종민" },
];

export const auth = [
  http.get("/api/login", () => {
    console.log("로그인", UserDummy[1]);

    return HttpResponse.json(UserDummy[1], {
      status: 200,
      headers: {
        "Set-Cookie": "tmpToken=abc;",
      },
    });
  }),

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
