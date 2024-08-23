import React, { useState } from 'react';

import img1 from '../assets/images/self3.jpg';
import img2 from '../assets/images/self1.jpg';
import img3 from '../assets/images/self2.jpg';
import img4 from '../assets/images/self4.jpg';

import styles from './Gallery.module.css';

function Gallery() {
  const imageSlides = [
    {
      title: "2020 Beige",
      images: [
        { src: img1, alt: "이미지1" },
        { src: img2, alt: "이미지2" },
        { src: img3, alt: "이미지3" },
        { src: img4, alt: "이미지4" },
      ],
    },
    {
      title: "2021 Red",
      images: [
        { src: img2, alt: "이미지1" },
        { src: img3, alt: "이미지2" },
        { src: img4, alt: "이미지3" },
        { src: img1, alt: "이미지4" },
      ],
    },
    {
      title: "2022 Gyeongju",
      images: [
        { src: img2, alt: "이미지1" },
        { src: img3, alt: "이미지2" },
        { src: img4, alt: "이미지3" },
        { src: img1, alt: "이미지4" },
      ],
    },
    {
      title: "2022 Black",
      images: [
        { src: img2, alt: "이미지1" },
        { src: img3, alt: "이미지2" },
        { src: img4, alt: "이미지3" },
        { src: img1, alt: "이미지4" },
      ],
    },
    {
      title: "2023 Blue",
      images: [
        { src: img2, alt: "이미지1" },
        { src: img3, alt: "이미지2" },
        { src: img4, alt: "이미지3" },
        { src: img1, alt: "이미지4" },
      ],
    },
    {
      title: "2024 Rome",
      images: [
        { src: img2, alt: "이미지1" },
        { src: img3, alt: "이미지2" },
        { src: img4, alt: "이미지3" },
        { src: img1, alt: "이미지4" },
      ],
    },
    {
      title: "2024 Firenze",
      images: [
        { src: img2, alt: "이미지1" },
        { src: img3, alt: "이미지2" },
        { src: img4, alt: "이미지3" },
        { src: img1, alt: "이미지4" },
      ],
    },
    {
      title: "2024 Paris",
      images: [
        { src: img2, alt: "이미지1" },
        { src: img3, alt: "이미지2" },
        { src: img4, alt: "이미지3" },
        { src: img1, alt: "이미지4" },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const onSlideClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.gallery}>
      <h3 className={styles.caption}><span>GALLERY</span></h3>
      
      <div className={styles.image_wrap}>
        {imageSlides.map((slide, index) => (
          <div
            key={index}
            className={styles.slide_container}
            onClick={() => onSlideClick(index)}
          >
            <div className={`${styles.slide_title} ${activeIndex === index ? styles.hidden : ''}`}>
              {slide.title}
            </div>

            <ul className={`${styles.image_slide} ${activeIndex === index ? styles.active : ''}`}>
              {slide.images.map((image, imgIndex) => (
                <li key={imgIndex}>
                  <img src={image.src} alt={image.alt} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
