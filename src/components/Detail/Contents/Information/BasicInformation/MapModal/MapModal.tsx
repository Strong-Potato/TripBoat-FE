import {Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader} from '@chakra-ui/react';
import {AiOutlineLeft} from 'react-icons/ai';
import {CustomOverlayMap, Map} from 'react-kakao-maps-sdk';

import styles from './MapModal.module.scss';

import BigHomeMarker from '@/assets/homeIcons/map/house_big.svg?react';
import BigFlagMarker from '@/assets/homeIcons/map/flag_big.svg?react';
import BigRestaurantMarker from '@/assets/homeIcons/map/restaurant_big.svg?react';
import WishBtn from '@/components/Detail/Main/Title/TitleWishBtn/TitleWishBtn';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  lat: number;
  lng: number;
  title: string;
  thumbnail: string;
  id: number;
  contentTypeId: number;
  areaCode: number;
}

function MapModal({isOpen, onClose, lat, lng, title, thumbnail, id, contentTypeId, areaCode}: MapModalProps) {
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
              {contentTypeId === 32 && <BigHomeMarker />}
              {contentTypeId === 39 && <BigRestaurantMarker />}
              {contentTypeId !== 39 && contentTypeId !== 32 && <BigFlagMarker />}
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
            <WishBtn placeId={id} contentTypeId={contentTypeId} size={'2.4rem'} className={styles.footer__card__icon} />
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default MapModal;
