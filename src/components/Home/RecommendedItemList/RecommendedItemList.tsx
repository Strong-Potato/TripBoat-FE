import {useState} from 'react';

import styles from './RecommendedItemList.module.scss';

import useComponentSize from '@/hooks/useComponetSize';

import SlideButton from '@/components/SlideButton/SlideButton';

import RecommendedItem from './RecommendedItem/RecommendedItem';

import {RecommendedItemDataType} from '@/types/home';

interface PropsType {
  apiNum: number;
}

function RecommendedItemList({apiNum}: PropsType) {
  const [data, setData] = useState<RecommendedItemDataType[]>();
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();

  const recommendedItem = [
    [
      {
        id: 2046954,
        contentTypeId: 1,
        title: '롯데시티호텔 제주',
        thumbnail: 'https://www.lottehotel.com/content/dam/lotte-hotel/lotte/jeju/main/4427-01-560-mai-LTJE.jpg',
        areaCode: 39,
        sigunguCode: 1,
        category: '숙소',
        rating: '4.5',
      },
      {
        id: 2804372,
        contentTypeId: 1,
        title: '하운드호텔 부산역점',
        thumbnail:
          'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/297028773.jpg?k=9c276dfb0e6bf4096483b56901e98b6a843937e7afc62206edde1ab4421cf6a0&o=',
        areaCode: 6,
        sigunguCode: 5,
        category: '숙소',
        rating: '4.3',
      },
      {
        id: 142769,
        contentTypeId: 1,
        title: '그랜드 인터컨티넨탈 서울 파르나스',
        thumbnail:
          'https://pix8.agoda.net/hotelImages/149130/0/5ed2d79f8bc36f329544bf7ddb205081.jpg?ca=7&ce=1&s=1024x768',
        areaCode: 1,
        sigunguCode: 1,
        category: '숙소',
        rating: '4.5',
      },
      {
        id: 2907277,
        contentTypeId: 1,
        title: '라마다속초호텔',
        thumbnail:
          'https://pix8.agoda.net/hotelImages/1276680/-1/4a89954f3a1e111dab3a4d7e858ebab1.jpg?ca=0&ce=1&s=512x384',
        areaCode: 32,
        sigunguCode: 5,
        category: '숙소',
        rating: '4.1',
      },
      {
        id: 2819964,
        contentTypeId: 1,
        title: '그랜드 조선 제주',
        thumbnail: 'https://pix8.agoda.net/hotelImages/18875336/-1/7215b8a9841ac0179c23301301c20a9c.jpg?ce=0&s=512x384',
        areaCode: 39,
        sigunguCode: 1,
        category: '숙소',
        rating: '4.5',
      },
      {
        id: 2706608,
        contentTypeId: 1,
        title: '경주 오릉한옥',
        thumbnail:
          'https://mblogthumb-phinf.pstatic.net/MjAyMjA5MTJfMjk4/MDAxNjYyOTg4MjgzNTEw.Q9hG_pGCf_FZZxt3skTy-rRW2TIGUT1NkC4OzUIPtjMg.6bm7HjlLIeGec2RSQyLv38C9wzFuproRmna-inYz8Jcg.JPEG.sjfmf5588/1662988284079.jpg?type=w800',
        areaCode: 35,
        sigunguCode: 2,
        category: '숙소',
        rating: '4.2',
      },
      {
        id: 2570435,
        contentTypeId: 1,
        title: '더블힐링펜션',
        thumbnail: 'https://ak-d.tripcdn.com/images/22041d000001eied8148C_R_600_400_R5_D.webp',
        areaCode: 37,
        sigunguCode: 6,
        category: '숙소',
        rating: '4.3',
      },
      {
        id: 3073495,
        contentTypeId: 1,
        title: '인스파이어 엔터테인먼트 리조트',
        thumbnail: 'https://ak-d.tripcdn.com/images/1mc1d12000cuj8fhk9E0C_R_600_400_R5_D.webp',
        areaCode: 2,
        sigunguCode: 10,
        category: '숙소',
        rating: '4.2',
      },
      {
        id: 2756802,
        contentTypeId: 1,
        title: '블루원리조트 프라이빗콘도',
        thumbnail: 'https://cd.blueone.com/img/01condo/private/s0201_img3.jpg',
        areaCode: 35,
        sigunguCode: 2,
        category: '숙소',
        rating: '4.5',
      },
      {
        id: 2783770,
        contentTypeId: 1,
        title: '더 메이 호텔',
        thumbnail:
          'https://ak-d.tripcdn.com/images/0226p120009zufiaqAEF2_Z_960_660_R5_D.webp?proc=watermark/image_trip1,l_ne,x_16,y_16,w_67,h_16;digimark/t_image,logo_tripbinary;ignoredefaultwm,1A8F',
        areaCode: 37,
        sigunguCode: 12,
        category: '숙소',
        rating: '4.4',
      },
    ],
    [
      {
        id: 3065360,
        contentTypeId: 1,
        title: '부산요트 투어 요트야',
        thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/119386/832573_large_1686709791.jpg?1686709791',
        areaCode: 6,
        sigunguCode: 16,
        category: '레포츠',
        rating: '5.0',
      },
      {
        id: 2774550,
        contentTypeId: 1,
        title: '알펜시아리조트 눈썰매장',
        thumbnail: 'https://www.alpensia.com/images/ski/ski_sled_04.jpg',
        areaCode: 32,
        sigunguCode: 15,
        category: '레포츠',
        rating: '4.4',
      },
      {
        id: 131878,
        contentTypeId: 1,
        title: '오크밸리스키장',
        thumbnail:
          'https://thumb.tidesquare.com/tour/public/product/PRV3000000012/PRD3000214495/origin/20230919054639313_xhnmy.jpg?type=thum',
        areaCode: 32,
        sigunguCode: 9,
        category: '레포츠',
        rating: '3.9',
      },
      {
        id: 131519,
        contentTypeId: 1,
        title: '그랜드하얏트 서울 아이스링크',
        thumbnail:
          'https://t2.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/56y8/image/rdK0l3jBvzz_-2v5_VN-P-JGvEA.jpg',
        areaCode: 1,
        sigunguCode: 21,
        category: '레포츠',
        rating: '4.5',
      },
      {
        id: 2648177,
        contentTypeId: 1,
        title: '아쿠아필드 하남',
        thumbnail: 'https://m.starfield.co.kr/cdn/nstfd/images/tenant/hanam/TN201608091951332396/img_swiper_03_02.jpg',
        areaCode: 31,
        sigunguCode: 30,
        category: '레포츠',
        rating: '4.4',
      },
      {
        id: 702551,
        contentTypeId: 1,
        title: '스파랜드 센텀시티',
        thumbnail: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/115727/884233_medium_1695113694.jpg?1695113694',
        areaCode: 6,
        sigunguCode: 16,
        category: '레포츠',
        rating: '4.5',
      },
      {
        id: 2714241,
        contentTypeId: 1,
        title: '아르떼뮤지엄 제주',
        thumbnail:
          'https://image.kkday.com/v2/image/get/w_960%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/product_103871/20220617024719_dCb7Y/jpg',
        areaCode: 39,
        sigunguCode: 1,
        category: '문화시설',
        rating: '4.4',
      },
      {
        id: 126714,
        contentTypeId: 1,
        title: '한화리조트 설악워터피아',
        thumbnail:
          'https://www.hanwha.co.kr/download.do?path=contents/reportDataImage&oriName=ec82aceca784365fec84a4ec958520ec9b8ced84b0ed94bcec958420ec95bceab2bd2e6a7067&svrName=157708391795997256.jpg&menu=reportDataImage&seq=5413',
        areaCode: 32,
        sigunguCode: 5,
        category: '레포츠',
        rating: '4.2',
      },
      {
        id: 131301,
        contentTypeId: 1,
        title: '비발디파크 스키장',
        thumbnail: 'https://www.sonohotelsresorts.com/cimage/we/Resort/202301/images/DmWebA_1673944963349.jpg',
        areaCode: 32,
        sigunguCode: 16,
        category: '레포츠',
        rating: '4.4',
      },
      {
        id: 1045657,
        contentTypeId: 1,
        title: '반얀트리 클럽 앤 스파 서울',
        thumbnail: 'https://image.goodchoice.kr/resize_490x348/affiliate/2017/06/14/5940944a3ebdd.jpg',
        areaCode: 1,
        sigunguCode: 24,
        category: '레포츠',
        rating: '4.5',
      },
    ],
  ];

  return (
    <div className={styles.container}>
      <SlideButton
        // ref의 left값 state
        slideLocation={slideLocation}
        // left값 setState
        setSlideLocation={setSlideLocation}
        // 리스트 목록 아이템의 width
        itemWidth={144}
        // 리스트의 갭
        flexGap={16}
        // 아이템 갯수
        itemNumber={recommendedItem[apiNum].length}
        // 목록 전체 넓이
        slideSize={size}
      />

      <div
        className={styles.slide_box}
        ref={componentRef}
        style={{
          overflow: size.width < 449 ? 'scroll' : 'visible',
          left: slideLocation + 'px',
        }}
      >
        {recommendedItem[apiNum].map((data, i) => (
          <RecommendedItem data={data} key={data.title + i} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedItemList;
