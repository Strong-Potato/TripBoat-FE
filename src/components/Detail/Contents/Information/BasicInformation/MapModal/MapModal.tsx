import {Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader} from '@chakra-ui/react';
import {AiOutlineLeft} from 'react-icons/ai';
import {FaRegHeart} from 'react-icons/fa';
import {CustomOverlayMap, Map} from 'react-kakao-maps-sdk';

import styles from './MapModal.module.scss';

import BigHomeMarker from '@/assets/homeIcons/map/house_big.svg?react';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  lat: number;
  lng: number;
  title: string;
  thumbnail: string;
  contentTypeId: number;
  areaCode: number;
}

function MapModal({isOpen, onClose, lat, lng, title, thumbnail, contentTypeId, areaCode}: MapModalProps) {
  return (
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      size='mapModal'
      blockScrollOnMount={true}
      closeOnOverlayClick={true}
    >
      <DrawerContent>
        <DrawerHeader className={styles.header}>
          <AiOutlineLeft fontSize='2.4rem' onClick={onClose} cursor='pointer' />
          <span>{title}</span>
        </DrawerHeader>

        <DrawerBody className={styles.body} p='0'>
          <Map center={{lat: lat, lng: lng}} className={styles.map} level={3}>
            <CustomOverlayMap position={{lat: lat, lng: lng}}>
              <BigHomeMarker />
            </CustomOverlayMap>
          </Map>
        </DrawerBody>

        <DrawerFooter className={styles.footer}>
          <div className={styles.footer__card}>
            <img src={thumbnail} alt='' />
            <div className={styles.footer__card__textWrapper}>
              <p className={styles.footer__card__textWrapper__name}>{title}</p>
              <p className={styles.footer__card__textWrapper__category}>
                {contentTypeId} {areaCode}
              </p>
            </div>
            <FaRegHeart
              fontSize='2.4rem'
              cursor='pointer'
              className={styles.footer__card__icon}
              // onClick={handleHeartClick}
            />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default MapModal;
