import React from 'react';

import hall from '../assets/images/hall.jpg';
import naverMap from '../assets/icons/naver_map.png';

import styles from './Location.module.css';

function Location() {
  const onButtonClick = () => {
    window.open('https://naver.me/FeOCfejW', '_blank');
  };

  return (
    <section className={styles.location}>
      <h3 className={styles.caption}><span>LOCATION</span></h3>

      <div className={styles.image_wrap}>
        <img src={hall} alt="홀 이미지" />
      </div>

      <div className={styles.traffic_wrap}>
        <ul>
          <li className={styles.list}>
            <span>주소</span>
            <ul>
              <li>
                서울 중구 세종대로9길 41, 퍼시픽타워<br />
                20층 오펠리스 웨딩컨벤션
              </li>
            </ul>
          </li>
          
          <li className={styles.list}>
            <span>지하철 이용 시</span>
            <ul>
              <li>
                <span className={styles.subway_1}>1</span>
                <span className={styles.subway_2}>2</span>
                시청역 9번 출구 도보 4분
              </li>
              <li>
              <span className={styles.subway_1}>1</span>
              <span className={styles.subway_4}>4</span>
                서울역 3번 출구 도보 7분
              </li>
            </ul>
          </li>

          <li className={styles.list}>
            <span>버스 이용 시</span>
            <ul>
              <li>
                <span className={styles.bus_stop_name}>[02233] 신한은행본점 정류장</span>
                <div className={styles.bus_first_row}>
                  <p>
                    <span className={styles.bus_green}>일반</span>
                    790, 799
                  </p>
                  <p>
                    <span className={styles.bus_red}>광역</span>
                    9401, 9703, 9714
                  </p>
                </div>
                <p>
                  <span className={styles.bus_red}>직행</span>
                  1000, 1200, 1900, 32101, 4101, 4103, <br />
                  <span className={styles.bus_transparent}>직행</span>
                  500B, 5005, 5500-2, 8800, 9000
                </p>
              </li>
            </ul>
          </li>

          <li className={styles.list}>
            <span>자가용 이용 시</span>
            <ul>
              <li className={styles.parking_info}>
                퍼시픽타워 지하주차장 - 3시간 무료<br />
                (로비에서 <span>셀프 주차등록</span> 가능)
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <button className={styles.map_button} onClick={onButtonClick}>
          <img src={naverMap} alt="네이버지도 아이콘" />
          <span>네이버 지도 바로가기</span>
      </button>
    </section>
  );
}

export default Location;
