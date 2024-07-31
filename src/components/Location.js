import React from 'react';

import hall from '../assets/images/hall.jpg';
import link from '../assets/icons/link.svg';

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

      <div className={styles.text_wrap}>
        <div className={styles.hall_name}>
          퍼시픽타워 20층<br />
          오펠리스웨딩컨벤션 단독홀
        </div>

        <button className={styles.map_button} onClick={onButtonClick}>
          <img src={link} alt="링크 아이콘" />
          <span>네이버 지도 바로가기</span>
        </button>
      </div>

      <div className={styles.traffic_wrap}>
        <ul>
          <li className={styles.list}>
            <span>주소</span>
            <ul>
              <li>
                서울 중구 세종대로9길 41,<br />
                퍼시픽타워 20층 오펠리스 웨딩컨벤션
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
                  1000, 1200, 1900, 32101, 4101, 4103, 4108, 500B,<br />
                  5005, 5500-2, 8800, 9000, 9007, 9200, 9709, 9710
                </p>
              </li>
            </ul>
          </li>

          <li className={styles.list}>
            <span>자가용 이용 시</span>
            <ul>
              <li>
                <span className={styles.parking_icon}>P</span>
                퍼시픽타워 지하주차장 (3시간 무료)
                <p className={styles.parking_info}>
                  로비에 <span>셀프 주차등록</span> 공간이 마련되어 있습니다
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Location;
