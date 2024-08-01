import React from 'react';

import img1 from '../assets/images/self3.jpg';
import img2 from '../assets/images/self1.jpg';
import img3 from '../assets/images/self2.jpg';
import img4 from '../assets/images/self4.jpg';

import styles from './Gallery.module.css';

function Gallery() {
  return (
    <section className={styles.gallery}>
      <h3 className={styles.caption}><span>GALLERY</span></h3>
      
      <ul className={styles.image_wrap}>
        <li>
          <img src={img1} alt="이미지1" />
          <span>2020</span>
        </li>

        <li>
          <img src={img2} alt="이미지2" />
          <span>2021</span>
        </li>

        <li>
          <img src={img3} alt="이미지3" />
          <span>2022</span>
        </li>

        <li>
          <img src={img4} alt="이미지4" />
          <span>2023</span>
        </li>

        <li>
          <img src={img1} alt="이미지1" />
          <span>2024</span>
        </li>
      </ul>
    </section>
  );
}

export default Gallery;
