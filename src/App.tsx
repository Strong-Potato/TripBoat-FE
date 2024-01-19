import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Suspense} from 'react';
import {CookiesProvider} from 'react-cookie';
import {BrowserRouter} from 'react-router-dom';
import './firebase/messaging-init-in-sw';

import './sass/index.scss';

import MainRouter from './routes/MainRouter/MainRouter';

const queryClient = new QueryClient();
function App() {
  return (
    <Suspense fallback='서스펜스 로딩입니다, 추후에 폴백UI를 추가하거나 아니면 지우겠습니다~~'>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
        </CookiesProvider>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
