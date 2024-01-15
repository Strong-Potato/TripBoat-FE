/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";

import styles from "./MapInDetail.module.scss";

import BigHomeMarker from "@/assets/homeIcons/map/house_big.svg?react";

interface Coordinate {
  lat: number;
  lng: number;
}

// 장소 정보에 따라 마커 다르게 표시
function MapInDetail() {
  const [coordinate, setCoordinate] = useState<Coordinate>({
    lat: 33.5563,
    lng: 126.79581,
  });

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();

    const callback = (result: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = result[0];
        setCoordinate({ lat: newSearch.y, lng: newSearch.x });
      }
    };

    geocoder.addressSearch("경기도 양평군 양평읍 백안리 9", callback);
  }, []);

  return (
    <Map
      center={{ lat: coordinate.lat, lng: coordinate.lng }}
      className={styles.container}
    >
      <CustomOverlayMap position={{ lat: coordinate.lat, lng: coordinate.lng }}>
        <BigHomeMarker />
      </CustomOverlayMap>
    </Map>
  );
}

export default MapInDetail;
