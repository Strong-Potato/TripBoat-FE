import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Suspense} from 'react';
import {CookiesProvider} from 'react-cookie';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {BrowserRouter} from 'react-router-dom';
import './firebase/messaging-init-in-sw';
import 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';

import './sass/index.scss';

import MainRouter from './routes/MainRouter/MainRouter';
window.Kakao.init(import.meta.env.VITE_KAKAO_KEY);

const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: {
    refetchOnWindowFocus: false,
  },
});
function App() {
  const quotes = [
    '투표를 통해 여행 일정을 정해보세요',
    '카카오톡으로 친구와 가족들을 여행에 초대해보세요',
    '요즘 인기 있는 장소를 검색해보세요',
  ];
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
          }}
        >
          <dotlottie-player
            src='https://lottie.host/9bbe8f1a-3861-44ae-af3b-0498cff82b0c/YdyYmujINb.json'
            background='transparent'
            speed='1'
            loop
            autoplay
            style={{width: '64px', height: '64px'}}
          ></dotlottie-player>
          <p style={{marginBottom: '30px', fontSize: '14px', fontWeight: 'bold'}}>
            {quotes[Math.floor(Math.random() * quotes.length)]}
          </p>
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <DndProvider backend={HTML5Backend}>
            <BrowserRouter>
              <MainRouter />
            </BrowserRouter>
          </DndProvider>
        </CookiesProvider>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
