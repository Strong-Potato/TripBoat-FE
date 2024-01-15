import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";

import styles from "./MapInDetail.module.scss";

import BigHomeMarker from "@/assets/homeIcons/map/house_big.svg?react";

// 장소 정보에 따라 마커 다르게 표시
function MapInDetail() {
  return (
    <Map
      center={{ lat: 37.511666, lng: 127.533559 }}
      className={styles.container}
    >
      <CustomOverlayMap position={{ lat: 37.511666, lng: 127.533559 }}>
        <BigHomeMarker />
      </CustomOverlayMap>
    </Map>
  );
}

export default MapInDetail;
