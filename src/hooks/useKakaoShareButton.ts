function useKakaoShareButton() {
  const handleKakaoClick = () => {
    window.Kakao.init(import.meta.env.VITE_KAKAO_KEY);
    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Share.createDefaultButton({
        objectType: "feed",
        container: "#kakaoShareButton",
        content: {
          title: `닉네임님의 '여행스페이스' 초대장`,
          description: "흰 돛과 일정만 있으면 어디든 갈 수 있어!",
          imageUrl:
            "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmefPK%2FbtsDhzDhoRo%2FjNgK9lkghZsrtwaB510jo1%2Fimg.png",
          link: {
            mobileWebUrl: "http://localhost:5173",
            webUrl: "http://localhost:5173",
          },
        },
        buttons: [
          {
            title: "같이 여행하기",
            link: {
              mobileWebUrl: "http://localhost:5173",
              webUrl: "http://localhost:5173",
            },
          },
        ],
      });
    }
  };

  return handleKakaoClick;
}

export default useKakaoShareButton;
