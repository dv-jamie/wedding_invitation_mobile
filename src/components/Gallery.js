import React, { useRef, useState } from 'react';

import {
  firenze1, firenze2, firenze3, firenze4, firenze5, firenze6, firenze7, firenze8, firenze9, firenze10, firenze11, firenze12, firenze13, firenze14,
  paris1, paris2, paris4, paris5, paris6, paris7, paris8, paris9, paris10,
  rome2, rome5, rome6, rome10, rome12, rome13, rome14, rome15, rome17, rome19, rome22,
  year2023_1, year2023_2, year2023_3, year2023_4, year2023_5, year2023_6, year2023_7, year2023_8, year2023_9,
  year2022_2, year2022_3, year2022_4, year2022_5, year2022_6, year2022_7, year2022_8, year2022_9, year2022_10, year2022_11,
  gyeongju_1, gyeongju_2, gyeongju_3, gyeongju_4, gyeongju_5, gyeongju_6, gyeongju_8, gyeongju_9, gyeongju_10, gyeongju_11, gyeongju_12, gyeongju_13, gyeongju_14, gyeongju_15, gyeongju_16, gyeongju_17, gyeongju_18,
  year2021_1, year2021_2, year2021_3, year2021_4, year2021_5, year2021_6, year2021_7, year2021_8, year2021_9,
  year2020_1, year2020_2, year2020_3, year2020_4, year2020_5, year2020_6, year2020_7, year2020_8
} from '../assets/images/gallery';

import prevArrow from '../assets/icons/prev_arrow.svg';
import nextArrow from '../assets/icons/next_arrow.svg';

import styles from './Gallery.module.css';

function Gallery() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(-1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const slideContainerRefs = useRef([]);
  const slideRefs = useRef([]);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const onSlideClick = (e, index) => {
    const clickedSlideContainer = e.currentTarget

    if (index === activeSlideIndex) {
      setActiveSlideIndex(null);
      clickedSlideContainer.classList.remove('active')
    } else {
      if (activeSlideIndex !== null) {
        const previousSlideContainer = slideContainerRefs.current[activeSlideIndex];
        
        if (previousSlideContainer) {
          previousSlideContainer.classList.remove('active');
        }
      }
      
      // 새 슬라이드 열기
      setActiveSlideIndex(index);
      clickedSlideContainer.classList.add('active');
    }
    
    slideRefs.current[activeSlideIndex]?.scrollTo(0, 0);
    setActiveImageIndex(0);
  };

  const onTouchStart = (e) => {
    if (activeSlideIndex !== null) {
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const onTouchMove = (e) => {
    if (activeSlideIndex !== null) {
      touchEndX.current = e.touches[0].clientX;
    }
  };

  const onTouchEnd = (index) => {
    const touchDistance = touchStartX.current - touchEndX.current;
    
    if (index !== activeSlideIndex) return;

    if (touchDistance > 50) {
      handleNextSlide(index);
    } else if (touchDistance < -50) {
      handlePrevSlide(index);
    }
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
            ref={(el) => (slideContainerRefs.current[index] = el)}
            onClick={(e) => onSlideClick(e, index)}
            onTouchStart={(e) => onTouchStart(e)}
            onTouchMove={(e) => onTouchMove(e)}
            onTouchEnd={() => onTouchEnd(index)}
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

const imageSlides = [
  {
    title: "2024 Firenze",
    images: [
      { src: firenze1, alt: "이미지1" },
      { src: firenze2, alt: "이미지2" },
      { src: firenze3, alt: "이미지3" },
      { src: firenze4, alt: "이미지4" },
      { src: firenze5, alt: "이미지5" },
      { src: firenze6, alt: "이미지6" },
      { src: firenze7, alt: "이미지7" },
      { src: firenze8, alt: "이미지8" },
      { src: firenze9, alt: "이미지9" },
      { src: firenze10, alt: "이미지10" },
      { src: firenze11, alt: "이미지11" },
      { src: firenze12, alt: "이미지12" },
      { src: firenze13, alt: "이미지13" },
      { src: firenze14, alt: "이미지14" },
    ],
  },  
  {
    title: "2024 Paris",
    images: [
      { src: paris2, alt: "이미지2" },
      { src: paris1, alt: "이미지2" },
      { src: paris4, alt: "이미지4" },
      { src: paris5, alt: "이미지5" },
      { src: paris6, alt: "이미지6" },
      { src: paris7, alt: "이미지7" },
      { src: paris8, alt: "이미지8" },
      { src: paris9, alt: "이미지9" },
      { src: paris10, alt: "이미지10" },
    ],
  },
  {
    title: "2024 Rome",
    images: [
      { src: rome13, alt: "이미지13" },
      { src: rome2, alt: "이미지2" },
      { src: rome5, alt: "이미지5" },
      { src: rome6, alt: "이미지6" },
      { src: rome10, alt: "이미지10" },
      { src: rome12, alt: "이미지12" },
      { src: rome14, alt: "이미지14" },
      { src: rome15, alt: "이미지15" },
      { src: rome17, alt: "이미지17" },
      { src: rome19, alt: "이미지19" },
      { src: rome22, alt: "이미지22" },
    ],
  },
  {
    title: "2023 White & Blue",
    images: [
      { src: year2023_4, alt: "이미지4" },
      { src: year2023_3, alt: "이미지3" },
      { src: year2023_2, alt: "이미지2" },
      { src: year2023_5, alt: "이미지5" },
      { src: year2023_6, alt: "이미지6" },
      { src: year2023_7, alt: "이미지7" },
      { src: year2023_8, alt: "이미지8" },
      { src: year2023_9, alt: "이미지9" },
      { src: year2023_1, alt: "이미지1" },
    ],
  },
  {
    title: "2022 Black",
    images: [
      { src: year2022_2, alt: "이미지2" },
      { src: year2022_3, alt: "이미지3" },
      { src: year2022_4, alt: "이미지4" },
      { src: year2022_5, alt: "이미지5" },
      { src: year2022_6, alt: "이미지6" },
      { src: year2022_7, alt: "이미지7" },
      { src: year2022_8, alt: "이미지8" },
      { src: year2022_9, alt: "이미지9" },
      { src: year2022_10, alt: "이미지10" },
      { src: year2022_11, alt: "이미지11" }
    ],
  },
  {
    title: "2022 Gyeongju",
    images: [
      { src: gyeongju_1, alt: "이미지1" },
      { src: gyeongju_2, alt: "이미지2" },
      { src: gyeongju_3, alt: "이미지3" },
      { src: gyeongju_4, alt: "이미지4" },
      { src: gyeongju_5, alt: "이미지5" },
      { src: gyeongju_6, alt: "이미지6" },
      { src: gyeongju_8, alt: "이미지8" },
      { src: gyeongju_9, alt: "이미지9" },
      { src: gyeongju_10, alt: "이미지10" },
      { src: gyeongju_11, alt: "이미지11" },
      { src: gyeongju_12, alt: "이미지12" },
      { src: gyeongju_13, alt: "이미지13" },
      { src: gyeongju_14, alt: "이미지14" },
      { src: gyeongju_15, alt: "이미지15" },
      { src: gyeongju_16, alt: "이미지16" },
      { src: gyeongju_17, alt: "이미지17" },
      { src: gyeongju_18, alt: "이미지18" },
    ],
  },
  {
    title: "2021 Red",
    images: [
      { src: year2021_5, alt: "이미지5" },
      { src: year2021_1, alt: "이미지1" },
      { src: year2021_2, alt: "이미지2" },
      { src: year2021_3, alt: "이미지3" },
      { src: year2021_4, alt: "이미지4" },
      { src: year2021_6, alt: "이미지6" },
      { src: year2021_7, alt: "이미지7" },
      { src: year2021_8, alt: "이미지8" },
      { src: year2021_9, alt: "이미지9" }
    ],
  },
  {
    title: "2020 Beige",
    images: [
      { src: year2020_1, alt: "이미지1" },
      { src: year2020_2, alt: "이미지2" },
      { src: year2020_3, alt: "이미지3" },
      { src: year2020_4, alt: "이미지4" },
      { src: year2020_5, alt: "이미지5" },
      { src: year2020_6, alt: "이미지6" },
      { src: year2020_7, alt: "이미지7" },
      { src: year2020_8, alt: "이미지8" },
    ],
  },
];

export default Gallery;