import {Route, Routes} from 'react-router-dom';

import Head from '@/components/Head/Head';

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
import CheckTrip from '@/pages/Trip/CheckTrip';
import Trip from '@/pages/Trip/Trip';
import ModifyProfile from '@/pages/User/ModifyProfile/ModifyProfile';
import MyReview from '@/pages/User/MyReview/MyReview';
import MySpace from '@/pages/User/MySpace/MySpace';
import User from '@/pages/User/User';
import UserPrivacy from '@/pages/User/UserPrivacy/UserPrivacy';
import Vote from '@/pages/Vote/Vote';
import VoteMemo from '@/pages/Vote/VoteMemo/VoteMemo';
import Wishes from '@/pages/Wishes/Wishes';
import Dashboard from '@/routes/Dashboard/Dashboard';

function MainRouter() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route
          index
          element={
            <>
              <Head title='홈' />
              <Home />
            </>
          }
        />
        <Route
          path='/trip'
          element={
            <>
              <Head title='여행스페이스' />
              <CheckTrip />
            </>
          }
        />
        <Route
          path='/trip/:id'
          element={
            <>
              <Head title='여행스페이스' />
              <Trip />
            </>
          }
        />
        <Route
          path='/wishes'
          element={
            <>
              <Head title='찜' />
              <Wishes />
            </>
          }
        />
        <Route
          path='/user'
          element={
            <>
              <Head title='마이페이지' />
              <User />
            </>
          }
        />
        <Route
          path='/user/privacy'
          element={
            <>
              <Head title='계정관리' />
              <UserPrivacy />
            </>
          }
        />
        <Route
          path='/user/profile/edit'
          element={
            <>
              <Head title='프로필 수정' />
              <ModifyProfile />
            </>
          }
        />
        <Route
          path='/user/myspace'
          element={
            <>
              <Head title='내 여행스페이스' />
              <MySpace />
            </>
          }
        />
        <Route
          path='/user/myreview'
          element={
            <>
              <Head title='내 리뷰' />
              <MyReview />
            </>
          }
        />
      </Route>
      <Route
        path='/search'
        element={
          <>
            <Head title='검색' />
            <SearchFromHome />
          </>
        }
      />
      <Route
        path='/detail/:id'
        element={
          <>
            <Head title='상세' />
            <Detail />
          </>
        }
      />
      <Route
        path='/votes/:id'
        element={
          <>
            <Head title='투표' />
            <Vote />
          </>
        }
      />
      <Route
        path='/votes/:id/votememo'
        element={
          <>
            <Head title='투표 메모' />
            <VoteMemo />
          </>
        }
      />
      <Route
        path='/votes/:id/map'
        element={
          <>
            <Head title='지도' />
            <CandidatesMap />
          </>
        }
      />
      <Route
        path='/auth/login'
        element={
          <>
            <Head title='로그인' />
            <Login />
          </>
        }
      />
      <Route
        path='/auth/signup'
        element={
          <>
            <Head title='회원가입' />
            <Signup />
          </>
        }
      />
      <Route
        path='/auth/signup/agreePrivacy'
        element={
          <>
            <Head title='개인정보수집 약관' />
            <AgreePrivacy />
          </>
        }
      />
      <Route
        path='/auth/signup/agreeService'
        element={
          <>
            <Head title='서비스 이용 약관 ' />
            <AgreeService />
          </>
        }
      />
      <Route
        path='/auth/password/find'
        element={
          <>
            <Head title='비밀번호 찾기' />
            <FindPassword />
          </>
        }
      />
      <Route
        path='/auth/password/modify'
        element={
          <>
            <Head title='비밀번호 수정' />
            <ModifyPassword />
          </>
        }
      />
      <Route
        path='/auth/withdrawal'
        element={
          <>
            <Head title='다음에 또 만나요' />
            <Withdrawal />
          </>
        }
      />
      <Route
        path='/trip/:id/selectDate'
        element={
          <>
            <Head title='날짜 선택' />
            <Calendar />
          </>
        }
      />
      <Route
        path='/trip/:id/selectRegion'
        element={
          <>
            <Head title='지역 탐색' />
            <RegionSearch />
          </>
        }
      />
      <Route
        path='/trip/:id/map'
        element={
          <>
            <Head title='지도' />
            <MapZoomIn />
          </>
        }
      />
      <Route
        path='/trip/:id/add/vote'
        element={
          <>
            <Head title='장소 추가' />
            <AddPlaceFromVote />
          </>
        }
      />
      <Route
        path='/wishes/bring'
        element={
          <>
            <Head title='찜 가져오기' />
            <Wishes />
          </>
        }
      />
    </Routes>
  );
}

export default MainRouter;
