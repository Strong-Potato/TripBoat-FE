import { http, HttpResponse } from "msw";

const spaces = [
  {
    title: "서울",
    startDate: "2024.1.17",
    endDate: "2024.1.19",
    id: "1234",
  },
  {
    title: "강릉, 여수, 전주, 부산, 대전",
    startDate: "2024.1.17",
    endDate: "2024.1.19",
    id: "1234",
  },
  { title: "", startDate: "", endDate: "", id: "1234" },
  { title: "", startDate: "", endDate: "", id: "1234" },
  {
    title: "강릉, 여수, 전주, 부산, 대전",
    startDate: "2024.1.17",
    endDate: "2024.1.19",
    id: "1234",
  },
  { title: "", startDate: "", endDate: "", id: "1234" },
  { title: "", startDate: "", endDate: "", id: "1234" },
  { title: "", startDate: "", endDate: "", id: "1234" },
  { title: "", startDate: "2024.1.17", endDate: "2024.1.19", id: "1234" },
  { title: "", startDate: "", endDate: "", id: "1234" },
  { title: "", startDate: "", endDate: "", id: "1234" },
  { title: "", startDate: "", endDate: "", id: "1234" },
  { title: "", startDate: "", endDate: "", id: "1234" },
  { title: "", startDate: "", endDate: "", id: "1234" },
  { title: "", startDate: "", endDate: "", id: "1234" },
];

export const sidebar = [
  http.get("http://api.TripVote/spaces", () => {
    return HttpResponse.json(spaces, {
      status: 200,
    });
  }),
];
