import {useEffect} from 'react';

import styles from './CandidatesMapBody.module.scss';

const CandidatesMapBody = () => {
  useEffect(() => {
    // 카카오 맵 초기화
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.978), // 초기 중심 좌표
      level: 5, // 초기 줌 레벨
    };
    const map = new window.kakao.maps.Map(container, options);

    // 추가적인 맵 기능 또는 이벤트 등을 여기에 추가할 수 있습니다.
  }, []);

  return (
    <div className={styles.container}>
      <div id='map' className={styles.map}></div>
    </div>
  );
};

export default CandidatesMapBody;
