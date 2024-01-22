/* eslint-disable @typescript-eslint/no-explicit-any */

import {useEffect, useState} from 'react';

import styles from './Map.module.scss';

import flagMarker from '@/assets/homeIcons/map/flag.svg';
import bigFlagMarker from '@/assets/homeIcons/map/flag_big.svg';
import homeMarker from '@/assets/homeIcons/map/house.svg';
import bigHomeMarker from '@/assets/homeIcons/map/house_big.svg';
import forkMarker from '@/assets/homeIcons/map/restaurant.svg';
import bigForkMarker from '@/assets/homeIcons/map/restaurant_big.svg';

import MapItems from './MapItems/MapItems';

import {SearchItemType} from '@/types/home';

interface PropsType {
  data: SearchItemType[];
  categoryChange: boolean;
}

function Map({data, categoryChange}: PropsType) {
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [throttlePermission, setThrottlePermission] = useState(false);
  const [currentpin, setCurrentPin] = useState<number | undefined>();
  const [map, setMap] = useState<any>(null);
  const [pin, setPin] = useState<any[]>([]);
  // 핀 생성
  function createPin(
    homeMarker: string,
    forkMarker: string,
    flagMarker: string,
    sizeWidth: number,
    sizeHeight: number,
    offSetWidth: number,
    offSetHeight: number,
    data: SearchItemType,
  ) {
    const image = data.contentTypeId === 32 ? homeMarker : data.contentTypeId === 39 ? forkMarker : flagMarker;
    const imageSize = new window.kakao.maps.Size(sizeWidth, sizeHeight);
    const imageOption = {
      offset: new window.kakao.maps.Point(offSetWidth, offSetHeight),
    };

    const markerImage = new window.kakao.maps.MarkerImage(image, imageSize, imageOption);
    const marker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(data.location.latitude, data.location.longtitude),
      image: markerImage,
    });
    return marker;
  }
  // 핀 클릭 이벤트
  function clickMarker(marker: any, index: number) {
    new window.kakao.maps.event.addListener(marker, 'click', function () {
      let timeOutId;
      if (window.innerWidth < 450) {
        if (timeOutId) {
          clearTimeout(timeOutId);
        }
        setThrottlePermission(true);
        timeOutId = setTimeout(() => {
          setThrottlePermission(false);
        }, 2000);
        const slide = document.querySelector('#map_slide');
        slide?.scrollTo({
          left: 343 * index - 20,
          behavior: 'smooth',
        });
      } else {
        setSlideLocation(-343 * index + 20);
      }
      setCurrentPin(index);
    });
  }
  // 기본 핀 지도에 설치
  function setSmallPin(data: SearchItemType[]) {
    const currentMarkers: any[] = [];

    data.map((data, i) => {
      const marker = createPin(homeMarker, forkMarker, flagMarker, 32, 32, -6, -8, data);
      clickMarker(marker, i);
      marker.setMap(map);
      currentMarkers.push(marker);
    });
  }
  // 큰 핀 상태에 담아두고 1번 데이터의 핀 지도에 설치
  function setBigPin(data: SearchItemType[]) {
    const currentMarkers: any[] = [];

    data.map((data) => {
      const marker = createPin(bigHomeMarker, bigForkMarker, bigFlagMarker, 44, 52, 0, 0, data);
      marker.setZIndex(10);
      currentMarkers.push(marker);
    });
    currentMarkers[0].setMap(map);
    setPin([...currentMarkers]);
  }
  // 핀 제거
  function removePin(marker: any[]) {
    marker.map((marker) => {
      marker.setMap(null);
    });
    return true;
  }

  // 컴포넌트 마운트, 카테고리 전환 시 새로운 맵 생성
  useEffect(() => {
    const container = document.getElementById('map');
    setPin([]);

    // React.StrictMode로 인해 map이 두 번 중첩되어 겹치는 현상 방지
    if (container) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }

    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 4,
    };
    setMap(new window.kakao.maps.Map(container, options));
  }, [data]);

  // 맵 생성 시 현재 데이터 좌표들의 바운드를 만들어 중심점 생성
  useEffect(() => {
    if (map) {
      const bounds = new window.kakao.maps.LatLngBounds();
      setSmallPin(data);
      setBigPin(data);
      data.map((data) => {
        bounds.extend(new window.kakao.maps.LatLng(data.location.latitude, data.location.longtitude));
      });
      map.setBounds(bounds);
    }
  }, [map]);

  // 슬라이드 스크롤, 슬라이드 버튼 클릭 시 아이템의 핀 변경
  useEffect(() => {
    if (map && currentpin !== undefined) {
      removePin(pin);
      pin[currentpin].setMap(map);
    }
  }, [currentpin]);

  return (
    <div className={styles.container}>
      <div className={styles.map} id='map' />
      <div className={styles.slide}>
        <MapItems
          data={data}
          categoryChange={categoryChange}
          slideLocation={slideLocation}
          throttlePermission={throttlePermission}
          setCurrentPin={setCurrentPin}
          setSlideLocation={setSlideLocation}
        />
      </div>
    </div>
  );
}

export default Map;
