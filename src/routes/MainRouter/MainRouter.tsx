import {Route, Routes} from 'react-router-dom';

import AddPlaceFromVote from '@/pages/AddPlaceFromVote/AddPlaceFromVote';
import FindPassword from '@/pages/Auth/FindPassword/FindPassword';
import Login from '@/pages/Auth/Login/Login';
import ModifyPassword from '@/pages/Auth/ModifyPassword/ModifyPassword';
import AgreePrivacy from '@/pages/Auth/Signup/Agree/AgreePrivacy';
import AgreeService from '@/pages/Auth/Signup/Agree/AgreeService';
import Signup from '@/pages/Auth/Signup/Signup';
import Withdrawal from '@/pages/Auth/Withdrawal/Withdrawal';
import Calendar from '@/pages/Calendar/Calendar';
import CandidatesMap from '@/pages/CandidatesMap/CandidatesMap';
import Detail from '@/pages/Detail/Detail';
import Home from '@/pages/Home/Home';
import MapZoomIn from '@/pages/MapZoomIn/MapZoomIn';
import RegionSearch from '@/pages/RegionSearch/RegionSearch';
import SearchFromHome from '@/pages/SearchFromHome/SearchFromHome';
import Trip from '@/pages/Trip/Trip';
import ModifyProfile from '@/pages/User/ModifyProfile/ModifyProfile';
import MyReview from '@/pages/User/MyReview/MyReview';
import MySpace from '@/pages/User/MySpace/MySpace';
import User from '@/pages/User/User';
import UserPrivacy from '@/pages/User/UserPrivacy/UserPrivacy';
import Vote from '@/pages/Vote/Vote';
import VoteMemo from '@/pages/Vote/VoteMemo/VoteMemo';
import Dashboard from '@/routes/Dashboard/Dashboard';

function MainRouter() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path='/trip/:id' element={<Trip />} />
        <Route path='/heart' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/user/privacy' element={<UserPrivacy />} />
        <Route path='/user/profile/edit' element={<ModifyProfile />} />
        <Route path='/user/myspace' element={<MySpace />} />
        <Route path='/user/myreview' element={<MyReview />} />
      </Route>
      <Route path='/auth/login' element={<Login />} />
      <Route path='/votes/:id' element={<Vote />} />
      <Route path='/votes/:id/votememo' element={<VoteMemo />} />
      <Route path='/votes/:id/map' element={<CandidatesMap />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/auth/signup' element={<Signup />} />
      <Route path='/auth/signup/agreePrivacy' element={<AgreePrivacy />} />
      <Route path='/auth/signup/agreeService' element={<AgreeService />} />
      <Route path='/auth/password/find' element={<FindPassword />} />
      <Route path='/auth/password/modify' element={<ModifyPassword />} />
      <Route path='/auth/withdrawal' element={<Withdrawal />} />
      <Route path='/search' element={<SearchFromHome />} />
      <Route path='/trip/:id/selectDate' element={<Calendar />} />
      <Route path='/trip/:id/selectRegion' element={<RegionSearch />} />
      <Route path='/trip/:id/map' element={<MapZoomIn />} />
      <Route path='/trip/:id/add/vote' element={<AddPlaceFromVote />} />
    </Routes>
  );
}

export default MainRouter;
