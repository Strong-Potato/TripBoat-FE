/* eslint-disable @typescript-eslint/no-explicit-any */

import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";

import styles from "./MapInDetail.module.scss";

import BigHomeMarker from "@/assets/homeIcons/map/house_big.svg?react";

import MapModal from "../MapModal/MapModal";

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
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const handleMapDoubleClick = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <Map
        center={{ lat: coordinate.lat, lng: coordinate.lng }}
        className={styles.container}
        draggable={false}
        zoomable={false}
        level={3}
        onClick={onOpen}
        onDoubleClick={handleMapDoubleClick}
      >
        <CustomOverlayMap
          position={{ lat: coordinate.lat, lng: coordinate.lng }}
        >
          <BigHomeMarker />
        </CustomOverlayMap>
      </Map>
      <MapModal
        isOpen={isOpen}
        onClose={onClose}
        lat={coordinate.lat}
        lng={coordinate.lng}
        name={"호텔 Loft"}
      />
    </>
  );
}

export default MapInDetail;
