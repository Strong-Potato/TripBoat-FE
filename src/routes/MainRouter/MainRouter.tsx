import {Route, Routes} from 'react-router-dom';

import Alarm from '@/pages/Alarm/Alarm';
import Calendar from '@/pages/Calendar/Calendar';
import CandidatesMap from '@/pages/CandidatesMap/CandidatesMap';
import Detail from '@/pages/Detail/Detail';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import RegionSearch from '@/pages/RegionSearch/RegionSearch';
import SearchFromHome from '@/pages/SearchFromHome/SearchFromHome';
import AgreePrivacy from '@/pages/Signup/Agree/AgreePrivacy';
import AgreeService from '@/pages/Signup/Agree/AgreeService';
import Signup from '@/pages/Signup/Signup';
import Trip from '@/pages/Trip/Trip';
import Vote from '@/pages/Vote/Vote';
import VoteMemo from '@/pages/Vote/VoteMemo/VoteMemo';
import Dashboard from '@/routes/Dashboard/Dashboard';

function MainRouter() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path='/trip' element={<Trip />} />
        <Route path='/heart' element={<Home />} />
        <Route path='/user' element={<Home />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/votes/:id' element={<Vote />} />
      <Route path='/votes/:id/votememo/:id' element={<VoteMemo />} />
      <Route path='/votes/:id/map' element={<CandidatesMap />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signup/agreePrivacy' element={<AgreePrivacy />} />
      <Route path='/signup/agreeService' element={<AgreeService />} />
      <Route path='/alarm' element={<Alarm />} />
      <Route path='/home/search' element={<SearchFromHome />} />
      <Route path='/trip/selectDate' element={<Calendar />} />
      <Route path='/trip/selectRegion' element={<RegionSearch />} />
    </Routes>
  );
}

export default MainRouter;
