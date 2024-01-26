import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Suspense} from 'react';
import {CookiesProvider} from 'react-cookie';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {BrowserRouter} from 'react-router-dom';
import './firebase/messaging-init-in-sw';

import './sass/index.scss';

import spinner from './assets/spinner.gif';
import MainRouter from './routes/MainRouter/MainRouter';
window.Kakao.init(import.meta.env.VITE_KAKAO_KEY);

const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: {
    refetchOnWindowFocus: false,
  },
});
function App() {
  return (
    <Suspense fallback={<img src={spinner} alt='Loading...' />}>
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
