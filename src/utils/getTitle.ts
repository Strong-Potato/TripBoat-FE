export const getTitle = (pathname: string) => {
  if (pathname.startsWith('/trip/') && /\d+$/.test(pathname)) {
    return '여행스페이스';
  }
  if (pathname.startsWith('/votes/') && pathname.endsWith('/map')) {
    return '지도';
  }
  if (pathname.startsWith('/votes/') && pathname.endsWith('/votememo')) {
    return '메모';
  }
  if (pathname.startsWith('/votes/') && /\d+$/.test(pathname)) {
    return '투표';
  }
  if (pathname.startsWith('/detail/')) {
    return '상세';
  }
  if (pathname.startsWith('/trip/') && pathname.includes('/selectDate')) {
    return '날짜선택';
  }
  if (pathname.startsWith('/trip/') && pathname.includes('/selectRegion')) {
    return '지역선택';
  }
  if (pathname.startsWith('/trip/') && pathname.includes('/map')) {
    return '지도';
  }
  if (pathname.startsWith('/trip/') && pathname.includes('/add/vote')) {
    return '일정추가';
  }
  const pathMap: {[key: string]: string} = {
    '/': '홈',
    '/heart': '찜',
    '/user': '마이페이지',
    '/user/privacy': '계정관리',
    '/user/profile/edit': '프로필 편집',
    '/user/myspace': '내 여행스페이스',
    '/user/myreview': '내 리뷰',
    '/home/search': '검색',
    '/auth/login': '로그인',
    '/auth/signup': '회원가입',
    '/auth/signup/agreePrivacy': '개인정보이용 약관',
    '/auth/signup/agreeService': '서비스이용 약관',
    '/auth/password/find': '비밀번호 찾기',
    '/auth/password/modify': '비밀번호 수정',
    '/auth/withdrawal': '다음에 또 만나요',
  };

  return pathMap[pathname] || '알 수 없는 경로';
};
