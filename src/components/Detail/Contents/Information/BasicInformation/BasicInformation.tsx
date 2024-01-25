import {AiOutlineLink} from 'react-icons/ai';
import {FaRegClock} from 'react-icons/fa';
import {IoMdCall} from 'react-icons/io';
import {MdPlace} from 'react-icons/md';

import styles from './BasicInformation.module.scss';

import MapInDetail from './MapInDetail/MapInDetail';

interface BasicInformationProps {
  location: {
    address: string;
    addressDetail: string;
    phone: string;
    areaCode: number;
    sigunguCode: number;
    zipCode: number;
    latitude: number;
    longitude: number;
  };
  openTime: string;
  title: string;
  thumbnail: string;
  id: number;
  contentTypeId: number;
}

function BasicInformation({location, openTime, title, thumbnail, id, contentTypeId}: BasicInformationProps) {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>기본정보</div>
      <MapInDetail
        lat={location.latitude}
        lng={location.longitude}
        title={title}
        thumbnail={thumbnail}
        id={id}
        contentTypeId={contentTypeId}
        areaCode={location.areaCode}
      />
      <div className={styles.container__contents}>
        <div className={styles.container__contents__item}>
          <MdPlace color='#979C9E' fontSize='2.4rem' />
          <span>{location.address}</span>
        </div>
        {location.phone && (
          <div className={styles.container__contents__item}>
            <IoMdCall color='#979C9E' fontSize='2.4rem' />
            <span>{location.phone}</span>
          </div>
        )}
        {false && (
          <div className={styles.container__contents__item}>
            <AiOutlineLink color='#979C9E' fontSize='2.4rem' />
            <a href='#'>공식 홈페이지 바로가기 </a>
          </div>
        )}
        {openTime && (
          <div className={styles.container__contents__item}>
            {/* 시계 아이콘 다름 */}
            <FaRegClock color='#979C9E' fontSize='2.4rem' />
            <span>{openTime}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default BasicInformation;
