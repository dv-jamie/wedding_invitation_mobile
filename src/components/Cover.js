import React from 'react';
import styles from './Cover.module.css';

import mainImage from '../assets/images/main.jpg';
import img1 from '../assets/images/self3.jpg';
import img2 from '../assets/images/self1.jpg';
import img3 from '../assets/images/self2.jpg';
import img4 from '../assets/images/self4.jpg';
import img5 from '../assets/images/firenze2.jpg';
import img6 from '../assets/images/rome2.jpg';
import img7 from '../assets/images/rome1.jpg';
import img8 from '../assets/images/self5.jpg';
import img9 from '../assets/images/paris1.jpg';
import img10 from '../assets/images/hanbok1.jpg';
import img11 from '../assets/images/hanbok2.jpg';
import img12 from '../assets/images/firenze1.jpg';
import calligraphy from '../assets/images/calligraphy.svg';

function Cover() {
  return (
    <div className={styles.cover}>
      <div className={styles.img_grid}>
        <div className={styles.cell}><img src={img1} alt="이미지1" /></div>
        <div className={styles.cell}><img src={img2} alt="이미지2" /></div>
        <div className={styles.cell}><img src={img3} alt="이미지3" /></div>
        <div className={styles.cell}><img src={img4} alt="이미지4" /></div>
        
        <div className={styles.cell}><img src={img5} alt="이미지5" /></div>
        <div className={styles.largeCell}>
          <img src={mainImage} alt="메인이미지" />
          <img src={calligraphy} alt="캘리그라피" />
        </div>
        <div className={styles.cell}><img src={img6} alt="이미지6" /></div>
        
        <div className={styles.cell}><img src={img7} alt="이미지7" /></div>
        <div className={styles.cell}><img src={img8} alt="이미지8" /></div>
        
        <div className={styles.cell}><img src={img9} alt="이미지9" /></div>
        <div className={styles.cell}><img src={img10} alt="이미지10" /></div>
        <div className={styles.cell}><img src={img11} alt="이미지11" /></div>
        <div className={styles.cell}><img src={img12} alt="이미지12" /></div>
      </div>

      <div className={styles.title_wrap}>
        <h1 className={styles.main_title}><span>결혼식에 초대합니다</span></h1>
        <p className={styles.sub_title}>
          <span>24년 11월 30일 오후 12:30</span>
          <br />
          <span>오펠리스 웨딩컨벤션</span>
        </p>
      </div>
    </div>
  );
}

export default Cover;
