import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import "./sass/index.scss";
import { customTheme } from "./sass/chakraCustomTheme.tsx";

import App from "./App.tsx";

async function enableMocking() {
  if (import.meta.env.MODE !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RecoilRoot>
        <ChakraProvider theme={customTheme}>
          <App />
        </ChakraProvider>
      </RecoilRoot>
    </React.StrictMode>,
  );
});
