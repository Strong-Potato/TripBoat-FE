/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";

import styles from "./Map.module.scss";

import flagMarker from "@/assets/homeIcons/map/flag.svg";
import bigFlagMarker from "@/assets/homeIcons/map/flag_big.svg";
import homeMarker from "@/assets/homeIcons/map/house.svg";
import bigHomeMarker from "@/assets/homeIcons/map/house_big.svg";
import forkMarker from "@/assets/homeIcons/map/restaurant.svg";
import bigForkMarker from "@/assets/homeIcons/map/restaurant_big.svg";

import MapItems from "./MapItems/MapItems";

import { SearchItemType } from "@/types/home";

interface PropsType {
  data: SearchItemType[];
  categoryChange: boolean;
}

function Map({ data, categoryChange }: PropsType) {
  const [currentpin, setCurrentPin] = useState<number | undefined>();
  const [map, setMap] = useState<any>(null);
  const [pin, setPin] = useState<any[]>([]);

  function setSmallPin(data: SearchItemType[]) {
    const currentMarkers: any[] = [];

    data.map((data) => {
      const image =
        data.category === "숙소"
          ? homeMarker
          : data.category === "맛집"
            ? forkMarker
            : flagMarker;
      const imageSize = new window.kakao.maps.Size(32, 32);
      const imageOption = { offset: new window.kakao.maps.Point(-6, -8) };

      const markerImage = new window.kakao.maps.MarkerImage(
        image,
        imageSize,
        imageOption,
      );
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(
          data.location.latitude,
          data.location.longtitude,
        ),
        image: markerImage,
      });
      marker.setMap(map);
      currentMarkers.push(marker);
    });
  }
  function setBigPin(data: SearchItemType[]) {
    const currentMarkers: any[] = [];

    data.map((data) => {
      const image =
        data.category === "숙소"
          ? bigHomeMarker
          : data.category === "맛집"
            ? bigForkMarker
            : bigFlagMarker;
      const imageSize = new window.kakao.maps.Size(44, 52);
      const imageOption = { offset: new window.kakao.maps.Point(0, 0) };

      const markerImage = new window.kakao.maps.MarkerImage(
        image,
        imageSize,
        imageOption,
      );
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(
          data.location.latitude,
          data.location.longtitude,
        ),
        image: markerImage,
      });
      marker.setZIndex(10);
      currentMarkers.push(marker);
    });
    currentMarkers[0].setMap(map);
    setPin([...currentMarkers]);
  }

  function removePin(marker: any[]) {
    marker.map((marker) => {
      marker.setMap(null);
    });
    return true;
  }

  // 컴포넌트 마운트, 카테고리 전환 시 새로운 맵 생성
  useEffect(() => {
    const container = document.getElementById("map");
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
        bounds.extend(
          new window.kakao.maps.LatLng(
            data.location.latitude,
            data.location.longtitude,
          ),
        );
      });
      map.setBounds(bounds);
    }
  }, [map]);

  // 슬라이드 스크롤, 슬라이드 버튼 클릭 시 아이템의 핀 변경
  useEffect(() => {
    if (map && currentpin !== undefined) {
      console.log(pin);

      removePin(pin);
      pin[currentpin].setMap(map);
    }
  }, [currentpin]);

  return (
    <div className={styles.container}>
      <div className={styles.map} id="map" />
      <div className={styles.slide}>
        <MapItems
          data={data}
          categoryChange={categoryChange}
          setCurrentPin={setCurrentPin}
        />
      </div>
    </div>
  );
}

export default Map;
