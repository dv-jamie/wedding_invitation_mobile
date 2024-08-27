import React, { useRef, useState } from 'react';

import prevArrow from '../assets/icons/prev_arrow.svg';
import nextArrow from '../assets/icons/next_arrow.svg';
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
        { src: img3, alt: "이미지1" },
        { src: img4, alt: "이미지2" },
        { src: img2, alt: "이미지3" },
        { src: img1, alt: "이미지4" },
      ],
    },
    {
      title: "2022 Black",
      images: [
        { src: img4, alt: "이미지1" },
        { src: img3, alt: "이미지2" },
        { src: img2, alt: "이미지3" },
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
      title: "2024 Europe",
      images: [
        { src: img2, alt: "이미지1" },
        { src: img3, alt: "이미지2" },
        { src: img4, alt: "이미지3" },
        { src: img1, alt: "이미지4" },
      ],
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const slideRefs = useRef([]);

  const onSlideClick = (index) => {
    slideRefs.current[activeSlideIndex].scrollLeft = 0;
    setActiveSlideIndex(index);
    setActiveImageIndex(0);
  };
  
  const handlePrevSlide = (index) => {
    if (slideRefs.current[index]) {
      const slideWidth = slideRefs.current[index].clientWidth;
      slideRefs.current[index].scrollLeft -= slideWidth;
      setActiveImageIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleNextSlide = (index) => {
    if (slideRefs.current[index]) {
      const slideWidth = slideRefs.current[index].clientWidth;
      slideRefs.current[index].scrollLeft += slideWidth;
      setActiveImageIndex((prev) => Math.min(prev + 1, imageSlides[index].images.length - 1));
    }
  };

  return (
    <section className={styles.gallery}>
      <h3 className={styles.caption}><span>GALLERY</span></h3>

      <div className={styles.image_wrap}>
        {/* 이미지 슬라이드 */}
        {imageSlides.map((slide, index) => (
          <div
            key={index}
            className={styles.slide_container}
            onClick={() => onSlideClick(index)}
          >
            <div className={`${styles.slide_title} ${activeSlideIndex === index ? styles.hidden : ''}`}>
              {slide.title}
            </div>

            <ul
              className={`${styles.image_slide} ${activeSlideIndex === index ? styles.active : ''}`}
              ref={(el) => (slideRefs.current[index] = el)}
            >
              {slide.images.map((image, imgIndex) => (
                <li key={imgIndex}>
                  <img src={image.src} alt={image.alt} />
                </li>
              ))}
            </ul>

            {/* 슬라이드 버튼 */}
            {activeSlideIndex === index && (
              <div className={styles.slide_button_wrap}>
                <button
                  className={styles.prev_button}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevSlide(index);
                  }}
                  disabled={activeImageIndex === 0}
                >
                  <img src={prevArrow} alt="슬라이드버튼"/>
                </button>

                <button
                  className={styles.next_button}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextSlide(index);
                  }}
                  disabled={activeImageIndex >= slide.images.length - 1}
                >
                  <img src={nextArrow} alt="슬라이드버튼"/>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
