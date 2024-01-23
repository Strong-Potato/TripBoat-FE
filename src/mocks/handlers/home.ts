import axios from 'axios';
import {http, HttpResponse} from 'msw';
import {Dispatch} from 'react';

// 홈
const userVoteData = [
  {
    title: '부산, 여수 여행',
    date: '1.17-1.19',
    profile: 'https://avatars.githubusercontent.com/u/154430298?s=48&v=4',
    discussion: '첫째 날 카페 어디갈래?',
    voteURL: '/votes/11',
  },
  {
    title: '부산, 여수 여행',
    date: '1.17-1.19',
    profile: 'https://avatars.githubusercontent.com/u/154430298?s=48&v=4',
    discussion: '둘째 날 카페 어디갈래?',
    voteURL: '/votes/11',
  },
  {
    title: '부산, 여수 여행',
    date: '1.17-1.19',
    profile: 'https://avatars.githubusercontent.com/u/154430298?s=48&v=4',
    discussion: '셋째 날 카페 어디갈래?',
    voteURL: '/votes/11',
  },
];
const tripSpaceData = [
  {
    tripTitle: '부산, 여수 여행',
    tripDay: '1.17(금) - 1.19(일)',
    tripImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jVJNFWatm6iNA6nlr3-dWeEzdC-rqXryt0YUm_3s2T8YMWTSVdb_l0USXjmod9MonOo&usqp=CAU',
    dDay: 'D-34',
  },
  {
    tripTitle: '부산, 여수 여행',
    tripDay: '1.17(금) - 1.19(일)',
    tripImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jVJNFWatm6iNA6nlr3-dWeEzdC-rqXryt0YUm_3s2T8YMWTSVdb_l0USXjmod9MonOo&usqp=CAU',
    dDay: 'D-34',
  },
  {
    tripTitle: '부산, 여수 여행',
    tripDay: '1.17(금) - 1.19(일)',
    tripImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jVJNFWatm6iNA6nlr3-dWeEzdC-rqXryt0YUm_3s2T8YMWTSVdb_l0USXjmod9MonOo&usqp=CAU',
    dDay: 'D-34',
  },
];
// 홈 검색
const searchKeywordData = {
  keywords: [
    {name: '감자', code: ''},
    {name: '강릉 감자', code: ''},
    {name: '강릉 감자유원지', code: ''},
    {name: '부산', code: ''},
    {name: '울산 맛집', code: ''},
    {name: '해운대 카페', code: ''},
    {name: '광안리 횟집', code: ''},
    {name: '깡통시장 깡돼후', code: ''},
  ],
};

const hotPlaces = {
  data: {
    data: {
      places: [
        {
          title: '대전 성심당',
          thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
          areaCode: 3,
          sigumguCode: 0,
          category: '맛집',
          id: 1,
          contentTypeId: 0,
        },
        {
          title: '대전 성심당',
          thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
          areaCode: 3,
          sigumguCode: 0,
          category: '맛집',
          id: 1,
          contentTypeId: 0,
        },
        {
          title: '대전 성심당',
          thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
          areaCode: 3,
          sigumguCode: 0,
          category: '맛집',
          id: 1,
          contentTypeId: 0,
        },
        {
          title: '대전 성심당',
          thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
          areaCode: 3,
          sigumguCode: 0,
          category: '맛집',
          id: 1,
          contentTypeId: 0,
        },
        {
          title: '대전 성심당',
          thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
          areaCode: 3,
          sigumguCode: 0,
          category: '맛집',
          id: 1,
          contentTypeId: 0,
        },
        {
          title: '대전 성심당',
          thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
          areaCode: 3,
          sigumguCode: 0,
          category: '맛집',
          id: 1,
          contentTypeId: 0,
        },
        {
          title: '대전 성심당',
          thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
          areaCode: 3,
          sigumguCode: 0,
          category: '맛집',
          id: 1,
          contentTypeId: 0,
        },
        {
          title: '대전 성심당',
          thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
          areaCode: 3,
          sigumguCode: 0,
          category: '맛집',
          id: 1,
          contentTypeId: 0,
        },
        {
          title: '대전 성심당',
          thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
          areaCode: 3,
          sigumguCode: 0,
          category: '맛집',
          id: 1,
          contentTypeId: 0,
        },
        {
          title: '대전 성심당',
          thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
          areaCode: 3,
          sigumguCode: 0,
          category: '맛집',
          id: 1,
          contentTypeId: 0,
        },
      ],
    },
  },
};

const searchItemData = {
  places: [
    {
      id: 0,
      contentTypeId: 32,
      title: '신라호텔',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5559034,
        longtitude: 127.0052509,
      },
      category: '숙소',
    },
    {
      id: 0,
      contentTypeId: 32,
      title: '조선호텔',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.564378,
        longtitude: 126.980058,
      },
      category: '숙소',
    },
    {
      id: 0,
      contentTypeId: 32,
      title: '그랜드하얏트',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.539167,
        longtitude: 126.9975,
      },
      category: '숙소',
    },
    {
      id: 0,
      contentTypeId: 39,
      title: '모던 아시안 누들 서비스',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.521901,
        longtitude: 127.0211758,
      },
      category: '음식점',
    },
    {
      id: 0,
      contentTypeId: 39,
      title: '더 타코부스',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5251773,
        longtitude: 127.0369327,
      },
      category: '음식점',
    },
    {
      id: 0,
      contentTypeId: 39,
      title: '콴안다오',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5184448,
        longtitude: 127.0214852,
      },
      category: '음식점',
    },
    {
      id: 0,
      contentTypeId: 39,
      title: '네로우 패스',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5362994,
        longtitude: 127.0006358,
      },
      category: '카페',
    },
    {
      id: 0,
      contentTypeId: 12,
      title: 'DDP',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5665256,
        longtitude: 127.0092236,
      },
      category: '관광지',
    },
    {
      id: 0,
      contentTypeId: 12,
      title: '서울숲',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5443878,
        longtitude: 127.0374424,
      },
      category: '관광지',
    },
    {
      id: 0,
      contentTypeId: 12,
      title: '롯데월드',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5111158,
        longtitude: 127.098167,
      },
      category: '관광지',
    },
    {
      id: 0,
      contentTypeId: 14,
      title: '국립중앙박물관',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5238506,
        longtitude: 126.9804702,
      },
      category: '문화시설',
    },
    {
      id: 0,
      contentTypeId: 15,
      title: '디큐브아트센터',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5090068,
        longtitude: 126.8896308,
      },
      category: '문화시설',
    },
    {
      id: 0,
      contentTypeId: 14,
      title: '인사아트프라자갤러리',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5738118,
        longtitude: 126.9855797,
      },
      category: '문화시설',
    },
    {
      id: 0,
      contentTypeId: 28,
      title: '한강',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5284304,
        longtitude: 126.9330781,
      },
      category: '레포츠',
    },
    {
      id: 0,
      contentTypeId: 28,
      title: '석호정',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5551076,
        longtitude: 127.0003094,
      },
      category: '레포츠',
    },
    {
      id: 0,
      contentTypeId: 28,
      title: '남산 케이블카',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5565908,
        longtitude: 126.9839744,
      },
      category: '레포츠',
    },
    {
      id: 0,
      contentTypeId: 38,
      title: '더 현대',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5258975,
        longtitude: 126.9284261,
      },
      category: '쇼핑',
    },
    {
      id: 0,
      contentTypeId: 38,
      title: '타임스퀘어',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5169933,
        longtitude: 126.9035425,
      },
      category: '쇼핑',
    },
    {
      id: 0,
      contentTypeId: 38,
      title: '스타필드',
      thumbnail: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
      location: {
        address: '서울',
        addressDetail: '서울',
        phone: '0',
        areaCode: 1,
        sigunguCode: 1,
        zipCode: 1,
        latitude: 37.5113686,
        longtitude: 127.0595931,
      },
      category: '쇼핑',
    },
  ],
};

export const home = [
  // 홈
  http.get('api/home/vote', () => {
    return HttpResponse.json(userVoteData, {
      status: 200,
    });
  }),
  http.get('api/home/tripSpace', () => {
    return HttpResponse.json(tripSpaceData, {
      status: 200,
    });
  }),
  // 홈 검색
  http.get('api/places/popular/keywords', () => {
    return HttpResponse.json(searchKeywordData, {
      status: 200,
    });
  }),
  http.get('api/places/popular', () => {
    return HttpResponse.json(hotPlaces, {
      status: 200,
    });
  }),
  http.get('api/places/search', () => {
    return HttpResponse.json(searchItemData, {
      status: 200,
    });
  }),
];

// 추후 api폴더가 생기면 함수를 옮기겠습니다.
export async function getData<T>(apiURL: string, set: Dispatch<React.SetStateAction<T>>) {
  try {
    const fetchData = await axios.get(`${apiURL}`);
    set(fetchData.data);
  } catch (error) {
    console.log(error);
  }
}
