import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@chakra-ui/react";
import { AiOutlineLeft } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";

import styles from "./MapModal.module.scss";

import BigHomeMarker from "@/assets/homeIcons/map/house_big.svg?react";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  lat: number;
  lng: number;
  name: string;
}

function MapModal({ isOpen, onClose, lat, lng, name }: MapModalProps) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerContent>
        <DrawerHeader className={styles.header}>
          <AiOutlineLeft fontSize="2.4rem" onClick={onClose} cursor="pointer" />
          <span>{name}</span>
        </DrawerHeader>

        <DrawerBody className={styles.body} p="0">
          <Map center={{ lat: lat, lng: lng }} className={styles.map} level={3}>
            <CustomOverlayMap position={{ lat: lat, lng: lng }}>
              <BigHomeMarker />
            </CustomOverlayMap>
          </Map>
        </DrawerBody>

        <DrawerFooter className={styles.footer}>
          <div className={styles.flexBox}>
            <div className={styles.footer__card}>
              <img
                src="https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg"
                alt=""
              />
              <div className={styles.footer__card__textWrapper}>
                <p className={styles.footer__card__textWrapper__name}>{name}</p>
                <p className={styles.footer__card__textWrapper__category}>
                  숙소 서울
                </p>
              </div>
              <FaRegHeart
                fontSize="2.4rem"
                cursor="pointer"
                className={styles.footer__card__icon}
                // onClick={handleHeartClick}
              />{" "}
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default MapModal;
