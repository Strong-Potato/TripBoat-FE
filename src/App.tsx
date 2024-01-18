import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";

import "./sass/index.scss";

import MainRouter from "./routes/MainRouter/MainRouter";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
