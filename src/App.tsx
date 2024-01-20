import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {CookiesProvider} from 'react-cookie';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {BrowserRouter} from 'react-router-dom';

import './sass/index.scss';

import MainRouter from './routes/MainRouter/MainRouter';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
        </DndProvider>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
