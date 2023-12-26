import { render, screen } from "@testing-library/react";

import App from "../App";

test("기본적인 테스트 예시", async () => {
  render(<App />);
  const umbutton = await screen.findByRole("button");
  expect(umbutton.innerHTML).toBe("눌러주세요");
});
